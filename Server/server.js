const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const path = require('path')
const { authMiddleware } = require('./utils/auth')
const { typeDefs, resolvers } = require('./schema/')
const db = require('./config/connection')

const PORT = process.env.PORT || 3001
const app = express()
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Client/build')))
}

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Client/build/index.html'))
})

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async () => {
  try {
    await server.start()
    server.applyMiddleware({ app })

    db.once('open', () => {
      app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`)
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
      })
    })
  } catch (err) {
    console.error('Error starting server:', err)
  }
}

// Call the async function to start the server
startApolloServer()
