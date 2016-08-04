import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
import { Link } from 'react-router';

import { browserHistory } from 'react-router';
import { push } from "react-router-redux";
// was comment.

const Dashboard = React.createClass({
  componentWillMount() {
    var orgName = this.props.organization.orgName;
    this.props.getOrgProjects(orgName);
  },
  logout() {
    this.props.logout();
    browserHistory.push('/login');
  },
  render() {
    return (
      <div className="dashboard">
        <div>
          <button className="plus-button" onClick={this.logout}>
          Logout
          </button>
          <button className="plus-button">
            <Link to={'/addUser'}>⚙</Link>
          </button>
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
