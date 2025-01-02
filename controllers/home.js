module.exports = {
  getIndex: (req,res) => {
    
    if (req.user) {
      console.log(req.user)
      res.render('index.ejs',
        {
          user: req.user
        }
      )
    } else {
      console.log('no user logged in')
      res.render('index.ejs',
        {
          user: ''
        }
      )
    }
      
  }

  // getUse: async (req, res) => {
        
  //   // console.log('req ', req)
  //   // console.log(res)
    
  //   try {
  //     // const todoItems = await Todo.find({userId:req.user.id})
  //     // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
  //     // res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
  //     /////////////////////
      
  //     const mealPlanDocs = await MealPlan.find({ userId: req.user.id })
  //     // console.log('meal plan count documents: ', mealPlanDocs)

  //     let mealPlanArr = Array.from(mealPlanDocs)
  //     // console.log('meal plan docs type of: ', typeof mealPlanDocs)
  //     // console.log('meal plan Arr: ', mealPlanArr)

  //     res.render('index.ejs',
  //       {
  //         user: req.user
  //       }
  //     )
  //   } catch(err) {
  //     console.log(err)
  //   }

  // },

}