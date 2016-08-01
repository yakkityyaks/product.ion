function posts(state = [], action) {
  switch (action.type) {
    case "VALIDATE_NEW_ORG":
      console.log("Action is ", action);
      break;
    default:
      return state;
    case "REGISTER_ORG":
      const newOrg = async.register();

      changeState(newOrg);
      console.log("You want to register an new org");
      break;
  }
  return state;
}

export default posts;
