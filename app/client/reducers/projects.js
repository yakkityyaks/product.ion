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
      console.log("You want to get org projects from ", action, 'store', store);
      ApiCall.getProjectsByOrgName(action.orgName)
        .catch((err) => {
          console.error(err);
        })
        .then((res) => {
          if (res) {
            console.log("Get_Org_Projects: Response received. Res is ", res, store);
            store.dispatch({type:"SET_USERS", users: res.data.users});
            store.dispatch({type:"HYDRATE_PROJECTS", projects: res.data.projects});
          }
        });
      break;
    case "GET_PROJECT":
      console.log("You want to get a single project with id", action.projId);
      ApiCall.getProjectByProjId(action.projId)
        .then(res => {
          console.log("Res is ", res);
          let id = res.data.id,
              list = res.data.budgets;
          store.dispatch({type: "HYDRATE_PROJECT_BUDGETS", id, list});
        })
        .catch(err => {
          console.log("Whoopsie in GET_PROJECT");
          console.error(err);
        });
      break;
    case "HYDRATE_PROJECTS":
      console.log("You want to hydrate the projects state with ", action.projects);
      return action.projects;
    case "UPDATE_PROJECT":
      console.log("You want to update project ", action.project);
      ApiCall.updateProject(action.project, action.project.projId)
        .then(res => {
          console.log("Successfully updated a project!");
          console.log(res);
        })
        .catch(err => {
          console.log("Error in update Project");
          console.error(err);
        });
      break;
    case "UPDATE_ID":
      console.log("You want to update ID");
      return action.project;
    case "HYDRATE_PROJ_EXPENSES":
      console.log('hydrating ', action);
      return Object.assign({}, state, {expenses: action.expenses});
    case "CLEAR_PROJ":
      return {};
    case "GET_PROJ_EXPENSES":
      console.log('getting proj expenses', action.projIds);
      var length = action.projIds.length;
      var count = 0;
      var temp = [];
      action.projIds.forEach(function(projId) {
        // console.log(p
        ApiCall.getExpensesByProjectId(projId).then(function(res) {
          count++;
          console.log('in call');
          res.data.expenses.forEach(function(exp) {
            temp.push(exp);
          });
          if (count === length) {
            store.dispatch({type:"HYDRATE_PROJ_EXPENSES", expenses: temp});
          }
        });
      });
      break;
    default:
      return state;
  }
  return state;
}

export default projects;
