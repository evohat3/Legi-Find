const mongoose = require('mongoose')

const { Schema } = mongoose

const searchSchema = new Schema({
  billID: Number,
  
  changeHash: String,

  billSummary: String,

  billText: String,

  billTitle: String

})

const Search = mongoose.model('Search', searchSchema)

module.exports = Search
