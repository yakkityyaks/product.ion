// a larger reducer that will contain the others.
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './userReducer';

const rootReducer = combineReducers({ user, routing: routerReducer });

export default rootReducer;
