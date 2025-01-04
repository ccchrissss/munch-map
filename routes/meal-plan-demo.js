const express = require('express')
const router = express.Router()
const mealPlanDemoController = require('../controllers/meal-plan-demo')
// const todosController = require('../controllers/todos') 
// const { ensureAuth } = require('../middleware/auth')


router.get('/', mealPlanDemoController.getMealPlanDemo)
// // router.get('/', ensureAuth, todosController.getTodos)

router.post('/createMealPlanDemoItem', mealPlanDemoController.createMealPlanDemoItem)
// // router.post('/createTodo', todosController.createTodo)

// router.put('/markCompleteMealPlan', mealPlanController.markComplete)
// // router.put('/markComplete', todosController.markComplete)

// router.put('/markIncompleteMealPlan', mealPlanController.markIncomplete)
// // router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteMealPlanItem', mealPlanController.deleteMealPlanItem)
// // router.delete('/deleteTodo', todosController.deleteTodo)

// router.put('/editNoteMealPlan', mealPlanController.editNoteMealPlan)

module.exports = router