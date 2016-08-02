import ApiCall from "../utils/serverCalls";
import store from "../store";

function projects(state = [], action) {
  switch (action.type) {
    case "POST_NEW_PROJECT":
      console.log("You want to make a new project");
      break;
    case "GET_ORG_PROJECTS":
      console.log("You want to get org projects");
      ApiCall.getProjects(action.org)
        .catch()
        .then();
      break;
    case "HYDRATE_PROJECTS":
      console.log("You want to get some projects");
      break;
    default:
      return state;
  }
  return state;
}

export default projects;
