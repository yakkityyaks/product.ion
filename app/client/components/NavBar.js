import React from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

import { browserHistory } from 'react-router';
import { push } from "react-router-redux";

// need to pass in children.. how?
// React Router
// React.cloneElement passes down props from Main to first child.
const NavBar = React.createClass({
  componentWillMount() {
    var orgName = this.props.organization.orgName;
    this.props.getOrgProjects(orgName);
  },
  logout() {
    this.props.logout();
    this.props.clearExp();
    this.props.clearProj();
    browserHistory.push('/');
  },
  handleSelect(eventKey) {
    event.preventDefault();
  },
  selectDashboard() {
    this.props.changeNavKey(1);
  },
  selectSettings() {
    this.props.changeNavKey(2);
  },
  selectCSV() {
    this.props.changeNavKey(3);
  },
  render() {

    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <a>product.ion</a>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={this.selectDashboard}>
              <Link to={`/dashboard/${this.props.organization.orgName.split(" ").join("")}`}>
                Projects
              </Link>
            </NavItem>
            <NavItem eventKey={2} onClick={this.selectSettings}>
              <Link to={'/settings'}>
                Settings
              </Link>
            </NavItem>
            <NavItem eventKey={3} onClick={this.selectBudget}>
              <Link to={'/csvdrop'}>
                CSV
              </Link>
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} onClick={this.logout}>
              Logout
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

export default NavBar;
