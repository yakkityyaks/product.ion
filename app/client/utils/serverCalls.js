import axios from 'axios';

let registrationCheck = (orgName, username) =>
  axios.post('/api/register/check', {orgName, username});

let registerOrg = (orgName) => {
  var data = {orgName};

  return axios.post('/api/register/org', data);
};

let registerUser = (username, password, orgs_id, perm) => {
  var data = {username: username, password: password, orgs_id: orgs_id, perm: perm};

  return axios.post('/api/register/user', {data: data});
};

let registerProject = (projectObj) => {
  return axios.post('/api/register/project', {data: projectObj});
};

let login = (username, password) => {
  var data = {username: username, password: password};

  return axios.post('/api/get/user', data);
};

let getProjectsByOrgName = (orgName) =>
  axios.post('/api/get/org', {orgName: orgName});

let getExpensesByProjectId = (projectId) =>
  axios.post('/api/get/proj', {projId: projectId});

const ApiCall = {
  registrationCheck,
  registerOrg,
  registerUser,
  registerProject,
  login,
  getProjectsByOrgName,
  getExpensesByProjectId
};

export default ApiCall;
