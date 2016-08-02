function messages(state = [], action) {
  switch (action.type) {
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
