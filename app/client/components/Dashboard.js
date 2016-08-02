import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
// was comment.

const Dashboard = React.createClass({
  // getInitialState() {
  //   var orgName = this.props.organization.orgName;
  //   console.log(this.props);
  // },
  componentDidMount() {
    var orgName = this.props.organization.orgName;
    this.props.getOrgProjects(orgName);
  },
  render() {
    return (
      <div className="dashboard">
        <Projects {...this.props}/>
      </div>
    );
  }
});

export default Dashboard;
        // {this.props.projects.map((project, idx) =>
        //   <ProjectNode key={idx} idx={idx} {...this.props} project={project}/>)}
