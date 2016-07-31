import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFUL } from '../constants/AppConstants';
import axios from 'axios';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import store from './../store';
import middleware from './../store';

const initialState = ({
  email: '',
  password: '',
  isLoggingIn: false,
  isLoggedIn: false,
  error: null
});

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ATTEMPT:
      return state.merge({
        isLoggingIn: true,
        isLoggedIn: false,
        email: action.email,
        password: action.password // Note you shouldn't store user's password in real apps
      });
    case LOGIN_FAILED:
      return state.merge({
        error: action.error,
        isLoggingIn: false,
        isLoggedIn: false
      });
    case LOGIN_SUCCESSFUL:
      return state.merge({
        error: null,
        isLoggingIn: false,
        isLoggedIn: true
      });
      break;
    default:
      return state;
  }
}



// export default function reducer(state={
//   user: {
//     id: null,
//     name: null,
//   },
//   fetching: false,
//   fetched: false,
//   error: null,
// }, action) {
//
//   switch (action.type) {
//     case "FETCH_USER": {
//       return Object.assign({}, state, {fetching: true});
//     }
//     case "FETCH_USER_REJECTED": {
//       return Object.assign({}, state, {fetching: false, error: action.payload});
//     }
//     case "FETCH_USER_FULFILLED": {
//       return Object.assign(
//         {},
//         state, {
//         fetching: false,
//         fetched: true,
//         user: action.payload,
//       });
//     }
//     case "SET_USER_NAME": {
//       return Object.assign(
//         {},
//         state, {
//         user: Object.assign({}, state.user, {name: action.payload})
//       });
//     }
//   }
//   console.log('STATE ', state);
//   return state;
// }

// store.dispatch({
//   type: 'FETCH_USER',
//   payload: axios.get('http://rest.learncode.academy/api/wstern/users')
// })
