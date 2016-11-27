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
      console.log("State is, ", state);
      var newState = state;
      newState["proj" + action.id] = action.list;

      console.log("newstate is ", newState);
      return newState;
    case "ADD_BUDGET_NODE":
      console.log("add budget node. Action is", action);
      const project = "proj" + action.node.projs_id;
      let projArr = state[project];
      console.log("add budget node. Trying to push ", project, projArr);
      projArr.push(action.node);

      return Object.assign({}, state, {[project]: projArr});
    case "DELETE_BUDGET_NODE":
      ApiCall.deleteBudget(action.node.id)
        .then(res => {
          store.dispatch({type: "REMOVE_BUDGET_FROM_STORE", node: action.node});
        })
        .catch(err => {
          console.error(err);
        });
      break;
    case "REMOVE_BUDGET_FROM_STORE"://INCOMPLETE, FINISH LATER
      // state[action.project] = [...state[action.project].slice(0, action.index)];
      const proj = "proj" + action.node.projs_id;
      let arr = state[proj];
      let idx = arr.indexOf(action.node);

      arr = arr.slice(0, idx).concat(arr.slice(idx + 1));

      return Object.assign({}, state, {[proj]: arr});
    case "UPDATE_MULTIPLE_BUDGETS":
      ApiCall.updateProjBudgets(action.list)
        .then(res => {
          if (res.status===201) {
            console.log("Successfully updated lists of budgets. Res is ", res);
          } else {
            console.error("Update user failed. Resopnse was not 201");
          }
        })
        .catch(err => console.error(err));
      break;
    default:
      return state;
  }
  return state;
}

export default budgets;
