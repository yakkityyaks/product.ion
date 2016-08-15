import ApiCall from "../utils/serverCalls";
import store from "../store";
import { browserHistory } from 'react-router';

function budgets(state = {}, action) {
  switch (action.type) {
    case "POST_PROJECT_BUDGETS":
    console.log("Making it to budget the reducer ", action.budget, action.id);
      ApiCall.addBudget(action.budget, action.id)
      .then(function(res) {
        console.log("BUDGET RES ", res);
      })
      .catch(function(err) {
        console.error('BUDGET Error ', err);
      });
      break;

    case "HYDRATE_PROJECT_BUDGETS":
      console.log("Here here here!, action is", action);
      console.log("State is, ", state);
      var newState = state;
      newState["proj" + action.id] = action.list;

      console.log("newstate is ", newState);
      return newState;
    default:
      return state;
  }
  return state;
}

export default budgets;
