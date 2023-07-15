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
      return User.findOne({ _id }).populate('savedBills');
    },
    searches: async (parent, { _id }) => {
      const params = _id ? {_id } : {}
      return Search.find(params)
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('savedBills')
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

    // *** saveSearch is invoked and takes in the bill data from the API

    saveSearch: async (_, { billId, billNumber, changeHash, lastAction, lastActionDate, relevance, researchUrl, state, textUrl, title, url }, context) => {
      console.log('saveSearch resolver invoked with context', context)

      // Create the search document that will store the saved searches
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
      // console.log('Created search document:', search)

      // Update the user's savedBills array so that it will populate the saved bills
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
