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
    findUser: async (parent, { email }) => {
      return User.findOne({ email })
    }

  },
  Mutation: {
    addUser: async (parent, { email, password, first, last }) => {
      const user = await User.create({ email, password, first, last })
      const token = signToken(user, secret, expiration)

      return { token, user: { first, last, email, password } }
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

      const token = signToken(user)

      return { token, user }
    },

    saveSearch: async (_, { input }, context) => {
      // console.log('saveSearch resolver invoked with context', context)
      // if (!context.email) {
      //   throw new AuthenticationError('Not logged in')
      // }

      try {
        // Extract the necessary fields from the input object
        const { billId, changeHash, billSummary, billText, billTitle } = input

        // Create the search document
        const search = await Search.create({
          billId,
          changeHash,
          billSummary,
          billText,
          billTitle
        })
        // console.log('Created search document:', search)

        // Update the user's savedBills field
        const updatedUser = await User.findByIdAndUpdate(
          context.email,
          { $push: { savedBills: search._id } },
          { new: true }
        )
        console.log('Updated user:', updatedUser)

        console.log('updateUser', updatedUser)
        return updatedUser
      } catch (error) {
        console.error('Error saving search:', error)
        throw new Error('Failed to save search')
      }
    }
  }
}

module.exports = resolvers
