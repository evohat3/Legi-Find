const mongoose = require('mongoose')

const { Schema } = mongoose

const searchSchema = new Schema({
  billID: {
    type: Number,
    required: true,
    unique: true
  },
  changeHash: {
    type: String,
    required: true
  },
  billSummary: {
    type: String
  },
  billText: {
    type: String
  },
  billTitle: {
    type: String
  }
})

const Search = mongoose.model('Search', searchSchema)

module.exports = Search
