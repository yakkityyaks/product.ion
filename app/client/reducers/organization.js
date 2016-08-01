import ApiCall from "./serverCalls";

function posts(state = [], action) {
  switch (action.type) {
    case "ADD_NEW_ORG":
      console.log("You want to register an new org");
      var registerPromise = ApiCall.register(action.orgName, action.username, action.password)();

      registerPromise.then(function (res) {
          console.log("Registered an organization. ", res);
        });
      break;
    case "LOGIN":
      var loginPromise = ApiCall.login()
        .then(function(res) {
          console.log("ding ding", res);
        });
      break;
  }
  return state;
}

export default posts;
