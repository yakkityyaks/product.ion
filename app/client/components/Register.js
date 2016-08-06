import React from 'react';
import { Link } from 'react-router';
<<<<<<< beb9821ce17abf0ae678f8d2bd966c513e880fd5
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
=======
import { Button, Panel, FormGroup, FormControl, Form } from 'react-bootstrap';

const Register = React.createClass({
  getInitialState() {
    return {org: "", admin: "", pass: "", pass2: ""};
  },
  resetErrorMessages() {
    this.props.resetRegistrationMessages();
  },
  handleOrgChange(e) {
    this.setState({org:e.target.value});
  },
  handleAdminChange(e) {
    this.setState({admin:e.target.value});
  },
  handlePassChange(e) {
    if (this.validatePass() === "warning") {
      this.props.registrationError(4, "Password must be longer than 6 characters");
>>>>>>> Re-factored register to use bootstrap modals. Implemented partial validation
    } else {
      console.log("ding ding ding");
      this.props.resetRegistrationMessages();
    }
    this.setState({pass:e.target.value});
  },
  validatePass() {
    const pass = this.state.pass;
    return pass.length < 6 ? "warning" : "success";
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var { org, admin, pass } = this.state;

    this.props.checkRegistration(org, admin, pass);
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
<<<<<<< beb9821ce17abf0ae678f8d2bd966c513e880fd5
      <div>
        <h2>We're happy you want to do this</h2>
         <FormGroup validationState={this.validationState}>  
=======
      <div id="loginPanel">
        <Panel bsStyle="primary" header={<h3>We're happy you want to do this</h3>}>
         <Form onSubmit={this.handleSubmit} onBlur={this.resetErrorMessages}>
>>>>>>> Re-factored register to use bootstrap modals. Implemented partial validation
           <Button>
             <Link to={`/login`}>
               Login
             </Link>
           </Button>
<<<<<<< beb9821ce17abf0ae678f8d2bd966c513e880fd5
           <ControlLabel>Organization</ControlLabel>
           <FormControl type="text" value={this.state.org} placeholder="Org Name" onChange={this.handleOrgChange}/>  
           <ControlLabel>Admin</ControlLabel>
           <FormControl type="text" value={this.state.usernameInput} placeholder="Admin Name" onChange={this.handleAdminChange}/>  
           <ControlLabel>Password></ControlLabel>
           <FormControl type="password" value={this.state.passwordInput} placeholder="••••••••••" onChange={this.handlePassChange}/>
           <Button onClick={this.submit}>Create</Button>
         </FormGroup>  
       </div>
=======
           <br></br>
           <div className="">
             <label className="" htmlFor="username">Organization</label>
             <FormControl type="text" value={this.state.org} placeholder="Name it something catchy"
                          onChange={this.handleOrgChange} required/>
             <p id="registerOrgMessage">{this.props.messages.registerOrg}</p>
           </div>
           <div className="">
             <label className="" htmlFor="username">Admin</label>
             <FormControl type="text" value={this.state.admin} placeholder="The Company Leader"
                          onChange={this.handleAdminChange} required/>
             <p id="registerUserMessage" className="">{this.props.messages.registerUser}</p>
           </div>
           <div className="">
             <label className="" htmlFor="password">Password</label>
             <FormGroup controlId="passwordControl" validationState = {this.validatePass()}>
               <FormControl type="password" value={this.state.pass} placeholder="••••••••••"
                            onChange={this.handlePassChange} required />
               <FormControl.Feedback />
               <p id="registerPaswordMessage" className="">{this.props.messages.registerPassword}</p>
               <FormControl type="password" value={this.state.pass2} placeholder="Re-enter Password"
                            onChange={this.handlePassChange} />
               <FormControl.Feedback />
             </FormGroup>
           </div>
           <div className="">
               <Button type="submit">CREATE</Button>
           </div>
         </Form>
      </Panel>
    </div>
>>>>>>> Re-factored register to use bootstrap modals. Implemented partial validation
    );
  }
});

export default Register;
