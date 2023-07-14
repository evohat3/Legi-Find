const { gql } = require('apollo-server-express')

const typeDefs = gql`
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
    savedBills: [saveSearch]
  }

  type saveSearch {
    billId: ID
    billNumber: String
    changeHash: String
    lastAction: String
    lastActionDate: String
    relevance: Int
    researchUrl: String
    state: String
    textUrl: String
    title: String
    url: String
  }

  type Query {
    hello: String
    findUser(email: String): User
    users:[User]
    searches:[saveSearch]
  }

  type Mutation {
    addUser(email: String!, password: String!, first: String!, last: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveSearch(
      billId: ID
      billNumber: String
      changeHash: String
      lastAction: String
      lastActionDate: String
      relevance: Int
      researchUrl: String
      state: String
      textUrl: String
      title: String
      url: String): saveSearch
  }
`
module.exports = typeDefs
