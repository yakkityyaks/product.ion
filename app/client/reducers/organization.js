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
          else {
            console.log("Registered an organization. ", res.data);
            var joinedName = res.data.orgName.split(" ").join("");
            store.dispatch(
              {type:"LOGIN",
               username: res.data.user.username,
               org: {id: res.data.user.org_id, name: res.data.orgName},
             });
            store.dispatch(push(`/dashboard/${joinedName}`));
          }
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
            var joinedName = res.data.orgs.name.split(" ").join("");
            store.dispatch(push(`/dashboard/${joinedName}`));
          }
        });
      return state;
    case "LOGIN":
      console.log("You're logging in with data ", action);
      return Object.assign({}, state, {
        users: action.username,
        org: action.org.id,
        orgName: action.org.name
      });
  }
  return state;
}

export default posts;
