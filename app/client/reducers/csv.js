import ApiCall from "../utils/serverCalls";
import store from "../store";

function parseCSV(state=[], action) {
  switch(action.type) {
    case "PARSE_CSV":
    console.log(action.object);
    ApiCall.parseCSV(action.object, action.id)
    .then(function(res) {
      // if(res.status === 201) {
        console.log("API CALL FOR PARSE WORKS ", res);

        store.dispatch({
          type: "HYDRATE_TABLES",
          res
        });

      // }
    })
    .catch(function(err) {
      console.log(err);
    });
    break;
      case "HYDRATE_TABLES":
      console.log("ACTION ", action);
  }
  return state;
}

export default parseCSV;
