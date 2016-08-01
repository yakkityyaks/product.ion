function posts(state = [], action) {
  switch (action.type) {
    case "ADD_NEW_ORG":
      console.log("You want to register an new org");
      break;
    case "LOGIN":
      console.log("You want to login: ", action);
      break;
  }
  return state;
}

export default posts;
