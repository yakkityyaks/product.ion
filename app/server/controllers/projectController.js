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

exports.getProj = function(projName, cb) {
	new Project({name: projName}).fetch({withRelated: ['org', 'expenses']}).then(cb);
}

exports.makeProj = function(data, cb) {
	new Proj(data).save().then(cb);
}