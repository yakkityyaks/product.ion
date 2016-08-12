import ApiCall from "../utils/serverCalls";
import store from "../store";

function projects(state = [], action) {
  switch (action.type) {
    case "POST_NEW_PROJECT":
      ApiCall.registerProject(action.pitch)
        .then(function(res) {
          let project = {
            id: res.data.id,
            name: res.data.name,
            numAssets: res.data.numAssets,
            user_id: res.data.createdBy,
            endDate: res.data.endDate,
            orgs_id: res.data.orgs_id,
            projId: res.data.projId,
            startDate: res.data.startDate,
            status: res.data.status,
            type: res.data.type,
            estimateToComplete: res.data.estimateToComplete
          };
          console.log(res);
        })
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
    case "CLEAR_PROJ":
      return {};
    default:
      return state;
  }
  return state;
}

export default projects;
