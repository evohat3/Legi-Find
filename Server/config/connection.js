const mongoose = require('mongoose')

mongoose.set('debug', true)

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/LegitDB', {
  dbName: process.env.MONGODB_DB_NAME || 'LegitDB',
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    // console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })

module.exports = mongoose.connection
