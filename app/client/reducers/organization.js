import ApiCall from "./serverCalls";

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
    case "LOGIN":
      ApiCall.login(action.username, action.password)
        .then(function(res, err) {
          console.log("ding ding", res);
          console.log("State is ", state);
          // return Object.assign({}, state, {users: res.data.username});

        }.bind(this));

      break;
  }
  return state;
}

export default posts;
