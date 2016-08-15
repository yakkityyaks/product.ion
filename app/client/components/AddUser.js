import React from 'react';
import { Link } from 'react-router';
import { findDOMNode } from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup, PageHeader, Panel, Radio } from 'react-bootstrap';

const AddUser = React.createClass({

  validateUsername () {
    let regex = /^[a-z0-9]+$/i,
    name = findDOMNode(this.refs.usernameInput).value;
    if (named.length < 6 || !regex) {
      console.log("Password must be greater than 6 characters");
    }
  },

  randomPassword (length, username) {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>_ABCDEFGHIJKLMNOP1234567890",
    pass = "";
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
    let username = findDOMNode(this.refs.usernameInput).value;
    findDOMNode(this.refs.passwordInput).value = this.randomPassword(3, username);
  },

  handleSubmit (event) {
    event.preventDefault();
    let username = findDOMNode(this.refs.usernameInput).value,
    password = findDOMNode(this.refs.passwordInput).value,
    perm = document.querySelector('input[name="user-class"]:checked').value;
    this.props.addNewUser(username, password, perm);
  },

  render() {
    return (
      <div>
        <PageHeader id="loginHeader"><small>add a new user</small></PageHeader>
        <div>
          <Radio id="userRadio" name="user-class" ref="admin" value="0" />
          <ControlLabel> ADMIN</ControlLabel>

          <Radio id="userRadio" name="user-class" ref="producer" value="1" />
          <ControlLabel> PRODUCER</ControlLabel>

          <Radio id="userRadio" name="user-class" ref="user" value="2" />
          <ControlLabel> USER</ControlLabel>
        </div>
        <br></br>
        <Form inline className="testFormCenter" onSubmit={this.handleSubmit}>
           <br></br>
           <div>
             <ControlLabel>Username</ControlLabel>
             <br></br>
             <FormControl type="text" id="username" placeholder="Enter Username" ref="usernameInput"
             autoCorrect="off" autoCapitalize="off" spellCheck="false" onBlur={this.generate} required/>
           </div>
           <div>
             <ControlLabel>Password Generator</ControlLabel>
             <br></br>
             <FormControl id="password" type="text"
                ref="passwordInput" placeholder="Temporary Password Will Be Generated"/>
           </div>
           <div>
             <Button type="submit"> CREATE USER</Button>
           </div>
         </Form>
       </div>
    );
  }
});
export default AddUser;
