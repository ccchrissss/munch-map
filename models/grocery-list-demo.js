const mongoose = require('mongoose')

const GroceryListDemoSchema = new mongoose.Schema({

  item: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  numItem: {
    type: String,
    required: false,
  },
  complete: {
    type: Boolean,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: '15m'
  }
})

// GroceryListDemoSchema.index(
//   { createdAt: 1 },
//   { expireAfterSeconds: 120 }
// )



module.exports = mongoose.model('grocery-list-demo', GroceryListDemoSchema)