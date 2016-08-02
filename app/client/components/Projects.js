import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectNode from './ProjectNode.js';
// was Photo.js
const Projects = React.createClass({
  render() {
    return (
      <div>
      	{this.props.projects.map((project, idx) =>
          <ProjectNode key={idx} idx={idx} {...this.props} project={project}/>)}
      </div>
    );
  }
});

export default Projects;
