import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';


// export an instantiated store, which fires a reducer and gives it all the middleware.

import projects from './data/projects';//TAKE THESE OUT. REPLACE WITH EMPTY OBJECTS
import expenses from './data/expenses';// FILL THESE OBJECTS UPON SUCCESSFUL LOGIN
import organization from './data/organization';// TAKE THESE OUT

// create an object for the default data
// const projects = [];
// const expenses = [];
// const user = {};

const defaultState = {
  projects,
  expenses,
  organization
};

const store = createStore(rootReducer, defaultState);

//Not sure what this did, hopefully we can leave this out without any problems
// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
