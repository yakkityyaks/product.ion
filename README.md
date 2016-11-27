# product.ion
**Platform:**

A free and public budgeting application commissioned by producers at Refinery29
to replace their google-sheets-based workflow. Production is a permission-based
platform where producers pitch show ideas to be reviewed and approved by admins.
Once a pitch is approved it becomes an expense report to be tracked and added to
by producers attached to the show.  All data is quantified and graphed for later
analysis and admins can also view month-by-month graphs of their companies expenses.

---
**Stack:**
Libraries and technologies used by Product.ion:
* React-Redux running off ExpressJS with a MySQL database managed by Bookshelf/Knex
* Axios for server calls
* HighCharts.JS for graphs
* jsonwebtoken for authentication
* papaparse for csv parsing
* react-bootstrap for styling


**File Structure**
* app - main logic
  * client - front end react components
    1. actions - Redux action creators
    2. components - Redux smart/dump components
    3. data - Reusable objects and labels
    4. reducers - Redux logic for changing store
    5. styles
    6. utils - Server calls
    7. production.js - Main loading logic
    8. store.js - Redux store creator
  * server - back end server and database
    1. controllers - database object functions
    2. lib - authentication logic
    3. models - database object formatting
    4. db.js - database creation
    5. routes.js - server routes for API calls
    6. server.js - Express.js server declarations


**Links:**
https://product-ion.herokuapp.com/

*Signed:*
Tim Clark (product owner);
Nicholas Zeiss (scrum master);
Andrew Leonardi (programmer);
Jim Kim (programmer);
