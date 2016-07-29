import React from 'react';
import ProjectNode from './ProjectNode';

const Dashboard = React.createClass({
  displayName: 'Dashboard',

  render() {
    return React.createElement(
      'div',
      { className: 'dashboard' },
      'I\'m the dashboard!'
    );
  }
});

export default Dashboard;