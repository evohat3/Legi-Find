const { AuthenticationError } = require('apollo-server-express')
const { User } = require('../models')
const { signToken } = require('../utils/auth')
require('dotenv').config()

const secret = process.env.SECRET_KEY
const expiration = process.env.EXPIRES_IN

console.log(secret)
console.log(expiration)

const resolvers = {
  Query: {
    hello: () => 'Hello, World!',
    findUser: async (parent, { email }) => {
      return User.findOne({ email })
    }
  },
  Mutation: {
    addUser: async (parent, { email, password }) => {
      const user = await User.create({ email, password })
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

      const token = signToken(user)

      return { token, user }
    }
  }
}

module.exports = resolvers
