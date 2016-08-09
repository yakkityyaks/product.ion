function messages(state = [], action) {
  switch (action.type) {
    case "REGISTRATION_ERROR":
      if (action.target === 4) {
        return Object.assign({}, state, {registerPassword: action.message});
      }
      return action.target === 3 ?
        Object.assign({}, state,
          {registerOrg: action.message[0], registerUser: action.message[1]})
        : Object.assign({}, state, action.target === 0 ?
          {registerOrg: action.message} : {registerUser: action.message});
    case "RESET_REGISTRATION_MESSAGES":
      return Object.assign({}, state, {registerOrg: "", registerUser: "", registerPassword: ""});
    case "RESET_LOGIN_MESSAGE":
      return Object.assign({}, state, {login: ""});
    case "SET_LOGIN_MESSAGE":
      return Object.assign({}, state, {login: action.message});
    case "SET_PASSWORD_MESSAGE":
      return Object.assign({}, state, {password: action.message});
    case "RESET_PASSWORD_MESSAGE":
      return Object.assign({}, state, {password: ""});
    default:
      return state;
  }
  return state;
}

export default messages;
