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

//gets the organization information
export function getOrg(orgName) {

}

export function hydrateOrg(data) {

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

//MESSAGES:

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

//
// export function loginError(error) {
//   return { error, type: LOGIN_FAILED };
// }
//
// // You'll have a side effect here so (dispatch) => {} form is a good idea
// export function loginSuccess(response) {
//   return dispatch => {
//     dispatch({ response, type: LOGIN_SUCCESSFUL });
//     // router.transitionTo('/dashboard');
//   };
// }
//
// export function loginRequest(email, password) {
//   const user = {email: email, password: password};
//   return { user, type: LOGIN_ATTEMPT };
// }
//
// export function changeForm(newState) {
//   return { type: CHANGE_FORM, newState };
// }
//
// export function login(userData) {
//   return dispatch =>
//     fetch('/login', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: userData.email,
//         password: userData.password,
//       }),
//     })
//     .then(response => {
//       if (response.status >= 200 && response.status < 300) {
//         console.log("RESPONSE ", response);
//         dispatch(loginSuccess(response));
//       } else {
//         const error = new Error(response.statusText);
//         error.response = response;
//         dispatch(loginError(error));
//         throw error;
//       }
//     })
//     .catch(error => { console.log('request failed', error); });

// }
