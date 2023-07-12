const { gql } = require('apollo-server-express')

// TODO: add bill and array and saved bills
// legiQueryState(billID: String): searchState
// type searchState {
//   billID: ID
//   changehash: String
//   billSummary: String
//   billText: String
//   billTitle: String
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

  input SaveBillInput {
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
  
  type Mutation {
    addUser(email: String!, password: String!, first: String!, last: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
    saveSearch(input: SaveBillInput!): User
  }
`
module.exports = typeDefs
