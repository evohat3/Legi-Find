const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String
  }
  type User {
    _id: ID
    email: String
  }
  type Mutation {
    addUser(email: String!, password: String!): User
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): User
  }
`;
module.exports = typeDefs
