const { gql } = require('apollo-server-express')

//TODO: add bill and array and saved bills
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
  }
  type Mutation {
    addUser(email: String!, password: String!, first: String!, last: String!): Auth
    updateUser(email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`
module.exports = typeDefs
