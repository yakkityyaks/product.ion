import React from 'react';
import { Link } from 'react-router';
import ProjectNode from './ProjectNode.js';
import { Button, Modal, Panel, Table } from 'react-bootstrap';
import Pitch from './Pitch.js';

import { OverlayTrigger } from 'react-bootstrap';//not used, could be cool

const Projects = React.createClass({
  getInitialState() {
    return {editProject: null};
  },
  switchModal: function(Project) {
    if (Project !== null) {
      this.setState({editProject: Project});
    } else {
      this.setState({editProject: null});
    }
    this.props.changeModal('pitch');
    // this.setState({editProject: undefined});
    // this.props.getOrgProjects(this.props.organization.orgName);//why was this here?
  },

  render() {
    return (
      <div style={{fontSize : "14px"}}>
        <Panel>
          <Button bsStyle="primary" bsSize="large" id="modalButton" onClick={this.switchModal}>
            Create a Pitch
          </Button>

          <Modal show={this.props.modals.pitch} onHide={this.switchModal} >
            <Modal.Body>
              <Pitch {...this.props} data={this.state.editProject}/>
            </Modal.Body>
            <Modal.Footer />
          </Modal>

          <Panel>
          	<Table striped bordered>
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
              			<ProjectNode key={idx} idx={idx} {...this.props}
                    project={project} switchModal={this.switchModal}/>
                  )}
          		</tbody>
          	</Table>
          </Panel>
        </Panel>
      </div>
    );
  }
});

export default Projects;
