import ApiCall from "../utils/serverCalls";
import store from "../store";

function budgets(state = {}, action) {
  switch (action.type) {
    case "HYDRATE_PROJECT_BUDGETS":
      var newState = state;
      newState["proj" + action.projId] = action.list;

      return newState;
    default:
      return state;
  }
  return state;
}

export default budgets;
