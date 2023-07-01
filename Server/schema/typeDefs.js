const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String
  }
  type Auth {
    token: ID
    user: User
  }
  type User {
    _id: ID
    email: String
  }
  type Mutation {
    addUser(email: String!, password: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs
