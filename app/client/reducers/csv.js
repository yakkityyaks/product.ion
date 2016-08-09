import ApiCall from "../utils/serverCalls";
import store from "../store";
import { push } from "react-router-redux";

function parse(state=[], action) {
  switch(action.type) {
    case "PARSE_CSV":
    ApiCall.parseCSV(action.object)
    .then(function(res) {
      console.log("API CALL FOR PARSE WORKS ", res);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
}
