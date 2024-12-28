const Todo = require('../models/Todo')
const MealPlan = require('../models/meal-plan')

module.exports = {

    // Read from collection
    getMealPlan: async (req, res) => {
        
      // console.log('req ', req)
      // console.log(res)
      
      try {
        const mealPlanDocs = await MealPlan.find()
        console.log('meal plan count documents: ', mealPlanDocs)

        res.render('meal-plan.ejs', { mealPlanStuff: res})
      } catch(err) {
        console.log(err)
      }

        // mealPlanCollection
        //   .find()
        //   .toArray()
        //   .then((results) => {
        //     console.table(results);
        //     res.render("meal-plan.ejs", { mealPlanStuff: results });
        //   })
        //   .catch((error) => console.error(error));

    },

    // getTodos: async (req,res)=>{
    //     console.log(req.user)
    //     try{
    //         const todoItems = await Todo.find({userId:req.user.id})
    //         const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})
    //         res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
    //     }catch(err){
    //         console.log(err)
    //     }
    // },

    createMealPlanItem: async (req, res)=>{
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
        console.log('Meal Plan item has been added!')
        res.redirect('/meal-plan')
      }catch(err){
          console.log(err)
      }
    }

    // app.post("/meal-plan-form", (req, res) => {
    //   mealPlanCollection
    //     .insertOne(req.body)
    //     .then((result) => {
    //       res.redirect("/meal-plan");
    //     })
    //     .catch((error) => console.error(error));
    // });
    // createTodo: async (req, res)=>{
    //     try{
    //         await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
    //         console.log('Todo has been added!')
    //         res.redirect('/todos')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
    // markComplete: async (req, res)=>{
    //     try{
    //         await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
    //             completed: true
    //         })
    //         console.log('Marked Complete')
    //         res.json('Marked Complete')
    //     }catch(err){
    //         console.log(err)
    //     }
    // },
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