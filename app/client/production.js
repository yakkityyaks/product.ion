// let's go!
import React from 'react';
// user curly braces for named
import { render } from 'react-dom';
// import css
import css from './styles/style.styl';
// import components
import App from './components/App';
import Dashboard from './components/Dashboard';
import Main from './components/Main';
import Login from './components/Login';
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
        <Route path="/create" component={ Dashboard }></Route>
      </Route>
    </Router>
  </Provider>
)

// we can render Main because we imported it.
render(router, document.getElementById('root'));
