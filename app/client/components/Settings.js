import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import NavBar from './NavBar';
import * as dom from 'react-dom';
import UserList from "./UserList";
import AddUser from './AddUser';
import { Form, FormGroup, FormControl, ControlLabel, Panel, Button, Modal } from 'react-bootstrap';

const Settings = React.createClass({
  testing (event) {
    event.preventDefault();
    console.log("SETTINGS USER ", this.props.organization.user.perm);
    console.log("SETTINGS USER ", this.props.organization.user.id);
    console.log("SETTINGS USER ", this.props.organization.user.name);
    console.log("PASS ", findDOMNode(this.refs.passwordInput).value);
    console.log("NEW PASS ", findDOMNode(this.refs.newPasswordInput).value);
  },
  // check this user's username and current password in server.
  // if good, update with new PW.
  // if bad, return error.
  // but how do i access this user's username/ID?

  handleSubmit (event) {
    event.preventDefault();
    let username = this.props.organization.user.name,
    perm = this.props.organization.user.perm,
    currentPassword = findDOMNode(this.refs.passwordInput).value,
    newPassword = findDOMNode(this.refs.newPasswordInput).value;

    this.props.changePassword(username, perm, currentPassword, newPassword);
  },

  switchModal () {
    console.log("MODALS!")
    this.props.changeSettingModal('addUser');
  },

  render() {
    const { orgName, user } = this.props.organization;
    const permName = { 0: "an Admin", 1: "a Producer", 2: "a User"};
    return (
      <div className="settings">
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <Panel>
          <h2>Welcome to your settings page, {user.name }!</h2>
          <h2>You are {permName[user.perm]} of { orgName }</h2>
          <div>
            <Button>
               <Link to={`/dashboard/${this.props.organization.orgName.split(" ").join("")}`}>
                 Back
               </Link>
             </Button>
           </div>
           <br></br>
           <div>
             <Button bsStyle="primary" bsSize="large" id="addUserButton" onClick={this.switchModal}>
               Add a User to Organization
             </Button>
           </div>

           <Modal show={this.props.modals.addUser} onHide={this.switchModal} >
             <Modal.Header closeButton>
               <Modal.Title>Add a User to Organization</Modal.Title>
             </Modal.Header>
            <Modal.Body>
                 <AddUser {...this.props} />
               </Modal.Body>
             <Modal.Footer>
               <Button onClick={this.switchModal}>Close</Button>
             </Modal.Footer>
           </Modal>

           <br></br>
           <div id="settingsWindow">
             <div id="settingsMain">
               <Form onSubmit={this.testing}>
                 <FormGroup>
                   <ControlLabel >Current Password</ControlLabel>
                   <FormControl type="password" placeholder="••••••••••"
                                ref="passwordInput" autoCorrect="off" autoCapitalize="off"
                                spellCheck="false" required />
                 </FormGroup>
                 <br></br>
                 <FormGroup>
                   <ControlLabel>New Password</ControlLabel>
                   <FormControl type="password" placeholder="••••••••••"
                                autoCorrect="off" autoCapitalize="off"
                                spellCheck="false" required />
                 </FormGroup>
                 <FormGroup>
                   <ControlLabel htmlFor="newPassword">Confirm New Password</ControlLabel>
                   <FormControl type="password" placeholder="••••••••••"
                                ref="newPasswordInput" autoCorrect="off"
                                autoCapitalize="off" spellCheck="false" required />
                 </FormGroup>
                 <div>
                   <Button>
                     Submit Change
                   </Button>
                  </div>
                </Form>
              </div>
             <div id="settingsOptional">
              {
                !user.perm && <UserList {...this.props }/>
              }
            </div>
          </div>
         </Panel>
      </div>
    );
  }
});

export default Settings;
