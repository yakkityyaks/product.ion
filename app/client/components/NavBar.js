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

  selectCSV() {
    this.props.changeNavKey(3);
  },

  render() {

    return (
      <div>
        <Navbar bsStyle="default">
          <Nav>
            <NavItem>
                <Link style={{"font-size":"20px","font-weight":"bold","color":"white"}} to="/">
                  Dashboard
                </Link>
            </NavItem>
            <NavItem eventKey={1} onClick={this.selectDashboard}>
                <Link style={{"font-size":"15px","color":"white"}} to={'/projects'}>
                  Projects
                </Link>
            </NavItem>
          </Nav>

          <Nav pullRight>
            <NavItem eventKey={2} onClick={this.selectSettings}>
                <Link style={{"font-size":"15px","color":"white"}} to={'/settings'}>
                  <Glyphicon glyph="cog"/>
                </Link>
            </NavItem>
            <NavItem onClick={this.logout}>
                <Link style={{"font-size":"15px","color":"white"}} to="/">Logout</Link>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
});

export default NavBar;
