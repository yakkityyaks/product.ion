import ApiCall from "../utils/serverCalls";
import store from "../store";

function modals(state = [], action) {
  switch (action.type) {
    case "CHANGE_MODAL":
      console.log(state, action.name);
      var name = action.name;
      console.log(name);
      return Object.assign({}, state, {pitch: !state.pitch});
    default:
      return state;
  }
  return state;
}

export default modals;