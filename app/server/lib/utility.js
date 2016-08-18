var jwt = require('jsonwebtoken');
// Generate Token using secret
exports.generateToken = function(user) {
  var u = {
   username: user.attributes.username,
   id: user.id.toString(),
  };
  return token = jwt.sign(u, "SSSHHHitsaSECRET", {
    expiresIn: 60 * 60 * 12 // expires in 12 hours; however, token expiration option is set to ignore.
  });
};
