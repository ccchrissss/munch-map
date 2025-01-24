const MealPlanDemo = require('../models/meal-plan-demo')

module.exports = {

    getMealPlanDemo: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        const mealPlanDemoDocs = await MealPlanDemo.find()
        // console.log('meal plan count documents: ', mealPlanDocs)

        let mealPlanDemoArr = Array.from(mealPlanDemoDocs)
        // console.log('meal plan docs type of: ', typeof mealPlanDocs)
        // console.log('meal plan Arr: ', mealPlanArr)

        res.render('meal-plan-demo.ejs',
          {
            mealPlanDemoStuff: mealPlanDemoArr,
            user: req.user
          }
        )
      } catch(err) {
        console.log(err)
      }

    },

    createMealPlanDemoItem: async (req, res) => {

      try{
        console.log('req.body: ', req.body)

        await MealPlanDemo.create({
          item: req.body.item,
          mealtime: req.body.mealtime,
          weekday: req.body.weekday, 
          complete: false, 
          note: '',
          createdAt: 1,
          // , userId: req.user.id
        })

        // console.log('Meal Plan item has been added!')

        res.redirect('/meal-plan-demo')
      } catch(err) {
        console.log(err)
      }

    },

    markCompleteDemo: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await MealPlanDemo.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: true
        })

        // console.log('Marked Complete')
        res.json('Marked Complete')

        res.redirect('/meal-plan-demo')
      } catch(err) {
        console.log(err)
      }

    },

    markIncompleteDemo: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await MealPlanDemo.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: false
        })

        // console.log('Marked Incomplete')
        res.json('Marked Incomplete')

        res.redirect('/meal-plan-demo')
      } catch(err) {
        console.log(err)
      }

    },

    deleteMealPlanDemoItem: async (req, res) => {

      try {

        await MealPlanDemo.findOneAndDelete({ _id: req.body.idFromJS })
        
        // console.log('Deleted meal plan item')
        res.json('Deleted meal plan demo item')

        res.redirect('meal-plan-demo')
      } catch(err) {
        console.log(err)
      }

    },

    editNoteMealPlanDemo: async (req, res) => {

      try {

        await MealPlanDemo.updateOne(
          { _id: req.body.idFromJS },
          { $set: { note: req.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )

        console.log('Updated note meal plan demo');
        res.json('Updated note meal plan demo');
        
      } catch(err) {
        console.log(err)
      }
    }


}