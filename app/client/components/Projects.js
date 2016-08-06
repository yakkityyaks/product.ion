import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectNode from './ProjectNode.js';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import Pitch from './Pitch.js';
// was Photo.js
const Projects = React.createClass({
  
  switchModal: function() {
    this.props.changePitchModal('pitch');
    this.props.getOrgProjects(this.props.organization.orgName);
  },

  render() {
    return (
      <div style={{fontSize : "14px"}}>
        <Panel>
          <Button bsStyle="primary" bsSize="large" id="pitchButton" onClick={this.switchModal}>
            Create a Pitch
          </Button>

          <Modal show={this.props.modals.pitch} onHide={this.switchModal} >
            <Modal.Header closeButton>
              <Modal.Title>Create a Pitch</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Pitch {...this.props}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.switchModal}>Close</Button>
            </Modal.Footer>
          </Modal>


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
        </Panel>
      </div>
    );
  }
});

export default Projects;
