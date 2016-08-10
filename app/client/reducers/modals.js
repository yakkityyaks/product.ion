import ApiCall from "../utils/serverCalls";
import store from "../store";

function modals(state = [], action) {
  switch (action.type) {
    case "CHANGE_PITCH_MODAL":
      console.log(state, action.name);
      var name = action.name;
      console.log(name);
      return Object.assign({}, state, { [action.name]: !state[action.name] });

    case "CHANGE_SETTING_MODAL":
      console.log(state, action.name);
      name = action.name;
      console.log(name);
      return Object.assign({}, state, { addUser: !state.addUser });

    default:
      return state;
  }
  return state;
}

export default modals;