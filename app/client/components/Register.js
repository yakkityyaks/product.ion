import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-router';
import { FormGroup } from 'react-router';
import { FormControl } from 'react-router';
import { ControlLabel } from 'react-router';
// was comment.
const Register = React.createClass({
  getInitialState: function() {
    return {
      org: null,
      usernameInput: null,            // fill me in tim
      passwordInput: null
    }
  },
  validatePassword: function() {
    var pass = this.refs.passwordInput.value;
    if (pass.length < 6) {
      console.log("Password must greater than 6 characters");
    } else {
      //trigger successful password view
    }
  },
  resetErrorMessages: function() {
    this.props.resetRegistrationMessages();
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var orgName = this.refs.orgNameInput.value,
        username = this.refs.usernameInput.value,
        password = this.refs.passwordInput.value;

    this.props.checkRegistration(orgName, username, password);
  },
  validationState: function() {
    //fill me in tim
  },
  handleOrgChange: function() {
    //fill me in tim
  },
  handleAdminChange: function() {
    //fill me in tim
  },
  handlePassChange: function() {
    //fill me in tim
  },
  submit: function() {

  },
  render() {
    return (
      <div>
        <h2>We're happy you want to do this</h2>
         <FormGroup validationState={this.validationState}>  
           <Button>
             <Link to={`/login`}>
               Login
             </Link>
           </Button>
           <ControlLabel>Organization</ControlLabel>
           <FormControl type="text" value={this.state.org} placeholder="Org Name" onChange={this.handleOrgChange}/>  
           <ControlLabel>Admin</ControlLabel>
           <FormControl type="text" value={this.state.usernameInput} placeholder="Admin Name" onChange={this.handleAdminChange}/>  
           <ControlLabel>Password></ControlLabel>
           <FormControl type="password" value={this.state.passwordInput} placeholder="••••••••••" onChange={this.handlePassChange}/>
           <Button onClick={this.submit}>Create</Button>
         </FormGroup>  
       </div>
    );
  }
});

export default Register;
