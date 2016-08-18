import ApiCall from "../utils/serverCalls";
import store from "../store";

import { browserHistory } from 'react-router';

function expenses(state = [], action) {
  switch (action.type) {
    case "GET_EXPENSES":
      console.log(action);
      ApiCall.getExpensesByProjectId(action.projectId)
        .then((res) => {
          console.log('did not get the 201 ',res);
          if (res.status === 201) {
            console.log('got the 201 ', res.data.projId);
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
      ApiCall.registerExpense(action)
      .then(function(res) {
        console.log('new expense', res.data.projs_Id);
        store.dispatch({type:'GET_EXPENSES', projectId: res.data});
      })
      .catch(function(err) {
        console.error(err);
      })
      break;
    case "REMOVE_EXPENSE":
      ApiCall.removeExpense(action)
      .then(function(res) {

        store.dispatch({type:'GET_EXPENSES', projectId: res.data});
      })
      .catch(function(err) {
        console.err(err);
      });
      // var temp = [];
      // for (var i = 0; i < state.expenses.length; i++) {
      //   if (state.expenses[i].id !== action.id) {
      //     temp.push(state.expenses[i]);
      //   }
      // }
      // return {id: state.id, projId: state.projId, expenses: temp}
    case "UPDATE_EXPENSE":
      ApiCall.updateExpense(action)
      .then(function(res) {
        console.log('back at dispatch for update ', res)
        store.dispatch({type:'GET_EXPENSES', projectId: res.data});
      })
      .catch(function(err) {
        console.err(err);
      });
    case "CLEAR_EXP":
      return {};
    default:
      return state;
  }
  return state;
}

export default expenses;
