const express = require('express')
const router = express.Router()
const groceryListController = require('../controllers/grocery-list')
// const todosController = require('../controllers/todos') 
const { ensureAuth } = require('../middleware/auth')


router.get('/', groceryListController.getGroceryList)
// router.get('/', ensureAuth, todosController.getTodos)

router.post('/createGroceryListItem', groceryListController.createGroceryListItem)
// // router.post('/createTodo', todosController.createTodo)

router.put('/markCompleteGroceryList', groceryListController.markComplete)
// // router.put('/markComplete', todosController.markComplete)

router.put('/markIncompleteGroceryList', groceryListController.markIncomplete)
// // router.put('/markIncomplete', todosController.markIncomplete)

router.delete('/deleteItemGroceryList', groceryListController.deleteItemGroceryList)
// // router.delete('/deleteTodo', todosController.deleteTodo)

router.put('/increaseNumItemGroceryList', groceryListController.increaseNumItem)

router.put('/decreaseNumItemGroceryList', groceryListController.decreaseNumItem)



module.exports = router