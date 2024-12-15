# Munch Map - A Meal Planner and Grocery List Application

Build by: Phil Mach & Chris Nelson ([Phil](https://github.com/philmach2) | [Chris](https://github.com/ccchrissss))

Live Link: https://munch-map.onrender.com/

<img width="720" alt="munch-map-landing-page" src="https://github.com/user-attachments/assets/7517bc34-c61d-4199-bb61-2f1193864793">

## How It's Made:

**Tech used:** Node.js, Express, MongoDB, Tailwind, EJS

We developed a user-friendly app for creating and managing weekly meal plans and grocery lists. The app includes a static HTML landing page and two dynamic EJS pages for meal plans and grocery lists. Our MongoDB database has two collections, one for each page. A single Node.js server file manages the database connection and handles requests for both pages. We used async/await functions for better load time and user experience, and Tailwind for easy CSS styling.

The Grocery List and Meal Plan pages allow users to add items through a form. Hidden inputs in the forms create MongoDB documents, organizing items on the pages logically. The Grocery List page lets users adjust item quantities and strike through completed items. The Meal Plan page includes a dropdown for meal types and the option to add notes or link recipes. Users can also delete meals.

## Lessons Learned:

Reflecting on our work, we realize organizing our code with an MVC structure would have been beneficial. If we expand the app, implementing this structure will keep things organized and prevent crossover issues. Initially, we aimed for a simple CRUD app, but our ideas have grown. We plan to add more features in the future. Moving forward, we'll create specific branches for bug tracking. Our Git approach caused challenges, with three branches leading to excessive code reviews and difficulty finding Git commits when problems arose.

## Future Optimizations:

We plan to add more features to the app, including a drag-and-drop feature to rearrange meals, as well as their assigned days, in the Meal Plan. Our vision also includes creating a dashboard with the Canvas API that illustrates the mapped connection between meals and their corresponding grocery items and recipes.

We would also like to introduce user authentication, allowing individuals to have personalized plans and collaborate with others on shared plans. Furthermore, we envision facilitating real-time communication between collaborators, enabling notifications for users to stay informed about any changes made by others through the integration of the Web Socket API. These optimizations are part of our plans to enhance Munch Map.



<img width="720" alt="meal-plan-page-video-demo" src="https://github.com/philmach2/mealplan-grocerylist/assets/110493891/110dcbb1-bbb0-4fa1-8a64-b7631a90d0d1"><br />

<img width="720" alt="grocery-list-page-video-demo" src="https://github.com/philmach2/mealplan-grocerylist/assets/110493891/3a2ca73d-9f0c-4ef8-b123-e011e3bfe10d">
