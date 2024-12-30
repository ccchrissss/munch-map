const GroceryList = require('../models/grocery-list')

module.exports = {

    getGroceryList: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        const groceryListDocs = await GroceryList.find()
        // console.log('grocery list count documents: ', groceryListDocs)

        let groceryListArr = Array.from(groceryListDocs)
        // console.log('grocery list docs type of: ', typeof groceryListDocs)
        // console.log('grocery list Arr: ', groceryListArr)

        res.render('grocery-list.ejs', { groceryListItems: groceryListArr})
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
          userId: '',
          // , userId: req.user.id
        })

        // console.log('Meal Plan item has been added!')

        res.redirect('/grocery-list')
      } catch(err) {
        console.log(err)
      }

    },

    // markComplete: async (req, res) => {
    //   // console.log(req.body)

    //   try {
    //     // console.log(req.body)
    //     await MealPlan.findOneAndUpdate({ _id: req.body.idFromJS}, {
    //       complete: true
    //     })

    //     // console.log('Marked Complete')
    //     res.json('Marked Complete')

    //     res.redirect('/meal-plan')
    //   } catch(err) {
    //     console.log(err)
    //   }

    // },

    // markIncomplete: async (req, res) => {
    //   // console.log(req.body)

    //   try {
    //     // console.log(req.body)
    //     await MealPlan.findOneAndUpdate({ _id: req.body.idFromJS}, {
    //       complete: false
    //     })

    //     // console.log('Marked Incomplete')
    //     res.json('Marked Incomplete')

    //     res.redirect('/meal-plan')
    //   } catch(err) {
    //     console.log(err)
    //   }

    // },

    // deleteMealPlanItem: async (req, res) => {

    //   try {

    //     await MealPlan.findOneAndDelete({ _id: req.body.idFromJS })
        
    //     // console.log('Deleted meal plan item')
    //     res.json('Deleted meal plan item')

    //     res.redirect('meal-plan')
    //   } catch(err) {
    //     console.log(err)
    //   }

    // },

    // editNoteMealPlan: async (req, res) => {

    //   try {

    //     await MealPlan.updateOne(
    //       { _id: req.body.idFromJS },
    //       { $set: { note: req.body.noteFromJS } },
    //       {
    //         sort: { _id: -1 },
    //         upsert: false,
    //       }
    //     )

    //     console.log('Updated note meal plan');
    //     res.json('Updated note meal plan');
        
    //   } catch(err) {
    //     console.log(err)
    //   }
    // }


}