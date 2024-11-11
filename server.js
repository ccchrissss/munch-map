const express = require("express");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId
require("dotenv").config({ path: "./config/.env" });

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let db,
  dbConnectionStr = process.env.DB_STRING,
  dbName = "meal-plan-grocery-list-database";

MongoClient.connect(dbConnectionStr)
  .then((client) => {
    console.log(`Connected to ${dbName} Database`);
    db = client.db(dbName);
    groceryListCollection = db.collection("grocery-list-collection");
    mealPlanCollection = db.collection("meal-plan-collection");




    
    // ~~~~~~~~~
    // MEAL PLAN Start
    // ~~~~~~~~~

    // Read from collection
    app.get("/meal-plan", (req, res) => {
      mealPlanCollection
        .find()
        .toArray()
        .then((results) => {
          console.table(results);
          res.render("meal-plan.ejs", { mealPlanStuff: results });
        })
        .catch((error) => console.error(error));
    });
    




    // Add item to list
    app.post("/meal-plan-form", (req, res) => {
      mealPlanCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/meal-plan");
        })
        .catch((error) => console.error(error));
    });





    // Mark complete
    app.put("/markCompleteMealPlan", (request, response) => {
      mealPlanCollection
        .updateOne(
          { _id: new ObjectId(request.body.idFromJS)},
          { $set: { complete: true } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Marked Complete meal plan");
          response.json("Marked Complete meal plan");
        })
        .catch((error) => console.error(error));
    });

    // Mark incomplete
    app.put("/markIncompleteMealPlan", (request, response) => {
      mealPlanCollection
        .updateOne(
          { _id: new ObjectId(request.body.idFromJS)},
          { $set: { complete: false } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Marked Incomplete meal plan");
          response.json("Marked Incomplete meal plan");
        })
        .catch((error) => console.error(error));
    });



    

    // Note Update! Start
    // Monday Begin
    app.put("/edit-note-monday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { mondaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan Monday");
          response.json("Updated note meal plan Monday");
        })
        .catch((error) => console.error(error));
    });
    // Monday End

    // Tuesday Begin
    app.put("/edit-note-tuesday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { tuesdaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan tuesday");
          response.json("Updated note meal plan tuesday");
        })
        .catch((error) => console.error(error));
    });
    // Tuesday End

    // Wednesday Begin
    app.put("/edit-note-wednesday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { wednesdaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan wednesday");
          response.json("Updated note meal plan wednesday");
        })
        .catch((error) => console.error(error));
    });
    // Wednesday End

    // Thursday Begin
    app.put("/edit-note-thursday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { thursdaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan thursday");
          response.json("Updated note meal plan thursday");
        })
        .catch((error) => console.error(error));
    });
    // Thursday End

    // Friday Begin
    app.put("/edit-note-friday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { fridaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan friday");
          response.json("Updated note meal plan friday");
        })
        .catch((error) => console.error(error));
    });
    // Friday End

    // Saturday Begin
    app.put("/edit-note-saturday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { saturdaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan saturday");
          response.json("Updated note meal plan saturday");
        })
        .catch((error) => console.error(error));
    });
    // Saturday End

    // Sunday Begin
    app.put("/edit-note-sunday", (request, response) => {
      mealPlanCollection
        .updateOne(
          { sundaymeal: request.body.itemFromJS },
          { $set: { note: request.body.noteFromJS } },
          {
            sort: { _id: -1 },
            upsert: false,
          }
        )
        .then((result) => {
          console.log("Updated note meal plan sunday");
          response.json("Updated note meal plan sunday");
        })
        .catch((error) => console.error(error));
    });
    // Sunday End

    // Note Update! End

    // Delete! Start
    app.delete("/deleteItem", (request, response) => {
      // mondaymeal: this is the property that you would like to delete
      // the below line of code works for the trash cans on Monday
      // mealPlanCollection.deleteOne({mondaymeal: request.body.itemFromJS})
      mealPlanCollection
        .deleteOne({ mondaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));

      mealPlanCollection
        .deleteOne({ tuesdaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));

      mealPlanCollection
        .deleteOne({ wednesdaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));

      mealPlanCollection
        .deleteOne({ thursdaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));

      mealPlanCollection
        .deleteOne({ fridaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));

      mealPlanCollection
        .deleteOne({ saturdaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));

      mealPlanCollection
        .deleteOne({ sundaymeal: request.body.itemFromJS })
        .then((result) => {
          console.log("Meal Deleted");
          response.json("Meal Deleted");
        })
        .catch((error) => console.error(error));
    });

    // ~~~~~~~~~
    // MEAL PLAN End
    // ~~~~~~~~~





    // ~~~~~~~~~
    // GROCERY LIST Start
    // ~~~~~~~~~
    
    app.get("/grocery-list", (req, res) => {
      groceryListCollection
        .find()
        .toArray()
        .then((results) => {
          console.table(results);
          res.render("grocery-list.ejs", { groceryListItems: results });
        })
        .catch((error) => console.error(error));
    });





    //Add item to list
    app.post("/addGrocery", (req, res) => {
      groceryListCollection
        .insertOne(req.body)
        .then((results) => {
          res.redirect("/grocery-list");
        })
        .catch((error) => console.error(error));
    });





    //Increase number of items
    app.put("/addNum", (req, res) => {
      console.log("Received PUT request:", req.body);
      groceryListCollection
        .updateOne(
          { itemName: req.body.itemName },
          { $set: { numItem: Number(req.body.numItem) + 1 } }
        )
        .then((result) => {
          console.log("Increased Number of Item");
          res.json("Number of Item Increased");
        })
        .catch((error) => console.error(error));
    });

    //Decrease number of items
    app.put("/subNum", (req, res) => {
      console.log("Received PUT request:", req.body);
      groceryListCollection
        .updateOne(
          { itemName: req.body.itemName },
          { $set: { numItem: Number(req.body.numItem) - 1 } }
        )
        .then((result) => {
          console.log("Decreased Number of Item");
          res.json("Number of Item Decreased");
        })
        .catch((error) => console.error(error));
    });





    //Mark item complete
    app.put("/markCompleteGroceryList", (request, response) => {

      // console.log(request.body.idFromJS)

      groceryListCollection
        .updateOne(
          { _id: new ObjectId(request.body.idFromJS) },
          { $set: { complete: true } }
        )
        .then((result) => {
          console.log("Marked Complete");
          response.json("Marked Complete");
        })
        .catch((error) => console.error(error));
    });

    //Mark item incomplete
    app.put("/markIncompleteGroceryList", (request, response) => {

      // console.log(request.body.idFromJS)

      groceryListCollection
        .updateOne(
          { _id: new ObjectId(request.body.idFromJS) },
          { $set: { complete: false } }
        )
        .then((result) => {
          console.log("Marked Incomplete");
          response.json("Marked Incomplete");
        })
        .catch((error) => console.error(error));
    });





    // Delete item
    app.delete("/deleteItemGroceryList", (request, response) => {

      groceryListCollection
        .deleteOne({ _id: new ObjectId(request.body.idFromJS) })
        .then((result) => {
          console.log("Grocery Item Deleted");
          response.json("Grocery Item Deleted");
        })
        .catch((error) => console.error(error));
    })





    // SERVER CONNECT
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on PORT ${process.env.PORT}, you better catch it!`);
    });
  })
  .catch(console.error);
