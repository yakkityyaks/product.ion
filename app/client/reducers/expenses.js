import ApiCall from "../utils/serverCalls";
import store from "../store";

function expenses(state = [], action) {
  switch (action.type) {
    case "GET_EXPENSES":
      ApiCall.getExpensesByProjectId(action.projectId)
        .then((res) => {
          if (res.status === 201) {
            var projectId = res.data.id,
                expenses = res.data.expenses;
            store.dispatch({type:'HYDRATE_EXPENSES', projectId, expenses});
          }
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    case "HYDRATE_EXPENSES":
      var id = "" + action.projectId;
      state[id] = action.expenses;

      console.log("New state is ", state);
      return state;
    case "NEW_EXPENSE":
      console.log("You want to make a new expense!");
      break;
    default:
      return state;
  }
  return state;
}

export default expenses;
