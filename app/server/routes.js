/**
 *    In this file we create our endpoints for the server and link them to the database using our bookshelf models
 **/

//here we import our bookshelf models, controllers, and JSONWebToken
var Budget = require('./controllers/budgetController.js');
var Expense = require('./controllers/expenseController.js');
var Organization = require('./controllers/organizationController.js');
var Project = require('./controllers/projectController.js');
var ProjUser = require('./models/projUser.js');
var User = require('./controllers/userController.js');
var utils = require('./lib/utility.js');
var jwt = require('jsonwebtoken');

//makes organization w/ name req.body.orgName and returns the organization model
//if an org with that name already exists returns a 403
module.exports = function routes(app){
  app.post('/api/register/org', function(req, res){
    Organization.makeOrg({name: req.body.orgName}, function(org){
      if(!org) {
        res.sendStatus(404);
      } else {
        res.status(201).json(org);
      }
    });
  });

  //when a user wishes to create a new organization we must check that an organization w/ that name
  //does not already exist. We also check if the username for the admin tied to that organization is
  //already in use
  //expects req.body to hold orgName and username
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

  //makes a user with supplied criteria and returns the user model
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
  app.post('/api/register/user', function(req, res) {
    var body = req.body;

    User.getUser(body.data.username, function(user) {
      if (user) {
        res.sendStatus(403);
      } else {
        User.makeUser(req.body.data, function(user){
          if(!user) {
            res.sendStatus(404);
          } else {
           res.status(201).json(user);
          }
        });
      }
    });
  });

  //Creates a new project with the provided data and returns it
  //req.body should hold
  // {
  //    data: {
  //      name: string,
  //      projId: string,
  //      type: string,
  //      reqBudget: float,
  //      needs: string,
  //      shootDates: string,
  //      status: string,
  //      costToDate: float,
  //      estimateToComplete: float,
  //      orgs_id: int       <------- foreign key for the organization the project is attached to
  //    }
  // }
  app.post('/api/register/project', function(req, res) {
    Project.makeProj(req.body.data, function(proj) {
      proj ? res.status(201).json(proj) : res.sendStatus(404);
    });
  });

  // makes an expense w/ the provided data and returns it
  // req body should hold
  // {
  //    data: {
  //      type: string,
  //      vertical: string,
  //      category: string,
  //      glCode: string,
  //      dateSpent: string,
  //      dateTracked: string,
  //      vendor: string,
  //      method: string,
  //      description: string,
  //      cost: float,
  //      projs_id: int        <------- foreign key for the project the expense is attached to
  //    }
  // }
  app.post('/api/register/expenses', function(req, res) {
    console.log('In /api/register/expenses ', req.body.data)
    // req body should hold the following
    // {
    //  "data": { "singleExpense" : {
    //    "type": string,
    //    "vertical": string,
    //    "category": string,
    //    "glCode": string,
    //    "dateSpent": string,
    //    "dateTracked": string,
    //    "vendor": string,
    //    "method": string,
    //    "description": string,
    //    "cost": float,
    //    "projs_id": int
    //  }}
    // }

    // makes an expense w/ the provided data linked to the provided project
    // returns it on completion, updates cost to date of related project
    Expense.makeExpense(req.body.data.singleExpense, function(exp) {
      Project.getProjById(req.body.data.singleExpense.projs_id, function(proj) {
        Expense.getExpensesByProj(proj.id, function(exps) {
          var cost = 0;
          exps.forEach(function(ex) {
            cost = cost + ex.get("cost");
          });
          proj.save({costToDate: cost}).then(function(proj) {
            exp ? res.status(201).json(exp) : res.sendStatus(404);
          })
        })
      })
    });
  });

  // app.post('/test', function(req, res) {
  //   Project.getProjById(req.body.id, function(proj) {
  //     Expense.getExpensesByProj()
  //   })
  // })

  app.post('/api/register/budget', function(req, res) {
    Budget.makeBudget(req.body.data, function(budg) {
      budg ? res.status(201).json(budg) : res.sendStatus(404);
    });
  });

  app.post('/api/register/budgets', function(req, res) {
    console.log(req.body.id);
    console.log(req.body.data);
    var rows = req.body.data;
    var length = rows.length;
    var count = 0;
    rows.forEach(function(row) {
      Budget.makeBudget(Object.assign({}, row, {projs_id: req.body.id}), function(budg) {
        if (!budg) {
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

  //this route is used for mass importing expenses to a project via a csv file. req.body.data holds an array of objects, each
  //representing a row in the csv.
  app.post('/api/register/csv', function(req, res) {
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

  app.post('/api/get/budget', function(req, res) {
    Budget.getBudget(req.body.projId, function(budgetArray) {
      budgetArray ? res.status(201).json(budgetArray) : res.sendStatus(404);
    });
  });

  //this project accepts an array of Project IDs (the projId propery of projects, not the primary id)
  //held in req.body.projIds and returns all expenses attached to those projects
  app.post('/api/get/expenses', function(req, res) {
    var exps = [];
    var count = 0;
    req.body.projIds.forEach(function(projId) {
      Project.getProj(projId, function(proj) {
        count++;
        if (proj) exps = exps.concat(proj.related('expenses'));
        if (count === req.body.projIds.length) {        //only sends response when all of the asynchronous bookshelf requests are completed
          res.status(201).json(exps);
        }
      });
    });
  });


  //given an organization name defined by req.body.orgName, this route sends back the organization object
  //with its attached users and projects, or a 404 if no such organization is found
  app.post('/api/get/org', function(req, res) {
    Organization.getOrg(req.body.orgName, function(org) {
      org ? res.status(201).json(org) : res.sendStatus(404);
    });
  });

  //given a username defined by req.body.username, this route sends back the user object and the attached organization
  //and projects, or a 404 if no such user is found. It also attaches a token to the response as this route is used
  //for login
  app.post('/api/get/user', function(req, res) {
    User.getUser(req.body.username, function(user) {
      if(!user) {
        res.sendStatus(404);
      } else {
        var token = utils.generateToken(user);
        res.status(201).json({user:user, token:token});
      }
    });
  });

  //given a Project Id in req.body.projId, this route returns the project with related expenses, budgets, users and
  //the organization that owns the project. Sends a 404 if no project is found
  app.post('/api/get/proj', function(req, res) {
    Project.getProj(req.body.projId, function(proj) {
      proj ? res.status(201).json(proj) : res.sendStatus(404);
    });
  });

  //not used
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

  //check to see if a token exists
  //if a token exists, redirect to dashboard
  // - send a response object to the client that routes to login page with
  // user login information
  app.get('/*', function(req, res){
    res.redirect('/');
  });

  //given the primary id of an expense by req.body.id, and any key-value pairs to be changed in req.body.data,
  //this route updates the referenced expense. If it is not found, this sends back a 404.
  app.post('/api/update/expense', function(req, res) {
    Expense.getExpense(req.body.data.singleExpense.id, function(exp) {
      exp.save(req.body.data.singleExpense).then(function(exp) {
        Project.getProjById(req.body.data.singleExpense.proj_id, function(proj) {
          Expense.getExpensesByProj(proj.id, function(exps) {
            var cost = 0;
            exps.forEach(function(ex) {
              cost = cost + ex.get("cost");
            });
            proj.save({costToDate: cost}).then(function(proj) {
              res.status(201).json(exp);
            });
          });
        });
      });
    });
  });

  //given the Project ID of a project by req.body.projId, and any key-value pairs to be changed in req.body.data,
  //this route updates the referenced project. If it is not found, this sends back a 404.
  app.post('/api/update/proj', function(req, res) {
    Project.getProj(req.body.projId, function(proj) {
      proj ? proj.save(req.body.data).then(function(proj) {
        res.status(201).json(proj);
      }) : res.sendStatus(404);
    });
  });

  //given the username of a user by req.body.username, and any key-value pairs to be changed in req.body.data,
  //this route updates the referenced expense. If it is not found, this sends back a 404.
  app.post('/api/update/user', function(req, res) {
    console.log("UPDATE REQ ", req.body);
    var data = req.body.data;
    User.getUser(data.username, function(user) {
      user ? user.save(data).then(function (user) {
        res.status(201).json(user);
      }) : res.sendStatus(404);
    });
  });

  //given the name of an organization by req.body.orgName, and any key-value pairs to be changed in req.body.data,
  //this route updates the referenced organization. If it is not found, this sends back a 404.
  app.post('/api/update/org', function(req, res) {
    Org.getOrg(req.body.orgName, function(org) {
      org ? org.save(req.body.data).then(function(org) {
        res.status(201).json(org);
      }) : res.sendStatus(404);
    });
  });



  // is this ever used?

  // //given the description of a budget by req.body.description, and any key-value pairs to be changed in req.body.data,
  // //this route updates the referenced budget. If it is not found, this sends back a 404.
  // app.post('/api/update/budget', function(req, res) {
  //   Budget.getBudget(req.body.projId, function(budg) {
  //     budg ? budg.save(req.body.data).then(function(budg) {
  //       res.status(201).json(budg);
  //     }) : res.sendStatus(404);
  //   });
  // });

  //given the primary id of a budget by req.body.id, this destroys that row in the table if found and sends it back. If not found,
  //this route throws a 404
  app.post('/api/remove/budget', function(req, res) {
    Budget.getSingleBudget(req.body.id, function(budg) {
      budg ? budg.destroy().then(function(budg) {
        res.status(201).json(budg);
      }) : res.sendStatus(404);
    });
  });

  //given the name of an organization provided by req.body.orgName, this destroys that row in the table if found and sends it back.
  //If not found, this route throws a 404
  app.post('/api/remove/org', function(req, res) {
    Org.getOrg(req.body.orgName, function(org) {
      org ? org.destroy().then(function(org) {
        res.status(201).json(org);
      }) : res.sendStatus(404);
    });
  });

  //given the username of a user provided by req.body.username, this destroys that row in the table if found and sends it back. If not found,
  //this route throws a 404
  app.post('/api/remove/user', function(req, res) {
    User.getUser(req.body.username, function(user) {
      user ? user.destroy().then(function(user) {
        res.status(201).json(user);
      }) : res.sendStatus(404);
    });
  });

  //given the Project ID of a project by req.body.projID, this destroys that row in the table if found and sends it back. If not found,
  //this route throws a 404
  app.post('/api/remove/proj', function(req, res) {
    Project.getProj(req.body.projId, function(proj) {
      proj ? proj.destroy().then(function(proj) {
        res.status(201).json(proj);
      }) : res.sendStatus(404);
    });
  });

  //given the primary id of an expense by req.body.id, this destroys that row in the table if found and sends it back. If not found,
  //this route throws a 404
  app.post('/api/remove/expense', function(req, res) {
    Expense.getExpense(req.body.data.singleExpense.id, function(exp) {
      exp.destroy().then(function(exp) {
        Project.getProjById(req.body.data.singleExpense.proj_id, function(proj) {
          Expense.getExpensesByProj(req.body.data.singleExpense.id, function(exps) {
            var cost = 0;
            exps.forEach(function(ex) {
              cost = cost + ex.get("cost");
            });
            proj.save({costToDate: cost}).then(function(proj) {
              res.status(201).json(exp);
            });
          });
        });
      });
    });
  });


  //used upon a page reload. If the client has a valid token then this route will send back the username and password of the user
  //defined by the token, or a 404 if the user in the token no longer exists
  app.post('/api/post/token', function (req, res) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token;
    if (!token) {
      return res.status(401).json({
        message: 'Must pass token'
      });
    } else {
      // Check token that was passed by decoding token using secret
      // ignoreExpiration, otherwise, login is hampered by error.
      jwt.verify(token, "SSSHHHitsaSECRET", {ignoreExpiration:true}, function (err, user) {
        console.log("Verified User ", user);
        if (err) {
          console.log(err);
        } else {
          //return user using the username from w/in JWTToken.
          // send back the username and password to log user back in.
          User.getUser(user.username, function (user) {
            if (!user) {
              res.sendStatus(404);
            } else {
              res.status(201).json({
                username: user.attributes.username,
                password: user.attributes.password
              });
            }
          });
        }
      });
    }
  });
};
