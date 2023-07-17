/* eslint-disable camelcase */
const { AuthenticationError } = require('apollo-server-express')
const { User, Search } = require('../models')
const { signToken } = require('../utils/auth')
require('dotenv').config()

const secret = process.env.SECRET_KEY
const expiration = process.env.EXPIRES_IN

// console.log(secret)
// console.log(expiration)

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    users: async () => {
      return User.find().populate('savedBills')
    },
    findUser: async (parent, { _id }) => {
      return User.findById(_id).populate('savedBills')
    },
    searches: async (parent, { _id }) => {
      const params = _id ? { _id } : {}
      return Search.find(params)
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findById(context.user._id).populate('savedBills')
      }
      throw new AuthenticationError('You need to be logged in!')
    }
  },
  Mutation: {
    addUser: async (parent, { email, password, first, last }) => {
      const user = await User.create({ email, password, first, last })
      const token = signToken(user, secret, expiration)
      return { token, user }
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true })
      }
      throw new AuthenticationError('Not logged in')
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })
      if (!user) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const correctPw = await user.isCorrectPassword(password)
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }
      const token = signToken(user, secret, expiration)
      return { token, user }
    },
    saveSearch: async (_, { billId, billNumber, changeHash, lastAction, lastActionDate, relevance, researchUrl, state, textUrl, title, url }, context) => {
      console.log('saveSearch resolver invoked with context', context)
      const search = await Search.create({
        billId,
        billNumber,
        changeHash,
        lastAction,
        lastActionDate,
        relevance,
        researchUrl,
        state,
        textUrl,
        title,
        url
      })
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $push: { savedBills: search._id } },
        { new: true }
      )
      console.log('Updated user:', user)
      return user
    }
  }
}

module.exports = resolvers
