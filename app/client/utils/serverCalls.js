import axios from 'axios';

let registrationCheck = (orgName, username) =>
  axios.post('/api/register/check', {orgName, username});

let registerOrg = (orgName) =>
  axios.post('/api/register/org', {orgName});

let registerUser = (username, password, orgs_id, perm) => {
  var data = {username: username, password: password, orgs_id: orgs_id, perm: perm};

  return axios.post('/api/register/user', {data: data});
};

let registerProject = (projectObj) =>
  axios.post('/api/register/project', {data: projectObj});

let login = (username, password) =>
  axios.post('/api/get/user', {username: username, password: password});


let changePassword = (username, password) =>
  axios.post('/api/update/user', {username, data: {password}});

let getProjectsByOrgName = (orgName) =>
  axios.post('/api/get/org', {orgName: orgName});

let getExpensesByProjectId = (projectId) =>
  axios.post('/api/get/proj', {id: projectId});

let registerExpense = (data) =>
  axios.post('/api/register/expenses', {data: data});

// let parseCSV = (data) =>
//   axios.post('/api/update/expenses', {data: data});

const ApiCall = {
  registrationCheck,
  registerOrg,
  registerUser,
  registerProject,
  login,
  changePassword,
  getProjectsByOrgName,
  getExpensesByProjectId,
  registerExpense
};

export default ApiCall;
