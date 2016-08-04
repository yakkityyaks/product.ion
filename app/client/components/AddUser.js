import React from 'react';
import { Link } from 'react-router';

const AddUser = React.createClass({

  // getInitialState () {
  //   return { showTitle: false };
  // },
  //
  // onClick () {
  //     this.setState({ showTitle: true });
  // },

  validateUsername () {
    let regex = /^[a-z0-9]+$/i;
    let name = this.refs.usernameInput.value;
    if (named.length < 6 || !regex) {
      console.log("Password must be greater than 6 characters");
    } else {
      //trigger successful user view
    }
  },

  randomPassword (length, username) {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    let pass = "";
    if(username.length >= 6) {
      for (let x = 0; x < length; x++) {
        let i = Math.floor(Math.random() * chars.length);
        pass += chars.charAt(i);
      }
      return username + pass;
    } else {
      return "";
    }
  },

  generate (event) {
    event.preventDefault();
    this.refs.passwordInput.value = this.randomPassword(3, this.refs.usernameInput.value);
  },

  handleSubmit (event) {
    let username = this.refs.usernameInput.value;
    let password = this.refs.passwordInput.value;
    let perm = document.querySelector('input[name="user-class"]:checked').value;
    let orgId = this.props.organization.orgs_id;

    this.props.addNewUser(username, password, perm);
  },

  render() {
    return (
      <div className="radio-div">
        <h2 className="form-page__form-heading">select a user type</h2>
        <ul className="form__radio">
          <li>
          <input type="radio" id="select-admin" name="user-class" ref="admin" value="0" />
            <label htmlFor="select-admin"> ADMIN</label>
            <div className="check"></div>
          </li>
          <li>
          <input type="radio" id="select-producer" name="user-class" ref="producer" value="1" />
            <label htmlFor="select-producer"> PRODUCER</label>
            <div className="check"></div>
          </li>
          <li>
          <input type="radio" id="select-user" name="user-class" ref="user" value="2" />
            <label htmlFor="select-user"> USER</label>
            <div className="check"></div>
          </li>
        </ul>
        <br></br>
        <form className="form" onSubmit={this.handleSubmit}>
           {/* <div className="form__error-wrapper">
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div> */}
           <br></br>

           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="username">Username</label>
             <br></br>
             <input className="form__field-input" type="text" id="username"
                    placeholder="Enter Username" ref="usernameInput"
                    autoCorrect="off" autoCapitalize="off" spellCheck="false"
                    onBlur={this.generate} required/>
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="password">Password Generator</label>
             <br></br>
             <input className="form__field-input" id="password" type="text"
                ref="passwordInput" placeholder="Temporary Password Will Be Generated"/>
           </div>

           <div className="form__submit-btn-wrapper">
               <button className="form__submit-btn" type="submit">CREATE USER</button>
           </div>
         </form>
       </div>
    );
  }
});
export default AddUser;
