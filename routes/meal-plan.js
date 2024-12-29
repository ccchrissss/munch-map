const express = require('express')
const router = express.Router()
const mealPlanController = require('../controllers/meal-plan')
// const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', mealPlanController.getMealPlan)
// router.get('/', ensureAuth, todosController.getTodos)

router.post('/createMealPlanItem', mealPlanController.createMealPlanItem)
// router.post('/createTodo', todosController.createTodo)

router.put('/markCompleteMealPlan', mealPlanController.markComplete)
// router.put('/markComplete', todosController.markComplete)

// router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteTodo', todosController.deleteTodo)

module.exports = router