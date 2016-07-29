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
var Organization = require('../models/organization.js');

exports.getOrgs = function(orgName, cb) {
	new Organization().fetchAll().then(cb);
};

exports.getOrg = function(orgName, cb) {
	new Organization({name: orgName}).fetch({withRelated: ['users', 'projects']}).then(cb);
};

exports.makeOrg = function(data, cb) {
	new Organization(data).save().then(cb);
};
