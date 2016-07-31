// let's go!
import React from 'react';
// user curly braces for named
import ReactDOM from 'react-dom';
// import css
import css from './styles/style.styl';
import './styles/main.css';
// import routers.
import { Router, Route, IndexRoute, browserHistory, history, hashHistory } from 'react-router';
// import components
import App from './components/App';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import Login from './components/Login';
import Organization from './components/Organization';

// binding that helps us use redux with react.
import { Provider } from 'react-redux';
// the store and history ( a named export ) we created.
import store from './store';

// Provider tag exposes store to the entire application.
// that is why we wrap the entire router in the Provider.
// router must know about created store.

const router = (
  <Provider store={store}>
      <Router history={ hashHistory }>
        <Route path="/" component={ Main }>
          <IndexRoute component={ Login }></IndexRoute>
          <Route path="/register" component={ Organization }></Route>
          <Route path="/create" component={ Dashboard }></Route>
          <Route path="/login" component={ Login }></Route>
        </Route>
      </Router>
  </Provider>
);

const elem = document.getElementById('root');

// passed in from store
console.log('production js store ', store);
ReactDOM.render(router, elem);
