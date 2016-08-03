import axios from 'axios';

let registerOrg = (organization) => {
  var data = {organization};

  return axios.post('/api/register/org', data);
};

let registerUser = (username, password, orgs_id, perm) => {
  var data = {username, password, orgs_id, perm};

  return axios.post('/api/register/user', data);
};

let registerProject = (projectObj) =>
  axios.post('/api/register/project', projectObj);

let login = (username, password) => {
  var data = {username: username, password: password};

  return axios.post('/api/login', data);
};

let getProjectsByOrgName = (orgName) =>
  axios.post('/api/dashboard', {orgName: orgName});

const ApiCall = {
  registerOrg,
  registerUser,
  registerProject,
  login,
  getProjectsByOrgName
};

export default ApiCall;
