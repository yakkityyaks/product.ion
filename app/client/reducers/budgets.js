import ApiCall from "../utils/serverCalls";
import store from "../store";

function budgets(state = {}, action) {
  switch (action.type) {
    case "POST_PROJECT_BUDGETS":
    console.log("Making it to budget the reducer ", action.budget);
      ApiCall.addBudget(action.budget, action.id)
      .then(function(res) {
        console.log("BUDGET RES ", res);
      })
      .catch(function(err) {
        console.error('BUDGET Error ', err);
      });
      break;

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
