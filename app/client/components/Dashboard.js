import React from 'react';
import { Link } from 'react-router';
import DashCharts from './DashCharts';
import NavBar from './NavBar';
import Pitch from './Pitch';
import ProjectNode from './ProjectNode';
import Projects from './Projects';
import { Panel, Button, Label, Modal, Table } from 'react-bootstrap';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      open: false,
      editProject: null
    }
  },
  switchChart() {
    this.setState({open: !this.state.open});
  },
  switchModal: function(Project) {
    if (Project !== null) {
      this.setState({editProject: Project});
    } else {
      this.setState({editProject: null});
    }
    this.props.changeModal('pitch');
  },
  render() {
    return (
      <div className="dashboard">
        
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        
        <div>
        
          <Modal show={this.props.modals.pitch} onHide={this.switchModal} >
            <Modal.Body>
              <Pitch {...this.props} data={this.state.editProject}/>
            </Modal.Body>
            <Modal.Footer />
        
          </Modal>
        
          <Panel>
            <h2>{"Welcome to " + this.props.organization.orgName + "'s dashboard"}</h2>
            <div>
              {this.props.organization.user.perm === 0 ? (<Link to="/mastersheet">
                <h3><Label byStyle="danger">Click for Master Sheet</Label></h3>
              </Link>) : <div></div>}
            </div>
        
            <h3>Data Visualization!!!</h3>
            <Button onClick={this.switchChart}>Click for Visuals</Button>
            {this.state.open ? <DashCharts {...this.props}/> : null}
            
            <h3>Most Recent Three Projects</h3>
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
              {
                this.props.projects.slice(-3).map(function(proj, idx) {
                  return <ProjectNode key={idx} {...this.props} project={proj} switchModal={this.switchModal}/>
                }, this)
              }
              </tbody>
            </Table>
            {
              this.props.organization.user.perm === 0 ?
              <div>
                <h3>Pitches to be Approved</h3>
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
                    {
                      this.props.projects.filter(function(proj) {
                        return proj.status === "Pitch";
                      }).map(function(proj, idx) {
                        return <ProjectNode key={idx} {...this.props} project={proj} switchModal={this.switchModal}/>
                      }, this)
                    }
                  </tbody>
                </Table>
              </div> :
              this.props.organization.user.perm === 1 ?
              <div>
                <h3>Pitches awaiting Approval</h3>
              </div> :
              <div></div>
            }
          </Panel>
        </div>
      </div>
    );
  }
});

export default Dashboard;