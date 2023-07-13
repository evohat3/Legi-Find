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

    saveBill: async (parent, { input }, context) => {
      // Check if the user is authenticated
      if (!context.user) {
        throw new AuthenticationError('Authentication required')
      }

      try {
        // Create a new search document using the Search model
        const newBill = new Search({
          // ... populate the fields of the new search document
        })

        // Save the bill to MongoDB
        const savedBill = await newBill.save()

        // Associate the bill with the user (assuming there's a user ID field in the Search model)
        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { savedBills: savedBill._id } },
          { new: true }
        ).populate('savedBills')

        // Return the updated user with the saved bill
        return user
      } catch (error) {
        console.error('Error saving bill:', error)
        throw new Error('Failed to save bill')
      }
    }
  }
}

module.exports = resolvers
