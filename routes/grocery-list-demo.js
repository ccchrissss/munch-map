const express = require('express')
const router = express.Router()
const groceryListDemoController = require('../controllers/grocery-list-demo')
// const todosController = require('../controllers/todos') 
// const { ensureAuth } = require('../middleware/auth')


router.get('/', groceryListDemoController.getGroceryList)
// // router.get('/', ensureAuth, todosController.getTodos)

router.post('/createGroceryListDemoItem', groceryListDemoController.createItem)
// // // router.post('/createTodo', todosController.createTodo)

router.put('/markCompleteGroceryListDemo', groceryListDemoController.markComplete)
// // // router.put('/markComplete', todosController.markComplete)

router.put('/markIncompleteGroceryListDemo', groceryListDemoController.markIncomplete)
// // // router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteGroceryListDemoItem', groceryListDemoController.deleteItem)
// // // router.delete('/deleteTodo', todosController.deleteTodo)

// router.put('/editNoteMealPlanDemo', mealPlanDemoController.editNoteMealPlanDemo)

module.exports = router