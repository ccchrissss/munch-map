const GroceryListDemo = require('../models/grocery-list-demo')

module.exports = {

    getGroceryList: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        const groceryListDemoDocs = await GroceryListDemo.find()
        // ({ userId: req.user.id })
        // console.log('grocery list count documents: ', groceryListDocs)

        let groceryListDemoArr = Array.from(groceryListDemoDocs)
        // console.log('grocery list docs type of: ', typeof groceryListDocs)
        // console.log('grocery list Arr: ', groceryListArr)

        // Check the indexes of the the GroceryListDemo collection
        // const gLDemoIndexes = await GroceryListDemo.listIndexes()
        // console.log(gLDemoIndexes)

        // use this method when updating the TTL index. You have to clean out the indexes before updating them.
        // GroceryListDemo.cleanIndexes()

        res.render('grocery-list-demo.ejs',
          {
            groceryListDemoItems: groceryListDemoArr,
            user: req.user
          }
        )
      } catch(err) {
        console.log(err)
      }

    },

    createItem: async (req, res) => {

      try{
        console.log('req.body: ', req.body)

        await GroceryListDemo.create({
          item: req.body.item,
          category: req.body.category,
          numItem: 1, 
          complete: false,
          createdAt: new Date()
        })

        res.json('Grocery List Demo item created')
        // console.log('Grocery List item has been added!')

        res.redirect('/grocery-list-demo')
      } catch(err) {
        console.log(err)
      }

    },

    markComplete: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await GroceryListDemo.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: true
        })

        // console.log('Marked Complete')
        res.json('Marked Complete')

        res.redirect('/grocery-list-demo')
      } catch(err) {
        console.log(err)
      }

    },

    markIncomplete: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await GroceryListDemo.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: false
        })

        // console.log('Marked Incomplete')
        res.json('Marked Incomplete')

        res.redirect('/grocery-list-demo')
      } catch(err) {
        console.log(err)
      }

    },

    deleteItem: async (req, res) => {

      try {

        await GroceryListDemo.findOneAndDelete({ _id: req.body.idFromJS })
        
        // console.log('Deleted meal plan item')
        res.json('Deleted grocery list item')

        res.redirect('grocery-list-demo')
      } catch(err) {
        console.log(err)
      }

    },

    increaseNumItem: async (req, res) => {

      try {

        await GroceryListDemo.updateOne(
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

        await GroceryListDemo.updateOne(
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