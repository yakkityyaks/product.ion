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
  validateUsername: function() {
    var name = this.refs.usernameInput.value;
    if (named.length < 6) {
      console.log("Password must greater than 6 characters");
    } else {
      //trigger successful user view
    }
  },
  randomPassword (length, username) {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    let pass = "";
    if(username.length >= 6) {

      for (var x = 0; x < length; x++) {
        var i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
      }
      return username + pass;
    } else {
      return "";
    }
  },

  generate (event) {
    event.preventDefault();
    console.log(this.refs.passwordInput.value);
    this.refs.passwordInput.value = this.randomPassword(3, this.refs.usernameInput.value);
  },

  render() {
    return (
      <div>
        <h2 className="form-page__form-heading">Create a New Account</h2>
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
                    placeholder="Enter Username" ref="usernameInput"
                    autoCorrect="off" autoCapitalize="off" spellCheck="false"
                    minCharacters={6} validate={this.validateUsername} errorMessage="Name is invalid"
                    emptyMessage="Name is required" onBlur={this.generate} />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="password">Password</label>
             <br></br>
             <input className="form__field-input" id="password" type="text"
                ref="passwordInput" placeholder="Temporary Password Will Be Generated"/>
           </div>

           <div className="form__submit-btn-wrapper">
               <button className="form__submit-btn" type="submit">CREATE</button>
           </div>
         </form>
       </div>
    );
  }
});

export default AddUser;
