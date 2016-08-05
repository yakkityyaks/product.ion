import ApiCall from "../utils/serverCalls";
import store from "../store";

function navBar(state = [], action) {
  switch (action.type) {
    case "CHANGE_NAV_KEY":
      console.log(state, action.key);
      return Object.assign({}, state, {key: action.key});
    default:
      return state;
  }
  return state;
}

export default navBar;