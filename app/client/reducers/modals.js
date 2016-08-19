import ApiCall from "../utils/serverCalls";
import store from "../store";

function modals(state = [], action) {
  switch (action.type) {
    case "CHANGE_MODAL":
      var name = action.name;
      return Object.assign({}, state, { [action.name]: !state[action.name] });
    default:
      return state;
  }
  return state;
}

export default modals;
