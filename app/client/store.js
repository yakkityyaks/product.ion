import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import { browserHistory } from 'react-router';

// import logger for middleware
import logger from "redux-logger";

// import the root reducer
import rootReducer from './reducers/index';

// import projects from './data/projects';//TAKE THESE OUT. REPLACE WITH EMPTY OBJECTS
// import expenses from './data/expenses';// FILL THESE OBJECTS UPON SUCCESSFUL LOGIN
// import organization from './data/organization';// TAKE THESE OUT

// create an object for the default data
const projects = [];
const expenses = {};
const organization = {};
const messages = {
  login: "",
  register: "",
  pitch: "",
  registerOrg: "",
  registerUser: "",
};
const modals = {
	pitch: false,
  addUser: false
};
const navBar = {
  key: 1
};

const defaultState = {
  projects,
  expenses,
  organization,
  messages,
  modals,
  navBar
};

//middleware for logging changes in state.
// const middleware = applyMiddleware(logger());
const middleware = applyMiddleware(routerMiddleware(browserHistory));

const store = createStore(rootReducer, defaultState, middleware);

//Not sure what this did, hopefully we can leave this out without any problems
// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
