import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFUL, CHANGE_FORM } from '../constants/AppConstants';

export function loginError(error) {
  return { error, type: LOGIN_FAILED };
}

// You'll have a side effect here so (dispatch) => {} form is a good idea
export function loginSuccess(response) {
  return dispatch => {
    dispatch({ response, type: LOGIN_SUCCESSFUL });
    // router.transitionTo('/dashboard');
  };
}

export function loginRequest(email, password) {
  const user = {email: email, password: password};
  return { user, type: LOGIN_ATTEMPT };
}

export function changeForm(newState) {
  return { type: CHANGE_FORM, newState };
}

export function login(userData) {
  return dispatch =>
    fetch('/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log("RESPONSE ", response);
        dispatch(loginSuccess(response));
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError(error));
        throw error;
      }
    })
    .catch(error => { console.log('request failed', error); });
}
