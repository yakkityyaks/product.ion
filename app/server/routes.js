var Expense = require('./controllers/expenseController.js');
var Organization = require('./controllers/organizationController.js');
var Project = require('./controllers/projectController.js');
var User = require('./controllers/userController.js');

module.exports = function routes(app){

  app.post('/register', function registerUser(req, res) {
    var user = {
      username: req.body.username,
      password: req.body.password,
      organization:req.body.orgs_Id
    }
    User.makeUser(user, function newUser(user){
      // console.log('++++++++++line 15 user object', user)
      user ? res.status(201).send(user) : res.sendStatus(404);
    })
  });

  app.get('/login', function retrieveUser(){
    var user = {
      username: req.body.username,
      password: req.body.password
    }
    User.getUser(user, function existingUser(user){
      // console.log('++++++++++line 27 user object', user)
      user ? res.status(200).send(user) : res.sendStatus(404);
    })
  });

  app.post('/project', function createProject(req, res) {

    var project = {
      id: req.body.id,
      orgs_id: req.body.orgs_id,
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
      // console.log('++++++++++line 48 project object', project)
      project ? res.status(201).send(project) : res.sendStatus(404);
    })
  });

  app.get('/project', function retrieveProject(){
    var project = {
      id: req.body.id,
      orgs_id: req.body.orgs_id,
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

    project.getProj(project, function existingProject(project){
      // console.log('++++++++++line 69 project object', project)
      project ? res.status(200).send(project) : res.sendStatus(404);
    })
  });

  app.post('/expense', function createExpense(req, res) {

    var expense = {
      id: req.body.id,
      projsId: req.body.projsId,
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
      // console.log('++++++++++line 91 expense object', expense)
      expense ? res.status(201).send(expense) : res.sendStatus(404);
    })
  });

  app.get('/expense', function(){
    var expense = {
      id: req.body.id,
      projsId: req.body.projsId,
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
      // console.log('++++++++++line 111 expense object', expense)
      expense ? res.status(200).send(expense) : res.sendStatus(404);
    })
  });

};
