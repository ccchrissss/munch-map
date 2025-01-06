const express = require('express')
const router = express.Router()
const groceryListDemoController = require('../controllers/grocery-list-demo')
// const todosController = require('../controllers/todos') 
// const { ensureAuth } = require('../middleware/auth')


router.get('/', groceryListDemoController.getGroceryList)
// // router.get('/', ensureAuth, todosController.getTodos)

// router.post('/createMealPlanDemoItem', mealPlanDemoController.createMealPlanDemoItem)
// // // router.post('/createTodo', todosController.createTodo)

// router.put('/markCompleteMealPlanDemo', mealPlanDemoController.markCompleteDemo)
// // // router.put('/markComplete', todosController.markComplete)

// router.put('/markIncompleteMealPlanDemo', mealPlanDemoController.markIncompleteDemo)
// // // router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteMealPlanDemoItem', mealPlanDemoController.deleteMealPlanDemoItem)
// // // router.delete('/deleteTodo', todosController.deleteTodo)

// router.put('/editNoteMealPlanDemo', mealPlanDemoController.editNoteMealPlanDemo)

module.exports = router