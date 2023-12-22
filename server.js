const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

let db,
dbConnectionStr = process.env.DB_STRING,
dbName = 'meal-plan-grocery-list-database'

MongoClient.connect(dbConnectionStr)
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
        groceryListCollection = db.collection('grocery-list-collection')
        mealPlanCollection = db.collection('meal-plan-collection')


    // ~~~~~~~~~
    // MEAL PLAN Start
    // ~~~~~~~~~
    // Read! Start
    app.get('/meal-plan', (req, res) => {
        mealPlanCollection
            .find()
            .toArray()
            .then(results => {
                console.table(results)
                res.render('meal-plan.ejs', { mealPlanStuff: results })
            })
            .catch(error => console.error(error))
    })
    // Read! End

    // Create! Start
    app.post('/meal-plan-form', (req, res) => {
        mealPlanCollection.insertOne(req.body)
            .then(result => {
                res.redirect('/meal-plan')
            })
            .catch(error => console.error(error))
    })
    // Create! End

    // Update! Start
    // Monday Start
    app.put('/markCompleteMealPlanMonday', (request, response) => {
        mealPlanCollection
            .updateOne(
                {mondaymeal: request.body.itemFromJS},
                {$set: { complete: true } },
            {
                sort: {_id: -1},
                upsert: false
            })
            .then(result => {
                console.log('Marked Complete meal plan Monday')
                response.json('Marked Complete meal plan Monday')
            })
            .catch(error => console.error(error))
    })
    
    app.put('/markIncompleteMealPlanMonday', (request, response) => {
        mealPlanCollection
            .updateOne(
                {mondaymeal: request.body.itemFromJS},
                {$set: { complete: false } },
            {
                sort: {_id: -1},
                upsert: false
            })
            .then(result => {
                console.log('Marked Incomplete meal plan Monday')
                response.json('Marked Incomplete meal plan Monday')
            })
            .catch(error => console.error(error))
    })
    // Monday End

    // Tuesday Start
    app.put('/markCompleteMealPlanTuesday', (request, response) => {
        mealPlanCollection
            .updateOne(
                {tuesdaymeal: request.body.itemFromJS},
                {$set: { complete: true } },
            {
                sort: {_id: -1},
                upsert: false
            })
            .then(result => {
                console.log('Marked Complete meal plan Tuesday')
                response.json('Marked Complete meal plan Tuesday')
            })
            .catch(error => console.error(error))
    })
    
    app.put('/markIncompleteMealPlanTuesday', (request, response) => {
        mealPlanCollection
            .updateOne(
                {tuesdaymeal: request.body.itemFromJS},
                {$set: { complete: false } },
            {
                sort: {_id: -1},
                upsert: false
            })
            .then(result => {
                console.log('Marked Incomplete meal plan Tuesday')
                response.json('Marked Incomplete meal plan Tuesday')
            })
            .catch(error => console.error(error))
    })
    // Tuesday End
    // Update! End

    // Delete! Start
    app.delete('/deleteItem', (request, response) => {
        // mondaymeal: this is the property that you would like to delete
        // the below line of code works for the trash cans on Monday
        // mealPlanCollection.deleteOne({mondaymeal: request.body.itemFromJS})
        mealPlanCollection.deleteOne({mondaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))
        
        mealPlanCollection.deleteOne({tuesdaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))

        mealPlanCollection.deleteOne({wednesdaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))

        mealPlanCollection.deleteOne({thursdaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))

        mealPlanCollection.deleteOne({fridaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))

        mealPlanCollection.deleteOne({saturdaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))

        mealPlanCollection.deleteOne({sundaymeal: request.body.itemFromJS})
            .then(result => {
                console.log('Meal Deleted')
                response.json('Meal Deleted')
            })
            .catch(error => console.error(error))
    })
    // Delete! End
    // ~~~~~~~~~
    // MEAL PLAN End
    // ~~~~~~~~~


    // ~~~~~~~~~
    // GROCERY LIST Start
    // ~~~~~~~~~
    app.get('/grocery-list', (req, res) => {
        groceryListCollection.find().toArray()
        .then(results => {
            console.table(results)
            res.render('grocery-list.ejs', { groceryListItems: results })
        })
        .catch(error => console.error(error))
    })


    //Add item to list
    app.post('/addGrocery', (req,res) => {
        groceryListCollection.insertOne(req.body)
        .then(results => {
            res.redirect('/grocery-list')
        })
        .catch(error => console.error(error))
    })


    //Increase number of items
    app.put('/addNum', (req, res) => {
        console.log('Received PUT request:', req.body);
        groceryListCollection.updateOne(
            { itemName: req.body.itemName },
            { $set: { numItem: Number(req.body.numItem) + 1 } },
        )
        .then(result => {
            console.log('Increased Number of Item')
            res.json('Number of Item Increased')
        })
        .catch(error => console.error(error))
    
    })


    //Decrease number of items
    app.put('/subNum', (req, res) => {
        console.log('Received PUT request:', req.body);
        groceryListCollection
        .updateOne(
            { itemName: req.body.itemName },
            { $set: { numItem: Number(req.body.numItem) - 1 } },
        )
        .then(result => {
            console.log('Decreased Number of Item')
            res.json('Number of Item Decreased')
        })
        .catch(error => console.error(error))
    
    })


    //Mark item complete
    app.put('/markCompleteGroceryList', (request, response) => {
        groceryListCollection
        .updateOne(
            { itemName: request.body.itemFromJS },
            { $set: { complete: true, }, },
        )
          .then((result) => {
            console.log('Marked Complete');
            response.json('Marked Complete'); 
          })
          .catch((error) => console.error(error));
    });


    //Mark item incomplete
    app.put('/markIncompleteGroceryList', (request, response) => {
    groceryListCollection
    .updateOne(
        { itemName: request.body.itemFromJS },
        { $set: { complete: false, }, },
    )
        .then((result) => {
        console.log('Marked Incomplete');
        response.json('Marked Incomplete'); 
        })
        .catch((error) => console.error(error));
    });
    // ~~~~~~~~~
    // GROCERY LIST Start
    // ~~~~~~~~~


    // SERVER CONNECT
    app.listen(process.env.PORT, () => {
        console.log('Server is running, you better catch it!')
    })  
}) 
.catch(console.error)