import React from 'react';
import { browserHistory, Link } from 'react-router';
import { push } from "react-router-redux";
import { Glyphicon, Nav, Navbar, NavItem, PageHeader } from 'react-bootstrap';

const NavBar = React.createClass({
  // componentWillMount() {
  //   var orgName = this.props.organization.orgName;
  //   this.props.getOrgProjects(orgName);
  // },

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
  //
  // selectCSV() {
  //   this.props.changeNavKey(3);
  // },

  selectMaster() {
    this.props.changeNavKey(3);
  },

  render() {
    const {
      orgName,
      user
    } = this.props.organization;
    return (
      <div>
        <Navbar bsStyle="inverse">

          <Navbar.Header>
            <Navbar.Brand>
              <Link to={`/dashboard/${orgName}`} className="nav-title">
                e$tymate
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem>
                <Link to={`/dashboard/${orgName}`} className="nav-item">
                  Dashboard
                </Link>
              </NavItem>

              <NavItem eventKey={1} onClick={this.selectDashboard}>
                <Link to={`/projects`} className="nav-item">
                  Projects
                </Link>
              </NavItem>
              
              <NavItem eventKey={3} onClick={this.selectMaster}>
              {
                this.props.organization.user.perm === 0 ?
                (<Link to={`/mastersheet`} className="nav-item">
                  Master
                </Link>) :
                <div></div>
              }
              </NavItem>

            </Nav>

            <Nav pullRight>
              <NavItem>
                <div className="nav-item">Hello, {user.name}!</div>
              </NavItem>

              <NavItem eventKey={2} onClick={this.selectSettings}>
                <Link to={`/settings`} className="nav-glyph">
                  <Glyphicon glyph="cog"/>
                </Link>
              </NavItem>

              <NavItem onClick={this.logout}>
                <Link to={`/`} className="nav-item">
                  Logout
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>

        </Navbar>
      </div>
    );
  }
});

export default NavBar;
