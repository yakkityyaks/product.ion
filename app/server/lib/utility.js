var jwt = require('jsonwebtoken');

var isLoggedIn = function(req) {
  return req.session ? !!req.session.user : false;
};

exports.checkUser = function(req, res, next){
  if (!isLoggedIn(req)) {
  } else {
    next();
  }
};

exports.createSession = function(req, res, newUser, password) {
  return req.session.regenerate(function() {
    console.log("NEW USER ", newUser);
    req.session.user = newUser;
    req.session.password = password;
    console.log("CREATING SESSION!");
  });
};


//Generate Token using secret from process.env.JWT_SECRET

exports.generateToken = function(user) {
  var u = {
   name: user.name,
   username: user.username,
   admin: user.admin,
   id: user.id.toString(),
  };
  return token = jwt.sign(u, "SSSHHHitsaSECRET", {
    expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
};
