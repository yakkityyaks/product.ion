import ApiCall from "../utils/serverCalls";
import store from "../store";

function projects(state = [], action) {
  switch (action.type) {
    case "POST_NEW_PROJECT":
      ApiCall.registerProject(action.pitch)
        .then(function(res) {
          console.log(res.data);
          let projects;
          if(res.status === 201) {
            projects = {
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
            store.dispatch({type: 'HYDRATE_PROJECT', project: projects});
          }
          console.log("PROJECT OBJECT ",action);
          // return project;
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
    case "HYDRATE_PROJECT":
      console.log("You want to hydrate the single project state with ", action.projects);
      return action.projects;
    case "HYDRATE_PROJECTS":
      console.log("You want to hydrate the projects state with ", action.projects);
      return action.projects;
    case "UPDATE_ID":
      console.log("You want to update ID");
      return action.project;
    case "CLEAR_PROJ":
      return {};
    default:
      return state;
  }
  return state;
}

export default projects;
