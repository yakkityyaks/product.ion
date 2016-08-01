function projects(state = [], action) {
  switch (action.type) {
    case "NEW_PROJECT":
      console.log("You want to make a new project");
      break;
    default:
      return state;
  }
  return state;
}

export default projects;
