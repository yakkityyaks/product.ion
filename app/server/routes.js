var Expense = require('./controllers/expenseController.js');
var Organization = require('./controllers/organizationController.js');
var Project = require('./controllers/projectController.js');
var User = require('./controllers/userController.js');

var path = require('path');

console.log(__dirname);
module.exports = function routes(app){

  var data = {
    username: 'yourUsernameValue',
    password: 'yourPasswordValue',
    organization: 'yourOrganziationName'
  };

  app.post('/register', function registerUser(req, res) {
    User.makeUser(req.body, function newUser(user){
      user ? res.status(201).send({data: data}) : res.sendStatus(404);
    })
  });

};
