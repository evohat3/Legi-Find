const mongoose = require('mongoose')

const { Schema } = mongoose

const searchSchema = new Schema({
  bill_id: {
    type: Number,
    required: true,
    unique: true
  },
  bill_title: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  text_url: {
    type: String
  },
  save_time: {
    type: Number
  }
})

const Search = mongoose.model('Search', searchSchema)

module.exports = Search
