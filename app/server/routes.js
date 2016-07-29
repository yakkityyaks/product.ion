module.exports = function(app){

  var data = {
    username: 'yourUsernameValue',
    password: 'yourPasswordValue',
    organization: 'yourOrganziationName'
  };

  app.post('/register', function (req, res) {
    res.status(201).send({data: data});
  });

};
