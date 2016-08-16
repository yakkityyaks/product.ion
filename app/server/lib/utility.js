var jwt = require('jsonwebtoken');
//Generate Token using secret from process.env.JWT_SECRET
exports.generateToken = function(user) {
  var u = {
   username: user.attributes.username,
   id: user.id.toString(),
  };
  return token = jwt.sign(u, "SSSHHHitsaSECRET", {
    expiresIn: 60 * 60 * 12 // expires in 12 hours
  });
};
