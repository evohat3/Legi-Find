const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    findUser(email: String): User
  }

  type Auth {
    token: ID
    user: User
  }

  type User {
    _id: ID
    email: String
    password: String
    first: String
    last: String
    savedBills: [Search]
  }

  type Search {
    _id: ID
    billID: Int
    changeHash: String
    billSummary: String
    billText: String
    billTitle: String
  }

  input SaveBillInput {
    billID: Int!
    changeHash: String!
    billSummary: String
    billText: String
    billTitle: String
  }
  
  type Mutation {
    addUser(email: String!, password: String!, first: String!, last: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveBill(input: SaveBillInput!): Search
  }
`
module.exports = typeDefs
