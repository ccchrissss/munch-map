
# Change Log
All notable changes to this project will be documented in this file.
 
The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).
 
## [1.1.0] - 2025-03-10
 
 
### Changed
  
- Add a minimum height to the main content div to eliminate excessive blank space at bottom of viewport on home page #55
- Refine flexbox styling to better center the navbar elements and remove unnecessary padding from the username/log-in button #60
- Convert trash can icons into buttons for improved accessibility and interaction. Add styling to 'Add' buttons to clearly show that they're, indeed, buttons. Update hover styling for CRUD buttons, including the items themselves, which are clickable. #52 #54 #62
- Add bottom margins to forms on meal plan and grocery list pages to create clearer visual separation between form elements and headings #53
- Remove the amorphous blob background design from various pages to improve readability and reduce visual distractions. #58
- Meal Plan, Grocery List, and their respective demos' forms now make a POST request using the Fetch api, with the added feature of reloading the page at the user’s previous window location #64
