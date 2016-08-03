// import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFUL, CHANGE_FORM } from '../constants/AppConstants';
//do we need these?

//remove upon functional action flow

//ORGANIZATION:

//create a new organization
export function addNewOrg(orgName, username, password) {
  return {
    type: 'ADD_NEW_ORG',
    orgName,
    username,
    password
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

export function login(username, orgName) {
  return {
    type: 'LOGIN',
    username,
    orgName
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

export function hydrateProjects(projects) {
  return {
    type: "HYDRATE_PROJECTS",
    projects
  };
}

//Expenses:

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
