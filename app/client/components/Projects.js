import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectNode from './ProjectNode.js';
// was Photo.js
const Projects = React.createClass({
  render() {
    return (
      <div style={{fontSize : "14px"}}>
        <button className="plus-button">
          <Link to={`/pitch`}>
            Add a Pitch!
          </Link>
        </button>
      	<table style={{width: "100%"}}>
      		<thead>
      			<tr>
      				<th>Name</th>
      				<th>Project ID</th>
      				<th>Project Status</th>
      				<th>Cost to Date</th>
      				<th>Estimate to Complete</th>
      			</tr>
      		</thead>
      		<tbody>
      			{this.props.projects.map(
      				(project, idx) =>
          			<ProjectNode key={idx} idx={idx} {...this.props} project={project} />)}
      		</tbody>
      	</table>
      </div>
    );
  }
});

export default Projects;
