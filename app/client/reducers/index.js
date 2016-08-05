// a larger reducer that will contain the others.
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import expenses from './expenses';
import projects from './projects';
import organization from './organization';
import messages from './messages';
import modals from './modals';
import navBar from './navBar';


const rootReducer = combineReducers({messages, expenses, projects, organization, modals, navBar, routing: routerReducer});

export default rootReducer;
