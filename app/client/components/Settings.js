import React from 'react';
import { Link } from 'react-router';
import NavBar from './NavBar';
import { Panel } from 'react-bootstrap';

import * as dom from 'react-dom';
import UserList from "./UserList";

const Settings = React.createClass({
  // submit new password to action, reducer, server, store,
  testing (event) {
    event.preventDefault();
    console.log("SETTINGS USER ", this.props.organization.user.perm);
    console.log("SETTINGS USER ", this.props.organization.user.id);
    console.log("SETTINGS USER ", this.props.organization.user.name);
    // {name: "timtim", perm: 0, id: 15}
    console.log("PASS ", this.refs.passwordInput.value);
    console.log("NEW PASS ", this.refs.newPasswordInput.value);
  },
  // check this user's username and current password in server.
  // if good, update with new PW.
  // if bad, return error.
  // but how do i access this user's username/ID?

  handleSubmit (event) {
    event.preventDefault();
    let username = this.props.organization.user.name;
    let perm = this.props.organization.user.perm;
    let currentPassword = this.refs.passwordInput.value;
    let newPassword = this.refs.newPasswordInput.value;

    // when encryption is complete, a token or session should be sent in addition.
    this.props.changePassword(username, perm, currentPassword, newPassword);
  },

  render() {
    const { orgName, user } = this.props.organization;
    const permName = {0: "an Admin", 1: "a Producer", 2: "a User"};
    return (
      <div className="settings">
      <Panel>
        <NavBar {...this.props}/>
      </Panel>
      <h2 className="">Welcome to your settings page {user.name}</h2>
      <h2 className="">You are {permName[user.perm]} of {orgName}</h2>
        <div>
          <button className="">
             <Link to={`/dashboard/${orgName.split(" ").join("")}`}>
               Back
             </Link>
           </button>
         </div>
         <br></br>
         <div>
           <button className="">
             <Link to={`/addUser`}>
               Add a User to Organization
             </Link>
           </button>
         </div>
         <br></br>
         <div id = "settingsWindow">
           <div id="settingsMain">
             <form className="form" onSubmit={this.testing}>
               {/* <div className="">
                 <p className="">This username does not exist.</p>
                 <p className="">Please fill out the entire form.</p>
                 <p className="">Something went wrong, please try again!</p>
               </div> */}

               <div className="">
                 <label className="" htmlFor="currentPassword">Current Password</label>
                 <input className="" type="password" placeholder="••••••••••"
                        ref="passwordInput" autoCorrect="off" autoCapitalize="off" s
                        pellCheck="false" required />
               </div>
               <br></br>
               <div className="">
                 <label className="" htmlFor="newPassword">New Password</label>
                 <input className="" type="password" placeholder="••••••••••"
                        ref="newPasswordInput" autoCorrect="off" autoCapitalize="off"
                        spellCheck="false" required />
               </div>
               <div className="">
                 <label className="" htmlFor="newPassword">Confirm New Password</label>
                 <input className="" type="password" placeholder="••••••••••"
                        ref="newPasswordInput" autoCorrect="off" autoCapitalize="off"
                        spellCheck="false" required />
               </div>
               <div>
                 <button className="">
                   Submit Change
                 </button>
                </div>
             </form>
           </div>
           <div id="settingsOptional">
             {
               user.perm === 0 && <UserList {...this.props}/>
             }
           </div>
         </div>


      </div>
    );
  }
});

export default Settings;
