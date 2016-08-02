import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
import { Link } from 'react-router';
// was comment.

const Dashboard = React.createClass({
  componentDidMount() {
    var orgName = this.props.organization.orgName;
    this.props.getOrgProjects(orgName);
  },
  render() {
    return (
      <div className="dashboard">
      <div>
        <button className="plus-button">  -|-  </button>
      </div>
        <br></br>
        <Projects {...this.props}/>
      </div>
    );
  }
});

export default Dashboard;
        // {this.props.projects.map((project, idx) =>
        //   <ProjectNode key={idx} idx={idx} {...this.props} project={project}/>)}
