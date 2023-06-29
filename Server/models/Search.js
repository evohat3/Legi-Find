const mongoose = require('mongoose');

const { Schema } = mongoose;

const searchSchema  = new Schema({
    bill_id: {
        type: Number,
        required: true,
        unique: true
    }
})

module.exports = Search;