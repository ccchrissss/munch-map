const MealPlan = require('../models/meal-plan')

module.exports = {

    getMealPlan: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        
        const mealPlanDocs = await MealPlan.find({ userId: req.user.id })
        // console.log('meal plan count documents: ', mealPlanDocs)

        let mealPlanArr = Array.from(mealPlanDocs)
        // console.log('meal plan docs type of: ', typeof mealPlanDocs)
        // console.log('meal plan Arr: ', mealPlanArr)

        res.render('meal-plan.ejs',
          { 
            mealPlanStuff: mealPlanArr,
            user: req.user
          }
        )
      } catch(err) {
        console.log(err)
      }

    },

    createMealPlanItem: async (req, res) => {

      try{
        // console.log('req.body: ', req.body)

        await MealPlan.create({
          item: req.body.item,
          mealtime: req.body.mealtime,
          weekday: req.body.weekday, 
          complete: false, 
          note: '',
          userId: req.user.id
        })

        // console.log('Meal Plan item has been added!')

        res.redirect('/meal-plan')
      } catch(err) {
        console.log(err)
      }

    },

    markComplete: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await MealPlan.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: true
        })

        // console.log('Marked Complete')
        res.json('Marked Complete')

        res.redirect('/meal-plan')
      } catch(err) {
        console.log(err)
      }

    },

    markIncomplete: async (req, res) => {
      // console.log(req.body)

      try {
        // console.log(req.body)
        await MealPlan.findOneAndUpdate({ _id: req.body.idFromJS}, {
          complete: false
        })

        // console.log('Marked Incomplete')
        res.json('Marked Incomplete')

        res.redirect('/meal-plan')
      } catch(err) {
        console.log(err)
      }

    },

    deleteMealPlanItem: async (req, res) => {

      try {

        await MealPlan.findOneAndDelete({ _id: req.body.idFromJS })
        
        // console.log('Deleted meal plan item')
        res.json('Deleted meal plan item')

        res.redirect('meal-plan')
      } catch(err) {
        console.log(err)
      }

    },

    editNoteMealPlan: async (req, res) => {

      try {

        await MealPlan.updateOne(
          { _id: req.body.idFromJS },
          { $set: { note: req.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )

        console.log('Updated note meal plan');
        res.json('Updated note meal plan');
        
      } catch(err) {
        console.log(err)
      }
    }


}