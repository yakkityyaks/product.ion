import React from 'react';

import { render } from 'react-dom';

// Import css
import css from './styles/style.css';

// Import Components
import App from './components/App';
import Login from './comments/Login';
import Dashboard from './components/Dashboard.jsx';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRedirect to="/login" />
      <Route path="login" component={login} />
      <Route path="dashboard/:orgId" component={Dashboard} />
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
