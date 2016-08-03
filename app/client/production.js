// let's go!
import React from 'react';
// user curly braces for named
import { render } from 'react-dom';
// import css
import css from './styles/style.styl';
// import components
import App from './components/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Pitch from './components/Pitch';
import AddUser from './components/AddUser';
//
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// binding that helps us use redux with react.
import { Provider } from 'react-redux';
// the store and history ( a named export ) we created.
import store, { history } from './store';

// Provider tag exposes store to the entire application.
// that is why we wrap the entire router in the Provider.
// router must know about created store.
const router = (
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Login }></IndexRoute>
        <Route path='/register' component={ Register }></Route>
        <Route path='/login' component = { Login }></Route>
        <Route path="/dashboard/:orgName" component={ Dashboard }></Route>
        <Route path='/pitch' component = { Pitch }></Route>
        <Route path='/adduser' component = { AddUser }></Route>
      </Route>
    </Router>
  </Provider>
);

// we can render Main because we imported it.
render(router, document.getElementById('root'));
