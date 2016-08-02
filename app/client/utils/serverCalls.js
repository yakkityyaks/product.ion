import axios from 'axios';

var register = (organization, username, password) => {
  var data = {orgName: organization, username: username, password: password};

  return axios.post('/register', data);
};

var login = (username, password) => {
  var data = {username: username, password: password};

  return axios.post('/login', data);
};

const ApiCall = {
  register,
  login
};

export default ApiCall;
