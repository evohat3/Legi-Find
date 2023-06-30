const { AuthenticationError } = require('apollo-server-express');
const { User, Search } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    hello: () => 'Hello, World!'
  },
  
}

module.exports = resolvers
