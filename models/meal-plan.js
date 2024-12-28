const mongoose = require('mongoose')

// item: req.body.item,
// mealtime: req.body.mealtime,
// weekday: req.body.weekday, 
// complete: false, 
// note: '',
// userId: '',

const MealPlanSchema = new mongoose.Schema({
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
  }
})


module.exports = mongoose.model('meal-plan', MealPlanSchema)