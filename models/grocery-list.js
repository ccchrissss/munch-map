const mongoose = require('mongoose')

const GroceryListSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true
  },
  numItem: {
    type: String,
    required: false,
  },
  complete: {
    type: Boolean,
    required: false,
  },
  userId: {
    type: String,
    required: false
  }
})


module.exports = mongoose.model('grocery-list', GroceryListSchema)