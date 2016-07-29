import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.css';

// Import Components
import Main from './components/Main';
import Login from './comments/Login';
import Dashboard from './components/Dashboard.jsx';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = React.createElement(
  Router,
  { history: browserHistory },
  React.createElement(
    Route,
    { path: '/', component: Main },
    React.createElement(IndexRedirect, { to: '/login' }),
    React.createElement(Route, { path: 'login', component: login }),
    React.createElement(Route, { path: 'dashboard/:orgId', component: Dashboard })
  )
);

render(router, document.getElementById('root'));