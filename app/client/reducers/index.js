import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import expenses from './expenses';
// import projects from './projects';

const rootReducer = combineReducers({expenses, routing: routerReducer});
// const rootReducer = combineReducers({expenses, projects, routing: routerReducer});

export default rootReducer;
