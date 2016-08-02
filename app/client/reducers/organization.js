import ApiCall from "../utils/serverCalls";
import store from "../store";
import { push } from "react-router-redux";

function posts(state=[], action) {
  switch (action.type) {
    case "ADD_NEW_ORG":
      console.log("You want to register an new org");
      ApiCall.register(action.orgName, action.username, action.password)
        .then(function (res, err) {
          if (err){console.log(err);}
          console.log("Registered an organization. ", res);
        });
      break;
    case "POST_LOGIN":
      ApiCall.login(action.username, action.password)
        .catch(function(err) {
          store.dispatch({
            type:"SET_LOGIN_MESSAGE",
            message: "Invalid username/password combination. Please try again",
            className: "errorMessage"
          });
          console.error(err);
        })
        .then(function(res) {
          if (res) {
            console.log("reducers/organization/SUBMIT_LOGIN: res is ", res);
            store.dispatch({type:"LOGIN", username: res.data.username, org: res.data.orgs});
            store.dispatch(push('/dashboard'));
          }
        });
      return state;
    case "LOGIN":
      return Object.assign({}, state, {
        users: action.username,
        org: action.org.id,
        orgName: action.org.name
      });
  }
  return state;
}

export default posts;