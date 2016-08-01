import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
// was comment.
<<<<<<< afd8f6067a92a59fd0f3a1d32d5c18f8277528d3
=======

const Dashboard = React.createClass({
>>>>>>> foo

const Dashboard = React.createClass({
  // getInitialState() {
  //   var orgName = this.props.organization.orgName;
  //   console.log(this.props);
  // },
  componentDidMount() {
    var orgName = this.props.organization.orgName;
    console.log(this.props.getProjectsByOrgName(orgName));
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
