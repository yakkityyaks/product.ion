import React from 'react';
import { Link } from 'react-router';

const Settings = React.createClass({

  render() {
    return (
      <div className="settings">
        <div>
          <button className="plus-button">
             <Link to={`/dashboard/${this.props.organization.orgName.split(" ").join("")}`}>
               Back
             </Link>
           </button>
         </div>
         <div>
           <button className="plus-button">
             <Link to={`/addUser`}>
               Add a User to Organization
             </Link>
           </button>
         </div>
         <div>
           <form className="form" onSubmit={this.handleSubmit}>
             <div className="form__error-wrapper">
               <p className="form__error form__error--username-not-registered">This username does not exist.</p>
               <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
               <p className="form__error form__error--failed">Something went wrong, please try again!</p>
             </div>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="currentUsername">Current Username</label>
               <input className="form__field-input" type="text" id="numberOfAssets" placeholder="username" ref="projectName" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             </div>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="newUsername">New Username</label>
               <input className="form__field-input" type="text" id="numberOfAssets" placeholder="username" ref="projectName" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             </div>
           </form>
           <button className="plus-button">
             Submit Change
           </button>
         </div>
         <div>
           <form className="form" onSubmit={this.handleSubmit}>
             <div className="form__error-wrapper">
               <p className="form__error form__error--username-not-registered">This username does not exist.</p>
               <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
               <p className="form__error form__error--failed">Something went wrong, please try again!</p>
             </div>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="currentPassword">Current Password</label>
               <input className="form__field-input" type="text" id="numberOfAssets" placeholder="password" ref="projectName" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             </div>
             <div className="form__field-wrapper">
               <label className="form__field-label" htmlFor="newPassword">New Password</label>
               <input className="form__field-input" type="text" id="numberOfAssets" placeholder="password" ref="projectName" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             </div>
           </form>
           <button className="plus-button">
             Submit Change
           </button>
         </div>
      </div>
    );
  }
});

export default Settings;
