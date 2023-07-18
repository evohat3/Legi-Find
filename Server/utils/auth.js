const jwt = require('jsonwebtoken')

require('dotenv').config()
const secret = process.env.SECRET_KEY
const expiration = process.env.EXPIRES_IN

console.log('Auth.js')

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization
    console.log('this is the token', token)
    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim()
    }

    if (!token) {
      return req
    }

    try {
      // console.log(secret)
      const { data } = jwt.verify(token, secret, { maxAge: expiration })
      req.user = data

      console.log('this is the user context', req.user)
    } catch {
      console.log('Invalid token')
    }
    return req
  },
  signToken: function ({ email, first, last, _id }) {
    const payload = { email, first, last, _id }
    // console.log('payload data', payload)
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  }
}
