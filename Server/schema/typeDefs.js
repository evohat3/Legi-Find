const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String
  }


`;
  // type User {
  // _id: ID
  // email: String
  // }
module.exports = typeDefs
