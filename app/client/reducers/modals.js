import ApiCall from "../utils/serverCalls";
import store from "../store";

function modals(state = [], action) {

  switch (action.type) {
    case "CHANGE_PITCH_MODAL":
      console.log(state, action.name);
      let name = action.name;
      console.log(name);
      return Object.assign({}, state, {pitch: !state.pitch});
    default:
      return state;
  }

  switch (action.type) {
    case "CHANGE_SETTINGS_MODAL":
      console.log(state, action.name);
      name = action.name;
      console.log(name);
      return Object.assign({}, state, {pitch: !state.addUser});
    default:
      return state;
  }
  return state;
}

export default modals;
