const express = require('express')
const router = express.Router()
const mealPlanController = require('../controllers/meal-plan')
// const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', mealPlanController.getMealPlan)
// router.get('/', ensureAuth, todosController.getTodos)

router.post('/createMealPlanItem', mealPlanController.createMealPlanItem)
// router.post('/createTodo', todosController.createTodo)

router.post('/createMPFetch', mealPlanController.createMPFetch)

router.put('/markCompleteMealPlan', mealPlanController.markComplete)
// router.put('/markComplete', todosController.markComplete)

router.put('/markIncompleteMealPlan', mealPlanController.markIncomplete)
// router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteMealPlanItem', mealPlanController.deleteMealPlanItem)
// router.delete('/deleteTodo', todosController.deleteTodo)

router.put('/editNoteMealPlan', mealPlanController.editNoteMealPlan)

module.exports = router