const mongoose = require('mongoose')

const MealPlanSchema = new mongoose.Schema({
  weekday: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: true,
  },
  note: {
    type: String,
    required: false
  },
  userId: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('Meal-Plan', MealPlanSchema)