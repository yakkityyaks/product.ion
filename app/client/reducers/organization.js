import ApiCall from "../utils/serverCalls";
import store from "../store";
import { push } from "react-router-redux";

function posts(state=[], action) {
  switch (action.type) {
    case "ADD_NEW_ORG":
      ApiCall.registerOrg(action.orgName)
        .then(function (res, err) {
          if (err) console.log(err);
          else {
            if (res.status === 403) {
              //Login error message
              store.dispatch({type:"REGISTRATION_ERROR", target: 0,
                message: "That organization already exists. Please try again."});
              console.log("Error: organization already exists");
            } else {
              var orgData = res.data;
              ApiCall.registerUser(action.data)
                .then(function (res, err) {
                  if (err) console.error(err);
                  else {
                    if (res.status === 403) {
                      //User error message
                      store.dispatch({type:"REGISTRATION_ERROR", target: 1,
                        message: "That username already exists. Please try again."});
                      console.log("Error: username already exists");
                    } else {
                      var organization = {
                        id: orgData.id,
                        orgs_id: orgData.orgs_id,
                        orgName: orgData.orgName,
                        user: {name: res.data.userName, perm: res.data.perm},
                        users: orgData.users
                      };//build data object with responses from both APIcalls.
                      console.log("Successful server chain. Hydrating an organization with data. ", organization);
                      store.dispatch({
                        type: "HYDRATE_ORG",
                        organization
                      });
                      var joinedName = organization.orgName.split(" ").join("");
                      store.dispatch(push(`/dashboard/${joinedName}`));
                    }
                  }
                });
              // store.dispatch(
              //   {type:"LOGIN",
              //   username: res.data.user.username,
              //   org: {id: res.data.user.org_id, name: res.data.orgName},
              // });
            }
          }
        });
      break;
    case "ADD_NEW_USER":
      console.log("So you want to make a new user");
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
            var joinedName = res.data.orgs .name.split(" ").join("");
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
