import React from 'react';
import { browserHistory, Link } from 'react-router';
import { push } from "react-router-redux";
import { Nav, Navbar, NavItem, PageHeader } from 'react-bootstrap';

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
              <Link to={'/projects'}>
                Projects
              </Link>
            </NavItem>
          </Nav>
          
          <Nav pullRight>
            <NavItem eventKey={2} onClick={this.selectSettings}>
              <Link to={'/settings'}>
                Settings
              </Link>
            </NavItem>
            <NavItem onClick={this.logout}>
              Logout
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

export default NavBar;
