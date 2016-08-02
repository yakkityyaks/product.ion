import axios from 'axios';

var register = (organization, username, password) => {
  var data = {orgName: organization, username: username, password: password};

  return axios.post('/api/register', data);
};

var login = (username, password) => {
  var data = {username: username, password: password};

  return axios.post('/api/login', data);
};

var getProjectsByOrgName = (orgName) =>
  axios.get('/api/dashboard', {orgName});

const ApiCall = {
  register,
  login,
  getProjectsByOrgName
};

export default ApiCall;
