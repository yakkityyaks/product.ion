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

  // handleSelect(eventKey) {
  //   event.preventDefault();
  // },//deprecated or unneeded.

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
        <Navbar bsStyle="inverse">
          <Nav>
            <NavItem className="navItem">
                <Link style={{"fontSize":"20px","fontWeight":"bold","color":"white"}} to="/">
                  Dashboard
                </Link>
            </NavItem>
            <NavItem eventKey={1} onClick={this.selectDashboard}>
                <Link style={{"fontSize":"15px","color":"white"}} to={'/projects'}>
                  Projects
                </Link>
            </NavItem>
            {//only loads if the user is an admin
              this.props.organization.user.perm === 0 ?
              <NavItem eventKey={2}>
                <Link style={{"fontSize":"15px","color":"white"}} to={'/mastersheet'}>
                  Master Sheet
                </Link>
              </NavItem>
            : <div />
            }
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={2} onClick={this.selectSettings}>
                <Link style={{"fontSize":"15px","color":"white"}} to={'/settings'}>
                  <Glyphicon glyph="cog"/>
                </Link>
            </NavItem>
            <NavItem onClick={this.logout}>
                <Link style={{"fontSize":"15px","color":"white"}} to="/">Logout</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

export default NavBar;
