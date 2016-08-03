import React from 'react';
import { Link } from 'react-router';

const AddUser = React.createClass({
  // handleSubmit(event) {
  //   event.preventDefault();
  //   var user = this.refs.usernameInput.value,
  //       pass = this.refs.passwordInput.value,
  //       orgId = this.refs.orgInput.value,
  //       userClass = this.refs.userClassInput.value;
  //
  //   console.log("ADD USER: store is ", this.store);
  //   this.props.addNewUser(user, pass, orgId, userClass);
  // },
  //
  // handleChange (event) {
  //   this.setState({selectValue: e.target.value});
  // },

  // add on-change functions, dropdown for user class, logic that requires both forms filled out
  render() {
    return (
      <div>
        <h2 className="form-page__form-heading">Create a New User</h2>

        <form className="form" onSubmit={this.handleSubmit}>
           {/* <div className="form__error-wrapper">
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div> */}
           <br></br>
           <select>
             <option value="Admin">ADMIN</option>
             <option value="Producer">PRODUCER</option>
             <option value="User">USER</option>
           </select>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="username">Username</label>
             <br></br>
             <input className="form__field-input" type="text" id="username"
                    placeholder="Username" ref="usernameInput"
                    autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="password">Password</label>
             <br></br>
             <input className="form__field-input" id="password" type="password"
                    ref="passwordInput" placeholder="••••••••••"/>
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="password">Password</label>
             <br></br>
             <input className="form__field-input" id="password" type="password"
                    ref="passwordInput" placeholder="••••••••••"/>
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="orgId">Organization ID</label>
             <br></br>
             <input className="form__field-input" id="org-id" type="text"
                    ref="orgInput" placeholder="Organization ID"/>
           </div>
           <div className="form__submit-btn-wrapper">
               <button className="form__submit-btn" type="submit">Create New User</button>
           </div>
         </form>
       </div>
    );
  }
});

export default AddUser;
