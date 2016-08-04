import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectNode from './ProjectNode.js';
// was Photo.js
const Projects = React.createClass({
  render() {
    return (
      <div style={{fontSize : "14px"}}>
        
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button>

<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

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

// <div style={{fontSize : "14px"}}>
//         <button className="plus-button">
//           <Link to={`/pitch`}>
//             Add a Pitch!
//           </Link>
//         </button>