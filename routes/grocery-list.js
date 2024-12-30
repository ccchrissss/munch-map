const express = require('express')
const router = express.Router()
const groceryListController = require('../controllers/grocery-list')
// const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', groceryListController.getGroceryList)
// router.get('/', ensureAuth, todosController.getTodos)

router.post('/createGroceryListItem', groceryListController.createGroceryListItem)
// // router.post('/createTodo', todosController.createTodo)

// router.put('/markCompleteMealPlan', mealPlanController.markComplete)
// // router.put('/markComplete', todosController.markComplete)

// router.put('/markIncompleteMealPlan', mealPlanController.markIncomplete)
// // router.put('/markIncomplete', todosController.markIncomplete)

// router.delete('/deleteMealPlanItem', mealPlanController.deleteMealPlanItem)
// // router.delete('/deleteTodo', todosController.deleteTodo)

// router.put('/editNoteMealPlan', mealPlanController.editNoteMealPlan)

module.exports = router