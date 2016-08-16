import ApiCall from "../utils/serverCalls";
import store from "../store";
import { browserHistory } from 'react-router';

function budgets(state = {}, action) {
  switch (action.type) {
    case "POST_NEW_BUDGET":
    console.log("Making it to budget the reducer ", action.budget);
      ApiCall.addBudget(action.budget)
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
    case "DELETE_BUDGET_NODE":
      console.log("Ready to delete a node. Node is ", action.id);
      ApiCall.deleteBudget(action.id)
        .then(res => {
          console.log("Successfully talked with server. Res is ", res);
        })
        .catch(err => {
          console.error(err);
        });
      break;

    default:
      return state;
  }
  return state;
}

export default budgets;
