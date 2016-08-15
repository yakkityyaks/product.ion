// import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFUL, CHANGE_FORM } from '../constants/AppConstants';
//do we need these?

//remove upon functional action flow

//ORGANIZATION:

//create a new organization
export function checkRegistration(orgName, username, password) {
  return {
    type: 'REGISTRATION_CHECK',
    orgName,
    username,
    password
  };
}
export function addNewOrg(orgName, username, password) {
  return {
    type: 'ADD_NEW_ORG',
    orgName,
    username,
    password
  };
}

export function changeNavKey(key) {
  return {
    type: 'CHANGE_NAV_KEY',
    key
  };
}

export function addNewUser(username, password, perm) {
  return {
    type: 'ADD_NEW_USER',
    username,
    password,
    perm
  };
}

export function updateUser(user) {
  return {
    type: "UPDATE_USER",
    user
  };
}

export function deleteUser(user) {
  return {
    type: "DELETE_USER",
    user
  };
}

export function changePassword(username, password, newPassword) {
  return {
    type: "CHANGE_PASSWORD",
    username,
    password,
    newPassword
  };
}

export function logout() {
  return {
    type: "LOGOUT"
  };
}

export function clearExp() {
  return {
    type: "CLEAR_EXP"
  };
}

export function clearProj() {
  return {
    type: "CLEAR_PROJ"
  };
}
//gets the organization information
// export function getOrg(orgName) {
//
// }

export function hydrateOrg(data) {
  return {
    type: "HYDRATE_ORG",
    data
  };
}

export function postLogin(username, password) {
  return {
    type: "POST_LOGIN",
    username,
    password
  };
}

export function login(username, orgName, perm) {
  return {
    type: 'LOGIN',
    username,
    orgName,
    perm
  };
}

export function setUsers(users) {
  return {
    type: "SET_USERS",
    users
  };
}
//PROJECTS:

//get a list of an organizations Projects

export function postNewProject(pitch) {
  return {
    type: "POST_NEW_PROJECT",
    pitch
  };
}

export function getOrgProjects(orgName) {
  return {
    type: 'GET_ORG_PROJECTS',
    orgName
  };
}

export function getProjExpenses(projIds) {
  return {
    type: 'GET_PROJ_EXPENSES',
    projIds
  };
}

export function hydrateProjects(projects) {
  return {
    type: "HYDRATE_PROJECTS",
    projects
  };
}

export function hydrateProjExpenses(expenses) {
  return {
    type: "HYDRATE_PROJ_EXPENSES",
    expenses
  };
}
export function changeModal(name) {
  return {
    type: "CHANGE_MODAL",
    name
  };
}

export function updateProject(project) {
  return {type: "UPDATE_PROJECT", project};
}

//Expenses:

export function getExpenses(projectId, id) {
  return {
    type: "GET_EXPENSES",
    projectId,
    id
  };
}

export function hydrateExpenses(projectId, id, expenses) {
  return {
    type: "HYDRATE_EXPENSES",
    projectId,
    id,
    expenses
  };
}

export function postNewExpense(projs_Id, singleExpense) {
  return {
    type: "NEW_EXPENSE",
    projs_Id,
    singleExpense
  };
}

export function removeExpense(id, projId, projs_id) {
  return {
    type: "REMOVE_EXPENSE",
    id,
    projId,
    projs_id
  };
}

export function updateExpense(data, projId, projs_id) {
  return {
    type: "UPDATE_EXPENSE",
    data,
    projId,
    projs_id
  };
}

export function setCurrentExpenseProject(expenses) {
  return {type: "SET_CURRENT_EXPENSE_PROJECT", expenses};
}

//Modals:
export function changeModal(name) {
  return {
    type: "CHANGE_MODAL",
    name
  };
}

//MESSAGES:

export function registrationError(target, message) {
  return {
    type: "REGISTRATION_ERROR",
    target,
    message
  };
}

export function resetRegistrationMessages() {
  return {
    type: "RESET_REGISTRATION_MESSAGES"
  };
}

export function resetLoginMessage() {
  return {
    type: "RESET_LOGIN_MESSAGE"
  };
}

export function setLoginMessage(message, className) {
  return {
    type: "SET_LOGIN_MESSAGE",
    message,
    className
  };
}

export function setPasswordMessage(message) {
  return {
    type: "SET_PASSWORD_MESSAGE",
    message
  };
}

export function resetPasswordMessage() {
  return {
    type: "RESET_PASSWORD_MESSAGE"
  };
}

//budgets:

export function postProjectBudgets(budget, id) {
  console.log("action created");
  return {
    type: "POST_PROJECT_BUDGETS",
    budget,
    id
  };
}

export function getProjBudgets(projId) {
  return {
    type: "GET_PROJECT_BUDGETS",
    projId
  };
}

export function hydrateBudget(projId, budgetsArray) {
  return {
    type: "GET_PROJECT_BUDGETS",
    projId,
    budgetsArray
  };
}

// CSV PARSING:

export function parseCSV(object, id) {
  console.log("object ", object);
  return {
    type: "PARSE_CSV",
    object,
    id
  };
}
