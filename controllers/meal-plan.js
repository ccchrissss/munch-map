const Todo = require('../models/Todo')
const MealPlan = require('../models/meal-plan')

module.exports = {

    // Read from collection
    getMealPlan: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        const mealPlanDocs = await MealPlan.find()
        // console.log('meal plan count documents: ', mealPlanDocs)

        let mealPlanArr = Array.from(mealPlanDocs)
        // console.log('meal plan docs type of: ', typeof mealPlanDocs)
        // console.log('meal plan Arr: ', mealPlanArr)

        res.render('meal-plan.ejs', { mealPlanStuff: mealPlanArr})
      } catch(err) {
        console.log(err)
      }

    },

    createMealPlanItem: async (req, res) => {

      try{
        console.log('req.body: ', req.body)

        await MealPlan.create({
          item: req.body.item,
          mealtime: req.body.mealtime,
          weekday: req.body.weekday, 
          complete: false, 
          note: '',
          userId: '',
          // , userId: req.user.id
        })

        // console.log('Meal Plan item has been added!')

        res.redirect('/meal-plan')
      } catch(err) {
        console.log(err)
      }
    },

    markComplete: async (req, res) => {
      console.log(req.body)
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
      console.log(req.body)
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

    }

    // markIncomplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: false
    //         })
    //         console.log('Marked Incomplete')
    //         res.json('Marked Incomplete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // deleteTodo: async (req, res)=>{
    //     console.log(req.body.todoIdFromJSFile)
    //     try{
    //         await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
    //         console.log('Deleted Todo')
    //         res.json('Deleted It')
    //     }catch(err){
    //         console.log(err)
    //     }
    // }
}