import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import reducers from './reducers'

// import the root reducer
// import rootReducer from './reducers/reducers';

// we need to define a new defaultState so that we can see how data is being passed through Redux.

// create an object for the default data

// const store = createStore(rootReducer, defaultState);
// let store =  applyMiddleware(thunk)(createStore)(rootReducer);


const middleware = applyMiddleware(promise(), thunk, logger());

const store = createStore(reducers);

// export an instantiated store, which fires a reducer and gives it all the middleware.
export default createStore(reducer, middleware);



// export const history = syncHistoryWithStore(browserHistory, store);

// if(module.hot) {
//   module.hot.accept('./reducers/',() => {
//     const nextRootReducer = require('./reducers/index').default;
//     store.replaceReducer(nextRootReducer);
//   });
// }

// export default store;
