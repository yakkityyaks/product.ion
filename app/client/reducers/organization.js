import ApiCall from "./serverCalls";
import store from "../store";

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
    case "SUBMIT_LOGIN":
      ApiCall.login(action.username, action.password)
        .then(function(res, err) {
          console.log("ding ding", res);
          store.dispatch({type:"LOGIN", username: res.data.username, org: res.data.orgs});
          console.log("Store is ", store);
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
