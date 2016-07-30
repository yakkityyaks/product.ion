import React from 'react';
import { Link } from 'react-router';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ProjectNode = React.createClass({
  displayName: 'ProjectNode',

  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    // const { post, idx, comments } = this.props;
    return React.createElement(
      'div',
      { className: 'projectNode' },
      'I\'m a project!'
    );
  }

});

export default ProjectNode;