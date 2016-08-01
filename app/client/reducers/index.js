import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import expenses from './expenses';
import projects from './projects';
import organization from './organization';

const rootReducer = combineReducers({expenses, projects, organization, routing: routerReducer});

export default rootReducer;
