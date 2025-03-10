const GroceryList = require('../models/grocery-list')

module.exports = {

    getGroceryList: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        const groceryListDocs = await GroceryList.find({ userId: req.user.id })
        // console.log('grocery list count documents: ', groceryListDocs)

        let groceryListArr = Array.from(groceryListDocs)
        // console.log('grocery list docs type of: ', typeof groceryListDocs)
        // console.log('grocery list Arr: ', groceryListArr)

        res.render('grocery-list.ejs',
          {
            groceryListItems: groceryListArr,
            user: req.user
          }
        )
      } catch(err) {
        console.log(err)
      }

    },

    createGroceryListItem: async (req, res) => {

      try{
        // console.log('req.body: ', req.body)

        await GroceryList.create({
          item: req.body.item,
          category: req.body.category,
          numItem: 1, 
          complete: false,
          userId: req.user.id
        })

        res.json('Grocery List item created')
        // console.log('Meal Plan item has been added!')

        res.redirect('/grocery-list')
      } catch(err) {
        console.log(err)
      }

    },

    markComplete: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await GroceryList.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: true
        })

        // console.log('Marked Complete')
        res.json('Marked Complete')

        res.redirect('/grocery-list')
      } catch(err) {
        console.log(err)
      }

    },

    markIncomplete: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await GroceryList.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: false
        })

        // console.log('Marked Incomplete')
        res.json('Marked Incomplete')

        res.redirect('/grocery-list')
      } catch(err) {
        console.log(err)
      }

    },

    deleteItemGroceryList: async (req, res) => {

      try {

        await GroceryList.findOneAndDelete({ _id: req.body.idFromJS })
        
        // console.log('Deleted meal plan item')
        res.json('Deleted grocery list item')

        res.redirect('grocery-list')
      } catch(err) {
        console.log(err)
      }

    },

    increaseNumItem: async (req, res) => {

      try {

        await GroceryList.updateOne(
          { _id: req.body.idFromJS },
          { $set: { numItem: Number(req.body.numItem) + 1 } }
        )

        console.log('Increased Number of Item');
        res.json('Number of Item Increased');

      } catch(err) {
        console.log(err)
      }

    },

    decreaseNumItem: async (req, res) => {

      try {

        await GroceryList.updateOne(
          { _id: req.body.idFromJS },
          { $set: { numItem: Number(req.body.numItem) - 1 } }
        )

        console.log('Decreased Number of Item');
        res.json('Number of Item Decreased');

      } catch(err) {
        console.log(err)
      }

    }


}