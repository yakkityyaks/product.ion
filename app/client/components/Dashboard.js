import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
import NavBar from './NavBar';
import { Panel } from 'react-bootstrap';

const Dashboard = React.createClass({

  render() {
    return (
      <div className="dashboard">
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <div>
          <Projects {...this.props}/>
        </div>
      </div>
    );
  }
});

export default Dashboard;
        // {this.props.projects.map((project, idx) =>
        //   <ProjectNode key={idx} idx={idx} {...this.props} project={project}/>)}
