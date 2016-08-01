import axios from 'axios';

var register = function(organization, username, password) {

  var data = {orgName: organization, username: username, password: password};
  console.log("serverCalls: register: data is ", data);
  return axios.post('/register', data);
};

var login = function(username, password) {
  var data = {username: username, password: password};
  return dispatch => {
    return axios.post('/login', data);
  };
};


const ApiCall = {
  register,
  login
};

export default ApiCall;
