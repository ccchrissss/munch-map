# Munch Map 1.0.0 - A Meal Plan and Grocery List Application

Built by: Phil Mach & Chris Nelson ([Phil](https://github.com/philmach2) | [Chris](https://github.com/ccchrissss))

Live Link: https://munch-map.onrender.com/

<img width="720" alt="munch-map-landing-page" src="https://github.com/user-attachments/assets/7517bc34-c61d-4199-bb61-2f1193864793">

## How It's Made:

**Tech used:** Node.js, Express, MongoDB, Mongoose, Tailwind, EJS, Passport.js

Munch Map is a user-friendly app for creating and managing weekly meal plans and grocery lists. Sticking to a healthy diet starts with making a plan. We created Munch Map to bundle the meal plan and grocery list creation into one package. This reduces friction for our users, and provides an alternative to those long, messy lists we all like to keep in our phone's Notes app.

Our web app includes the following
- Landing page
- Meal Plan and Grocery List demo pages
- Log In and Sign Up pages
- user-authenticated Meal Plan and Grocery List pages

We structured this project with MVC architecture to keep it organized and easy to maintain/modify. The app's front end includes components from DaisyUI and Flowbite, with additional custom styling using Tailwind. We utilized Express as a framework for our Node.js server, and implemented the Mongoose library to help with data modeling in MongoDB.

Our MongoDB database has 5 collections
- users
- meal plans
- grocery lists
- meal plan demos
- grocery list demos

The Meal Plan and Grocery List pages support basic CRUD operations for user-inputted data. Additionally, Meal Plan items include a note feature to add a comment or recipe link, while Grocery List items include a user-adjustable counter to modify the quantity of the item.

## Lessons Learned:

Munch Map version 0.1.0 lacked developer-friendly organization. A single server file contained ALL of the back-end code. Thanks to the simplicity of the app, it was readable. But when we began expanding the application's features with demo pages and user authentication, it was clear we needed to restructure the codebase. In version 1.0.0 we organized the code using MVC architecture. This improved our efficiency when navigating through our filesystem and debugging by a landslide.

Another challenge we faced was our Git branching strategy. We maintained three branches: main, Phil's branch, and Chris's branch. This was a poor strategy that led to excessive code reviews and difficulty finding Git commits when problems arose. Once we hopped back on the keyboards to overhaul Munch Map for its 1.0.0 release, we began researching better approaches to tackle our uninformed Git branching system. We settled on Trunk-based Development, which encourages us to continuously merge features to our main branch. Additionally, we adopted [this](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4)  naming convention for consistent commit messages. 


## Future Optimizations:

We plan to add more features to the app, including a drag-and-drop feature to rearrange meals, on the Meal Plan page. It would also be convenient for users to be able to save their commonly-eaten meals into a favorites list for easy access. Another worthwhile improvement we’d like to add is a dashboard with the Canvas API that illustrates the mapped connection between meals and their corresponding grocery items and recipes.

Furthermore, we envision facilitating real-time communication between collaborators, enabling notifications for users to stay informed about any changes made by others through the integration of the Web Socket API. We believe these optimizations will make Munch Map a truly powerful tool for anyone who wants to improve their diet.



<img width="720" alt="meal-plan-page-video-demo" src="https://github.com/philmach2/mealplan-grocerylist/assets/110493891/110dcbb1-bbb0-4fa1-8a64-b7631a90d0d1"><br />

<img width="720" alt="grocery-list-page-video-demo" src="https://github.com/philmach2/mealplan-grocerylist/assets/110493891/3a2ca73d-9f0c-4ef8-b123-e011e3bfe10d">
