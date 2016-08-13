var Budget = require('./controllers/budgetController.js');
var Expense = require('./controllers/expenseController.js');
var Organization = require('./controllers/organizationController.js');
var Project = require('./controllers/projectController.js');
var ProjUser = require('./models/projUser.js');
var User = require('./controllers/userController.js');


module.exports = function routes(app){
  app.post('/api/register/org', function(req, res){
    //makes organization w/ name req.body.orgName and returns the organization model
    //if an org with that name already exists return a 403
    Organization.makeOrg({name: req.body.orgName}, function(org){
      org ? res.status(201).json(org) : res.sendStatus(404);
    });
  });

  app.post('/api/register/check', function(req, res) {
    Organization.getOrg(req.body.orgName, function(org) {
      User.getUser(req.body.username, function(user) {
        if (org && user) {
          res.sendStatus(400);
        } else if (org) {
          res.sendStatus(401);
        } else if (user) {
          res.sendStatus(403);
        } else {
          res.sendStatus(200);
        }
      });
    });
  });

  app.post('/api/register/user', function(req, res){
    //makes username w/ name req.body.username, req.body.password, req.body.perm, and req.body.orgs_id and returns the user model
    //if a user with that username already exists return a 403
    //req.body should be
    // {
    //   data :{
    //       username: string,
    //       password: string,
    //       perm: int,
    //       orgs_id: int
    //   }
    // }
    User.getUser(req.body.data.username, function(user) {
      if (!user) {
        User.makeUser(req.body.data, function(user){
          user ? res.status(201).json(user) : res.sendStatus(404);
        });
      } else {
        res.sendStatus(403);
      }
    });
  });

  app.post('/api/register/project', function(req, res) {
    console.log(req);
    //req body should hold the following
    // {
      // data: {
      //  name: string,
      //  projId: string,
      //  type: string,
      //  reqBudget: float,
      //  needs: string,
      //  shootDates: string,
      //  status: string,
      //  costToDate: float,
      //  estimateToComplete: float,
      //  orgs_id: int
      // }
    //  users_ids: [int1, int2, int3...]  <-- this is optional
    // }
    //
    // makes a project w/ the provided data which is linked to the organization
    // and users described by the id values, then returns it
    Project.makeProj(req.body.data, function(proj) {
      proj ? res.status(201).json(proj) : res.sendStatus(404);
    });
  });

  app.post('/api/register/expenses', function(req, res) {
    // req body should hold the following
    // {
    //  data: {
    //    type: string,
    //    vertical: string,
    //    category: string,
    //    glCode: string,
    //    dateSpent: string,
    //    dateTracked: string,
    //    vendor: string,
    //    method: string,
    //    description: string,
    //    cost: float,
    //    projs_id: int
    //  }
    // }

    // makes an expense w/ the provided data linked to the provided project
    // returns it on completion
    Expense.makeExpense(req.body.data, function(exp) {
      exp ? res.status(201).json(exp) : res.sendStatus(404);
    });
  });

  app.post('/api/register/budget', function(req, res) {
    console.log("making it to server ", req.body);
    Budget.makeBudget(req.body.data, function(budg) {
      budg ? res.status(201).json(budg) : res.sendStatus(404);
    });
  });

  app.post('/api/get/budget', function(req, res) {
    Budget.getBudget(req.body.description, function(budg) {
      budg ? res.status(201).json(budg) : res.sendStatus(404);
    });
  });

  app.post('/api/get/org', function(req, res) {
    // input: req.body.orgName
    // outpout: org w/ attached users and projects || 404
    Organization.getOrg(req.body.orgName, function(org) {
      org ? res.status(201).json(org) : res.sendStatus(404);
    });
  });

  app.post('/api/get/user', function(req, res) {
    // input: req.body.username
    // output: user w/ attached org and projects || 404
    User.getUser(req.body.username, function(user) {
      user ? res.status(201).json(user) : res.sendStatus(404);
    });
  });

  app.post('/api/get/proj', function(req, res) {
    // input: req.body.projId
    // output: proj w/ attached expenses, users, and org || 404
    Project.getProj(req.body.projId, function(proj) {
      proj ? res.status(201).json(proj) : res.sendStatus(404);
    });
  });

  app.post('/api/proj/users', function(req, res) {
    //expects an object of {projs_id:[users_id1,users_id2]} key/value pairs in an object under req.body.data
    var len = Object.keys(req.body.data).length;
    var count = 0;
    for (var key in req.body.data) {
      req.body.data[key].forEach(function(userKey) {
        new ProjUser({projs_id: key - 0, users_id: userKey - 0}).save().then(function(){
          count++;
          if (count === len - 1) {
            res.sendStatus(201);
          }
        });
      });
    }
  });

  app.get('/*', function(req, res){
    console.log(req.params);
    var wildcard = req.params['0'];
    res.redirect('/');
  });

  app.post('/api/update/expense', function(req, res) {
    Expense.getExpense(req.body.id, function(exp) {
      exp ? exp.save(req.body.data).then(function(exp) {
        res.status(201).json(exp);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/update/proj', function(req, res) {
    Project.getProj(req.body.projId, function(proj) {
      proj ? proj.save(req.body.data).then(function(proj) {
        res.status(201).json(proj);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/update/user', function(req, res) {
    User.getUser(req.body.username, function(user) {
      user ? user.save(req.body.data).then(function (user) {
        res.status(201).json(user);
      }) : res.sendStatus(404);
      // user.set(req.body.data);
    });
  });

  app.post('/api/update/org', function(req, res) {
    Org.getOrg(req.body.orgName, function(org) {
      org ? org.save(req.body.data).then(function(org) {
        res.status(201).json(org);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/update/budget', function(req, res) {
    Budget.getBudget(req.body.description, function(budg) {
      budg ? budg.save(req.body.data).then(function(budg) {
        res.status(201).json(budg);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/remove/budget', function(req, res) {
    Budget.getBudget(req.body.description, function(budg) {
      budg ? budg.destroy().then(function(budg) {
        res.status(201).json(budg);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/remove/org', function(req, res) {
    Org.getOrg(req.body.orgName, function(org) {
      org ? org.destroy().then(function(org) {
        res.status(201).json(org);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/remove/user', function(req, res) {
    User.getUser(req.body.username, function(user) {
      user ? user.destroy().then(function(user) {
        res.status(201).json(user);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/remove/proj', function(req, res) {
    Project.getProj(req.body.projId, function(proj) {
      proj ? proj.destroy().then(function(proj) {
        res.status(201).json(proj);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/remove/expense', function(req, res) {
    Expense.getExpense(req.body.id, function(exp) {
      exp ? exp.destroy().then(function(exp) {
        res.status(201).json(exp);
      }) : res.sendStatus(404);
    });
  });

  app.post('/api/register/csv', function(req, res) {
    console.log(req.body.id);
    console.log(req.body.data);
    var rows = req.body.data;
    var length = rows.length;
    var count = 0;
    rows.forEach(function(row) {
      Expense.makeExpense(Object.assign({}, row, {projs_id: req.body.id}), function(exp) {
        if (!exp) {
          res.sendStatus(403);
        } else {
          count++;
          if (count === length) {
            res.sendStatus(201);
          }
        }
      });
    });
  });
};
