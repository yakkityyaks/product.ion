import React from 'react';
import { Link } from 'react-router';
import { findDOMNode } from 'react-dom';
import { Button, ControlLabel, Form, FormControl, FormGroup, Panel, Radio } from 'react-bootstrap';

const AddUser = React.createClass({

  validateUsername () {
    let regex = /^[a-z0-9]+$/i,
    name = findDOMNode(this.refs.usernameInput).value;
    if (named.length < 6 || !regex) {
      console.log("Password must be greater than 6 characters");
    }
  },

  randomPassword (length, username) {
    let chars = "abcdefghijklmnopqrstuvwxyz!@#$%^*_ABCDEFGHIJKLMNOP1234567890",
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

  setPerm (e) {
    this.setState({perm: e.target.value});
  },

  handleSubmit (event) {
    event.preventDefault();
    let username = findDOMNode(this.refs.usernameInput).value,
        password = findDOMNode(this.refs.passwordInput).value,
        orgs_id = this.props.organization.id,
        perm = this.state.perm;
    this.props.addNewUser(username, password, orgs_id, perm);
  },

  render() {
    const setRadio = ref => {this.input = ref;};
    return (
      <div>
        <FormGroup>
          <Radio inline id="userRadio" name="user-class" value={0}
                onClick={this.setPerm}>
            ADMIN
          </Radio>
            {' '}
          <Radio inline id="userRadio" name="user-class" value={1}
                onClick={this.setPerm}>
            Producer
          </Radio>
            {' '}
          <Radio inline id="userRadio" name="user-class" value={2} defaultChecked
                onClick={this.setPerm}>
            User
          </Radio>
            {' '}
        </FormGroup>
        <Form inline className="testFormCenter" onSubmit={this.handleSubmit}>
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
