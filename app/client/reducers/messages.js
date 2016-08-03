function messages(state = [], action) {
  switch (action.type) {
    case "REGISTRATION_ERROR":
      return Object.assign({}, state, action.target === 0 ?
        {registerOrg: action.message} : {registerUser: action.message});
    case "RESET_REGISTRATION_MESSAGES":
      return Object.assign({}, state, {registerOrg: "", registerUser: ""});
    case "RESET_LOGIN_MESSAGE":
      return Object.assign({}, state, {login: ""});
    case "SET_LOGIN_MESSAGE":
      return Object.assign({}, state, {login: action.message});
    default:
      return state;
  }
  return state;
}

export default messages;
