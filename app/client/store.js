import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import axios from 'axios';
import { Provider } from 'react-redux';
import promise from 'redux-promise-middleware';
import reducer from './reducers/userReducer';

const middleware = applyMiddleware(promise(), thunk, logger());
const store = createStore(reducer, middleware);
// export an instantiated store, which fires a reducer and gives it all the middleware.

console.log('STORE: reducer ', createStore(reducer, middleware));

// export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
  module.hot.accept('./reducers/',() => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
