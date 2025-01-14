const mongoose = require('mongoose')

const MealPlanDemoSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  mealtime: {
    type: String,
    required: true
  },
  weekday: {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    required: false,
  },
  note: {
    type: String,
    required: false
  },
  userId: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    expires: 1800,
    required: true
  }
})


module.exports = mongoose.model('meal-plan-demo', MealPlanDemoSchema)