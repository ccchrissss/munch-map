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
  // userId: {
  //   type: String,
  //   required: false
  // }
  createdAt: {
    type: Date,
    expires: 1800,
    required: true,
  }

})


module.exports = mongoose.model('grocery-list-demo', GroceryListDemoSchema)