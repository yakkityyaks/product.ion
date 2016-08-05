import React from 'react';
import { Link } from 'react-router';

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
    changePassword(username, perm, currentPassword, newPassword);
  },


  render() {
    return (
      <div className="settings">
      <h2 className="form-page__form-heading">Change Your Password</h2>
        <div>
          <button className="form__submit-btn">
             <Link to={`/dashboard/${this.props.organization.orgName.split(" ").join("")}`}>
               Back
             </Link>
           </button>
         </div>
         <br></br>
         <div>
           <button className="form__submit-btn">
             <Link to={`/addUser`}>
               Add a User to Organization
             </Link>
           </button>
         </div>
         <br></br>
         <div>
           <p className="orgName">{this.props.organization.orgName}</p>
         </div>
         <div>
           <form className="form" onSubmit={this.testing}>
             <div className="form__error-wrapper">
               <p className="form__error form__error--username-not-registered">This username does not exist.</p>
               <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
               <p className="form__error form__error--failed">Something went wrong, please try again!</p>
             </div>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="currentPassword">Current Password</label>
               <input className="form__field-input" type="password" placeholder="••••••••••" ref="passwordInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" required />
             </div>
             <br></br>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="newPassword">New Password</label>
               <input className="form__field-input" type="password" placeholder="••••••••••" ref="newPasswordInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" required />
             </div>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="newPassword">Confirm New Password</label>
               <input className="form__field-input" type="password" placeholder="••••••••••" ref="newPasswordInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" required />
             </div>
             <div>
               <button className="form__submit-btn">
                 Submit Change
               </button>
              </div>
           </form>
         </div>
      </div>
    );
  }
});

export default Settings;
