import ApiCall from "../utils/serverCalls";
import store from "../store";

function projects(state = [], action) {
  switch (action.type) {
    case "POST_NEW_PROJECT":
      ApiCall.registerProject(action.pitch)
        .catch((err) => {
          console.error(err);
        });
      break;
    case "GET_ORG_PROJECTS":
      console.log("You want to get org projects from ", action);
      ApiCall.getProjectsByOrgName(action.orgName)
        .catch((err) => {
          console.error(err);
        })
        .then((res) => {
          if (res) {
            console.log("Get_Org_Projects: Response received. Res is ", res);
            store.dispatch({type:"SET_USERS", users: res.data.users});
            store.dispatch({type:"HYDRATE_PROJECTS", projects: res.data.projects});
          }
        });
      break;
    case "HYDRATE_PROJECTS":
      console.log("You want to hydrate the projects state with ", action.projects);
      return action.projects;
    default:
      return state;
  }
  return state;
}

export default projects;
