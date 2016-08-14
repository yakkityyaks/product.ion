import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
import NavBar from './NavBar';
import { Panel, Button } from 'react-bootstrap';
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
            <h3>Data Visualization!!!</h3>
            <Button onClick={this.switchChart}>Click for Visuals</Button>
            <Panel  collapsible expanded={this.state.open}>
              <DashCharts {...this.props}/>
            </Panel>  
            <h3>Most Recent Three Projects</h3>
          </Panel>
          <Projects {...this.props}/> 
        </div>
      </div>
    );
  }
});

export default Dashboard;
            // <ProjectNode key={1} idx={1} {...this.props} project={this.props.projects[this.props.projects.length - 1]}/>
            // <ProjectNode key={2} idx={2} {...this.props} project={this.props.projects[this.props.projects.length - 2]}/>
            // <ProjectNode key={3} idx={3} {...this.props} project={this.props.projects[this.props.projects.length - 3]}/>