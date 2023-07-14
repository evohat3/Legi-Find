const mongoose = require('mongoose')

const { Schema } = mongoose

const searchSchema = new Schema({
  relevance: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  billId: {
    type: Number,
    required: true
  },
  billNumber: {
    type: String,
    required: true
  },
  changeHash: {
    type: String,
    required: true
  },
  lastAction: {
    type: String,
    default: null
  },
  lastActionDate: {
    type: Date,
    default: null
  },
  researchUrl: {
    type: String,
    required: true
  },
  textUrl: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

const Search = mongoose.model('Search', searchSchema)

module.exports = Search
