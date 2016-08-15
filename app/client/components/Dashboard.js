import React from 'react';
import { Link } from 'react-router';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
import NavBar from './NavBar';
import { Panel, Button, Label } from 'react-bootstrap';
import DashCharts from './DashCharts';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      open: false
    }
  },
  switchChart() {
    this.setState({open: !this.state.open});
  },
  render() {
    return (
      <div className="dashboard">
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <div>
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
            <Projects {...this.props} short={true}/>
          </Panel>
          <Projects {...this.props} short={false}/> 
        </div>
      </div>
    );
  }
});

export default Dashboard;