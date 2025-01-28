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
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 1800
  }
})


module.exports = mongoose.model('meal-plan-demo', MealPlanDemoSchema)