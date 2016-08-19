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
        store.dispatch({type: "ADD_BUDGET_NODE", node: res.data});
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
    case "ADD_BUDGET_NODE":
      const project = "proj" + action.node.projs_id;
      let projArr = state[project];
      projArr.push(action.node);

      return Object.assign({}, state, {[project]: projArr});
    case "DELETE_BUDGET_NODE":
      console.log("Ready to delete a node. Node is ", action.node.id);
      ApiCall.deleteBudget(action.node.id)
        .then(res => {
          console.log("Successfully talked with server. Res is ", res);
          store.dispatch({type: "REMOVE_BUDGET_FROM_STORE", node: action.node});
        })
        .catch(err => {
          console.error(err);
        });
      break;
    case "REMOVE_BUDGET_FROM_STORE"://INCOMPLETE, FINISH LATER
      console.log("Removing budget node from store. Action is ", action);
      // state[action.project] = [...state[action.project].slice(0, action.index)];
      const proj = "proj" + action.node.projs_id;
      let arr = state[proj];
      let idx = arr.indexOf(action.node);

      arr = arr.slice(0, idx).concat(arr.slice(idx + 1));

      console.log("Setting new budget state to ", arr);
      return Object.assign({}, state, {[proj]: arr});
    default:
      return state;
  }
  return state;
}

export default budgets;
