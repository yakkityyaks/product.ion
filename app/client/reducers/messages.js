function messages(state = [], action) {
  switch (action.type) {
    case "RESET_LOGIN_MESSAGE":
      console.log("You want to reset the login message. state is ", state);
      break;
    case "SET_LOGIN_MESSAGE":
      console.log("You want to set the login message to ", action.message,
        "State is ", state);
      return Object.assign({}, state, {
          login: action.message
        });
    default:
      return state;
  }
  return state;
}

export default messages;
