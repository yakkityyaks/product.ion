//  the body of these functions will look like something like this here
//
//  exports.getUser = function(name, callback) {
//    new User({username: name}).fetch().then(callback);
//  };
//
// this is example usage
//
// app.post('/login', function(req, res) {
//   Users.getUser(req.body.username, function(user) {
//     user ? res.status(201).json(user) : res.sendStatus(404);
//   });
// });
var Project = require('../models/project.js');

exports.getProj = function(projId, cb) {
	new Project({projId: projId}).fetch({withRelated: ['org', 'expenses', 'users']}).then(cb);
};

exports.getProjs = function(cb) {
	new Project().fetchAll().then(cb);
};

exports.makeProj = function(data, cb) {
	new Project(data).save().then(cb);
};
