// let's go!
import React from 'react';
// user curly braces for named
import ReactDOM from 'react-dom';
// import css
import css from './styles/style.styl';
import './styles/main.css';
// import routers.
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { Router, Route, IndexRoute, browserHistory, history, hashHistory } from 'react-router';

// import components
import App from './components/App';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Organization from './components/Organization';
//

// binding that helps us use redux with react.
import { Provider } from 'react-redux';
// the store and history ( a named export ) we created.
import store from './store';

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
        <Route path="/dashboard" component={ Dashboard }></Route>
      </Route>
    </Router>
  </Provider>
);

const elem = document.getElementById('root');

ReactDOM.render(router, elem);
