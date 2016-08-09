import ApiCall from "../utils/serverCalls";
import store from "../store";

import { browserHistory } from 'react-router';

function expenses(state = [], action) {
  switch (action.type) {
    case "GET_EXPENSES":
      console.log(action);
      ApiCall.getExpensesByProjectId(action.projectId)
        .then((res) => {
          if (res.status === 201) {
            var projectId = res.data.id,
                expenses = res.data.expenses;
            store.dispatch({type:'HYDRATE_EXPENSES', projectId, expenses});
            browserHistory.push('/expenses');
          }
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    case "HYDRATE_EXPENSES":
      var id = "" + action.projectId;
      state.current = action.expenses;
      state.id = action.projectId;

      return state;
    case "SET_CURRENT_EXPENSE_PROJECT":
      state.current = action.expenses;
      return state;
    case "NEW_EXPENSE":
      ApiCall.registerExpense(action.data).then(function(res) {
        console.log(res.data);
        store.dispatch({type:'GET_EXPENSES', projectId: res.data.projs_id});
      })
      .catch(function(err) {
        console.error(err);
      })
      break;
    default:
      return state;
  }
  return state;
}

export default expenses;
