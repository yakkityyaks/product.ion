// a larger reducer that will contain the others.
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import expenses from './expenses';
import projects from './projects';
import budgets from './budgets';
import organization from './organization';
import messages from './messages';
import modals from './modals';
import navBar from './navBar';
import parseCSV from './csv';


const rootReducer = combineReducers({messages, expenses, projects, budgets, organization, modals, navBar, parseCSV, routing: routerReducer});

export default rootReducer;
