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

exports.makeUser(data, cb) {
	new User(data).save().then(cb);
}

exports.getUser(name, cb) {
	new User({username: name}).fetch({withRelated: ['org']}).then(cb);
}