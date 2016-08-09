import ApiCall from "../utils/serverCalls";
import store from "../store";

import { browserHistory } from 'react-router';

function expenses(state = [], action) {
  switch (action.type) {
    case "GET_EXPENSES":
      console.log(action);
      ApiCall.getExpensesByProjectId(action.projectId)
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            console.log(res.data.projId);
            var projectId = res.data.projId,
                expenses = res.data.expenses,
                id = res.data.id;
            console.log("i'm here?");
            store.dispatch({type:'HYDRATE_EXPENSES', projectId, id, expenses});
            browserHistory.push('/expenses');
          }
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    case "HYDRATE_EXPENSES":
      state.projId = action.projectId;
      state.expenses = action.expenses;
      state.id = action.id;

      return state;
    case "SET_CURRENT_EXPENSE_PROJECT":
      state.current = action.expenses;
      return state;
    case "NEW_EXPENSE":
      console.log('in new expense', action.data);
      ApiCall.registerExpense(action.data).then(function(res) {
        console.log('new expense', res.data);
        store.dispatch({type:'GET_EXPENSES', projectId: action.projId, id: action.data.projs_id});
      })
      .catch(function(err) {
        console.error(err);
      })
      break;
    case "REMOVE_EXPENSE":
      console.log('removing');
      ApiCall.removeExpense(action.id).then(function(res) {
        store.dispatch({type: 'GET_EXPENSES', projectId: action.projId, id: action.projs_id});
      })
      .catch(function(err) {
        console.err(err);
      });
    case "UPDATE_EXPENSE":
      console.log('updating');
      ApiCall.updateExpense(action.data, action.data.id).then(function(res) {
        store.dispatch({type: 'GET_EXPENSES', projectId: action.projId, id: action.projs_id});
      })
      .catch(function(err) {
        console.err(err);
      })
    default:
      return state;
  }
  return state;
}

export default expenses;
