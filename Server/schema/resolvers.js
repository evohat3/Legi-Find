const { AuthenticationError } = require('apollo-server-express');
const { User, Search } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    hello: () => 'Hello, World!'
  }//*,
  // Mutation: {
  //   addUser: async (parent, args) => {
  //     const user = await User.create(args);
  //     const token = signToken(user);

  //     return { token, user };
  //   },
  //   updateUser: async (parent, args, context) => {
  //     if (context.user) {
  //       return await User.findByIdAndUpdate(context.user._id, args, { new: true });
  //     }

  //     throw new AuthenticationError('Not logged in');
  //   },
  //   login: async (parent, { email, password }) => {
  //     const user = await User.findOne({ email });

  //     if (!User) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const correctPw = await user.isCorrectPassword(password);

  //     if(!correctPw) {
  //       throw new AuthenticationError('Incorrect credentials');
  //     }

  //     const token = signToken(user);

  //     return { token, user };
  //   }
  // }
}

module.exports = resolvers
