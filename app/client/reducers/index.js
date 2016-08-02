// a larger reducer that will contain the others.
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import expenses from './expenses';
import projects from './projects';
import organization from './organization';
import messages from './messages';

const rootReducer = combineReducers({messages, expenses, projects, organization, routing: routerReducer});

export default rootReducer;
