import ApiCall from "../utils/serverCalls";
import store from "../store";
import { browserHistory } from 'react-router';

function posts(state=[], action) {
  switch (action.type) {
    case "REGISTRATION_CHECK":
      ApiCall.registrationCheck(action.orgName, action.username)
      .catch(function (err) {
        console.log("Should be here");
        var message="", target=0;
        switch (err.response.status) {
          case 400:
            target=3;
            message = ["Sorry, that organization name is taken", "Sorry, that username is taken"];
            break;
          case 401:
            message = "Sorry, that organization name is taken";
            target = 0;
            break;
          case 403:
            message = "Sorry, that username is taken";
            target = 1;
            break;
          default:
            console.error(err);
        }
        store.dispatch({type: "REGISTRATION_ERROR", target:target, message: message});
      })
      .then(function(res){
        if (res && res.status===200) {//put this back when ready
          console.log("Both fields clear. Registering org and user");
          store.dispatch({
            type: "ADD_NEW_ORG",
            orgName: action.orgName,
            username: action.username,
            password: action.password
          });//register new org.
        } else {
          console.log("Something is wrong. Res is ", res);
        }
      });
      break;

    case "ADD_NEW_ORG":
      console.log("Lets get started. action is ", action);
      ApiCall.registerOrg(action.orgName)
        .catch(function (err) {
          console.error(err);
        })
        .then(function (res) {
           if (res.status === 201) {
            console.log("Step 2 complete. Organization is registered. res is ", res);
            var orgData = res.data;

            //create a new user with Amdmin powers (the 0)
            ApiCall.registerUser(action.username, action.password, res.data.id, 0)
              .catch(function (err) {
                console.error(err);
              })
              .then(function (res) {
                if (res.status === 201) {
                  console.log("Building an object with ", orgData);
                  var organization = {
                    id: orgData.id,
                    orgName: orgData.name,
                    user: {name: res.data.username, perm: res.data.perm},
                    users: [{name: res.data.username, perm: res.data.perm}]
                  };//build data object with responses from both APIcalls.
                  console.log("Successful server chain. Hydrating an organization with data. ", organization);
                  store.dispatch({
                    type: "HYDRATE_ORG",
                    organization
                  });
                  var joinedName = organization.orgName.split(" ").join("");
                  browserHistory.push(`/dashboard/${joinedName}`);
                } else {
                  console.log("Big error. Res is ", res);
                }
              });
          }
        });
      break;

    case "HYDRATE_ORG":
      console.log("state is, ", state, "\naction is ", action);
      return action.organization;

    case "ADD_NEW_USER":
      console.log("So you want to make a new user");
      console.log("ORGS ID ", state.orgs_id);
      var orgs_id = state.orgs_id;
      console.log("registering user with data: ", action.username, action.password, orgs_id, action.perm);
      ApiCall.registerUser(action.username, action.password, orgs_id, action.perm)
        .then(function(res) {
          console.log("USER RES ", res);
          let userData = res.data;
          if(res.status === 201) {
            let user = {
              id: userData.id,
              user: userData.username,
              password: userData.password,
              orgs_id: userData.orgs_id,
              perm: userData.perm
            };
          }
        })
        .catch(function(err) {
          console.error(err);
        });
      break;

    case "UPDATE_USER":
      console.log("ding ding ding", action.user);
      ApiCall.updateUser(action.user)
              .then(res => {
                console.log(res);
              })
              .catch(err => {
                console.error(err);
              });
      break;

    case "POST_LOGIN":
      ApiCall.login(action.username, action.password)
        .catch(function(err) {
          store.dispatch({
            type:"SET_LOGIN_MESSAGE",
            message: "That username doesn't exist. Check your spelling?",
            className: "errorMessage"
          });
          console.error(err);
        })
        .then(function(res) {
          console.log("the res i wanna see ", res);
          console.log("ACTION PW ", action.password);
          if (res.data.user.password === action.password) {
            console.log("reducers/organization/SUBMIT_LOGIN: res is ", res);
            store.dispatch({
              type:"LOGIN",
              username: res.data.user.username,
              password: res.data.user.password,
              id: res.data.user.id,
              orgs_id: res.data.user.orgs_id,
              orgName: res.data.user.org.name,
              perm: res.data.user.perm,
              jwt: res.data.token
            });
            var joinedName = res.data.user.org.name.split(" ").join("");
            sessionStorage.setItem('jwtToken', res.data.token);
            browserHistory.push(`/dashboard/${joinedName}`);
          } else {
            console.log("You done fucked up");
            store.dispatch({
              type:"SET_LOGIN_MESSAGE",
              message: "What happened? Wrong password. That's what happened.",
              className: "errorMessage"
            });
          }
        });
      return state;

    case "LOGIN":
      console.log("You're logging in with data ", action);
      return Object.assign({}, state, {
        user: {name: action.username, password: action.password, perm: action.perm, id: action.id},
        orgName: action.orgName,
        orgs_id: action.orgs_id,
        jwt: action.jwt
      });

      case "REFRESHED_LOGIN":
        ApiCall.checkToken(action.token)
        .then(res => {
          if (res.status === 201) {
            console.log("REFRESH res.data ", res.data);
            const user = res.data;
            store.dispatch({type:"POST_LOGIN", username:user.username, password: user.password});
          }
        })
        .catch(err => {
          console.error(err);
        });
        break;

      case "CHANGE_PASSWORD":
        ApiCall.login(action.username, action.password)
        .then(function(res) {
          console.log("resword is ", res.data.user.password);
          console.log("actionword is ", action.password);
          if (res.data.user.password === action.password) {
            ApiCall.changePassword(action.username, action.newPassword)
              .then(function(res) {
                store.dispatch({type: "SET_PASSWORD_MESSAGE",
                      message:"Success! You changed your password!"});
              })
              .catch(function(err) {
                console.error(err);
              });
          } else {
            store.dispatch({type: "SET_PASSWORD_MESSAGE",
                  message:"Error. Please re-enter user password"});
          }
        })
        .catch((err) => {
          console.log("Reducers-CHANGE_PASSWORD: res is", err);
        });
        break;

    case "SET_USERS":
      console.log('setting users', action.users);
      return Object.assign({}, state, {users: action.users});

    case "LOGOUT":
      sessionStorage.removeItem('jwtToken');
      return {};
  }
  return state;
}

export default posts;
