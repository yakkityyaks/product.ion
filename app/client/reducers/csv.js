import ApiCall from "../utils/serverCalls";
import store from "../store";

function parse(state=[], action) {
  switch(action.type) {
    case "PARSE_CSV":
    ApiCall.parseCSV(action.object)
    .then(function(res) {
      // if(res.status === 201) {
        console.log("API CALL FOR PARSE WORKS ", res);

        store.dispatch({ res.data });


      // }
    })
    .catch(function(err) {
      console.log(err);
    });
  }
}

export default parse;
