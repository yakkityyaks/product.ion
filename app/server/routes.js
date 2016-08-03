var Expense = require('./controllers/expenseController.js');
var Organization = require('./controllers/organizationController.js');
var Project = require('./controllers/projectController.js');
var User = require('./controllers/userController.js');


module.exports = function routes(app){
  app.post('/api/register/org', function(req, res){
    //makes organization w/ name req.body.orgName and returns the organization model
    //if an org with that name already exists return a 403
    Organization.getOrg(req.body.orgName, function(org) {
      if (!org) {
        Organization.makeOrg({name: req.body.orgName}, function(org){ 
          org ? res.status(201).json(org) : res.sendStatus(404);
        });
      } else {
        res.sendStatus(403);
      }
    });  
  };

  app.post('/api/register/user', function(req, res){
    //makes username w/ name req.body.username, req.body.password, req.body.perm, and req.body.orgs_id and returns the user model
    //if a user with that username already exists return a 403
    User.getUser(req.body.username, function(user) {
      if (!user) {
        data = {
          username: req.body.username,
          password: req.body.password,
          perm: req.body.perm,
          orgs_id: req.body.orgs_id
        }
        User.makeUser(data, function(user){ 
          user ? res.status(201).json(user) : res.sendStatus(404);
        });
      } else {
        res.sendStatus(403);
      }
    });
  });


  /* ORG OBJECT Line 68 returns:
  {
    "name": "ORGANIZATION NAME", //as string
    "id": PRIMARY KEY, //assigned by db
    "users": [
      {
        "id": PRIMARY KEY, //assigned by db
        "username": "USER'S NAME", //as string
        "password": "USER'S PASSWORD", //as string       REMOVE MVP+1
        "orgs_id": ORG ID USER BELONGS TO //as integer   REMOVE MVP+1
      },
      //additional users in identical form
    ],
    "projects": [
      {
        "id": PRIMARY KEY, //assigned by db
        "name": "PROJECT"S NAME, //as string
        "projId": "PROJECT'S ORG LEVEL ID, //as string assigned by entry of org admin
        "type": "ASSET TYPE", //as string
        "reqBudget": "PROJECT'S TOTAL BUDGET", //as integer
        "needs": "PROJECT NEEDS", //as string
        "shootDates": "PROJECT SHOOTDATES", //as string
        "status": "PROJECT STATUS", //as string
        "costToDate": "PROJECT COST TO DATE", //as integer
        "estimateToComplete": "PROJECT ESTIMATE TO COMPLETE ", //as string
        "orgs_id": ORG ID PROJECT BELONGS TO //as integer
      },
      //additional projects in identical form
    ]
  }
  */

  app.post('/api/dashboard', function(req, res) {
    // console.log("++++The request body from axios is ", req.body);
    Organization.getOrg(req.body.orgName, function(org) {
      // console.log("++++The request org object sent is ", org);
      org ? res.status(201).json(org) : res.sendStatus(404);
    });
  });

  // app.get('/api/project', function(req, res){
  //   //hardcode req.body.name
  //   Project.getProj('req.body.name', function existingProject(project){
  //     project ? res.status(200).json(project) : res.sendStatus(404);
  //   });
  // });

  // app.post('/project', function createProject(req, res) {
  //   Organization.getOrg(req.body.orgName, function getOrg(org){
  //     console.log(org);
  //     var project = {
  //       orgs_id: org.attributes.id,
  //       projId: req.body.projId,
  //       name: req.body.name,
  //       type: req.body.type,
  //       reqBudget: req.body.reqBudget,
  //       needs: req.body.needs,
  //       shootDates: req.body.shootDates,
  //       status: req.body.status,
  //       costToDate: req.body.costToDate,
  //       estimateToComplete: req.body.estimateToComplete
  //     }
  //     Project.makeProj(project, function newProject(project){
  //       project ? res.status(201).json(project) : res.sendStatus(404);
  //     });
  //   });
  // });

  // app.get('/project', function retrieveProject(req, res){
  //   // Organization.getOrg(req.body.orgName, function getOrg(org){
  //   //   var project = {
  //   //     orgs_id: org.attributes.id,
  //   //     projId: req.body.projId,
  //   //     name: req.body.name,
  //   //     type: req.body.type,
  //   //     reqBudget: req.body.reqBudget,
  //   //     needs: req.body.needs,
  //   //     shootDates: req.body.shootDates,
  //   //     status: req.body.status,
  //   //     costToDate: req.body.costToDate,
  //   //     estimateToComplete: req.body.estimateToComplete
  //   //   };
  //   //   project.getProj(project, function existingProject(project){
  //   //     project ? res.status(200).json(project) : res.sendStatus(404);
  //   //   });
  //   // });
  //   Project.getProjs(function(collection) {
  //     collection ? res.status(200).json(collection) : res.sendStatus(404);
  //   })
  // });

  // app.post('/expense', function createExpense(req, res) {
  //   Project.getProj({name: req.body.projName}, function getProject(project){
  //     var expense = {
  //           // id: req.body.id,
  //           projsId: project.attributes.id,
  //           type: req.body.type,
  //           vertical: req.body.vertical,
  //           glCode: req.body.glCode,
  //           dateSpent: req.body.dateSpent,
  //           dateTracked: req.body.dateTracked,
  //           vendor: req.body.vendor,
  //           method: req.body.method,
  //           description: req.body.description,
  //           cost: req.body.cost
  //     }
  //     Expense.makeExpense(expense, function newExpense(expense){
  //       // console.log('++++++++++line 92 expense object', expense)
  //       expense ? res.status(201).json(expense) : res.sendStatus(404);
  //     });
  //   });
  // });

  // app.get('/expense', function(req, res){
  //   Project.getProj({name: req.body.projName}, function getProject(project){
  //     var expense = {
  //           // id: req.body.id,
  //           projsId: project.attributes.id,
  //           type: req.body.type,
  //           vertical: req.body.vertical,
  //           glCode: req.body.glCode,
  //           dateSpent: req.body.dateSpent,
  //           dateTracked: req.body.dateTracked,
  //           vendor: req.body.vendor,
  //           method: req.body.method,
  //           description: req.body.description,
  //           cost: req.body.cost
  //     }
  //     Expense.getExpense(expense, function existingExpense(expense){
  //       // console.log('++++++++++line 113 expense object', expense)
  //       expense ? res.status(200).json(expense) : res.sendStatus(404);
  //     });
  //   });
  // });

};
