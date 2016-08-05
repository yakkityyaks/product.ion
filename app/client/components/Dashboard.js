import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

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
    browserHistory.push('/');
  },
  render() {
    return (
      <div className="dashboard">
        <div>
          <Nav activeKey={1} bsStyle="tabs" pullLeft={true}>
              <NavItem eventKey={1}>
            <Link to={'/settings'}>  
              Settings
            </Link>  
              </NavItem>
            <NavItem eventKey={2} onClick={this.logout}>
              Logout
            </NavItem>
          </Nav>  
        </div>
        <br></br>
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
