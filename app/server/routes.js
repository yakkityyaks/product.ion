var Expense = require('./controllers/expenseController.js');
var Organization = require('./controllers/organizationController.js');
var Project = require('./controllers/projectController.js');
var User = require('./controllers/userController.js');

module.exports = function routes(app){

  app.post('/register', function registerUser(req, res) {
    Organization.makeOrg({name: req.body.orgName}, function newOrg(org){
      var user = {
        username: req.body.username,
        password: req.body.password,
        orgs_id: org.attributes.id
      };
      User.makeUser(user, function newUser(user){
          // console.log('++++++++++line 16 user object', user)
          user ? res.status(201).json(user) : res.sendStatus(404);
      });
    });
  });

  app.get('/login', function retrieveUser(){
    var user = {
      username: req.body.username,
      password: req.body.password
    };
    User.getUser(user, function existingUser(user){
      // console.log('++++++++++line 28 user object', user)
      user ? res.status(200).json(user) : res.sendStatus(404);
    });
  });

  app.post('/project', function createProject(req, res) {
    Organization.getOrg({name: req.body.orgName}, function getOrg(org){
      var project = {
        // id: req.body.id,
        orgs_id: org.attributes.orgs_id,
        projId: req.body.projId,
        name: req.body.name,
        type: req.body.type,
        reqBudget: req.body.reqBudget,
        needs: req.body.needs,
        shootDates: req.body.shootDates,
        status: req.body.status,
        costToDate: req.body.costToDate,
        estimateToComplete: req.body.estimateToComplete
      }
      Project.makeProj(project, function newProject(project){
        // console.log('++++++++++line 49 project object', project)
        project ? res.status(201).json(project) : res.sendStatus(404);
      });
    });
  });

  app.get('/project', function retrieveProject(){
    Organization.getOrg({name: req.body.organizationName}, function getOrg(org){
      var project = {
        // id: req.body.id,
        orgs_id: org.attributes.orgs_id,
        projId: req.body.projId,
        name: req.body.name,
        type: req.body.type,
        reqBudget: req.body.reqBudget,
        needs: req.body.needs,
        shootDates: req.body.shootDates,
        status: req.body.status,
        costToDate: req.body.costToDate,
        estimateToComplete: req.body.estimateToComplete
      };
      project.getProj(project, function existingProject(project){
        // console.log('++++++++++line 71 project object', project)
        project ? res.status(200).json(project) : res.sendStatus(404);
      });
    });
  });

  app.post('/expense', function createExpense(req, res) {
    Project.getProj({name: req.body.projName}, function getProject(project){
      var expense = {
            // id: req.body.id,
            projsId: project.attributes.projsId,
            type: req.body.type,
            vertical: req.body.vertical,
            glCode: req.body.glCode,
            dateSpent: req.body.dateSpent,
            dateTracked: req.body.dateTracked,
            vendor: req.body.vendor,
            method: req.body.method,
            description: req.body.description,
            cost: req.body.cost,
      }
      Expense.makeExpense(expense, function newExpense(expense){
        // console.log('++++++++++line 92 expense object', expense)
        expense ? res.status(201).json(expense) : res.sendStatus(404);
      });
    });
  });

  app.get('/expense', function(){
    Project.getProj({name: req.body.projName}, function getProject(project){
      var expense = {
            // id: req.body.id,
            projsId: project.attributes.projsId,
            type: req.body.type,
            vertical: req.body.vertical,
            glCode: req.body.glCode,
            dateSpent: req.body.dateSpent,
            dateTracked: req.body.dateTracked,
            vendor: req.body.vendor,
            method: req.body.method,
            description: req.body.description,
            cost: req.body.cost,
      }
      Expense.getExpense(expense, function existingExpense(expense){
        // console.log('++++++++++line 113 expense object', expense)
        expense ? res.status(200).json(expense) : res.sendStatus(404);
      });
    });
  });

};
