import React from 'react';
import { Link } from 'react-router';
import { Button, ButtonToolbar, Panel, FormGroup, FormControl, Form, ControlLabel } from 'react-bootstrap';

const Register = React.createClass({
  getInitialState() {
    return {org: "", admin: "", pass: "", pass2: ""};
  },
  resetErrorMessages() {
    this.props.resetRegistrationMessages();
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  },
  handlePassChange(e) {
    console.log(e.target);
    if (this.validatePass() === "warning") {
      this.props.registrationError(4, "Password must be longer than 6 characters");
    } else {
      this.props.resetRegistrationMessages();
    }
    this.setState({[e.target.name]:e.target.value});
  },
  validatePass() {
    const pass = this.state.pass;

    return this.state.pass.length < 6 ? "warning" : "success";
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var { org, admin, pass } = this.state;

    this.props.checkRegistration(org, admin, pass);
  },
  render() {
    return (
      <div id="loginPanel">
        <Panel bsStyle="primary" header={<h2>We're happy you want to do this</h2>}>
         <Form onSubmit={this.handleSubmit} onBlur={this.resetErrorMessages}>
           <Link to={`/login`}>
             <Button bsSize="small" bsClass="createOrgButton">
               Login
             </Button>
           </Link>
           <br></br>
           <FormGroup controlId="userInput">
             <ControlLabel id="loginLabel">Organization</ControlLabel>
             <FormControl type="text" value={this.state.org} placeholder="name it something catchy"
                          onChange={this.handleChange} name="org" required/>
             <p id="registerOrgMessage">{this.props.messages.registerOrg}</p>
           </FormGroup>
           <FormGroup controlId="userInput">
             <ControlLabel id="loginLabel">Admin</ControlLabel>
             <FormControl type="text" value={this.state.admin} placeholder="the company leader"
                          onChange={this.handleChange} name="admin" required/>
             <p id="registerUserMessage" className="">{this.props.messages.registerUser}</p>
           </FormGroup>
           <div>
             <ControlLabel id="loginLabel">Password</ControlLabel>
             <FormGroup controlId="passwordControl" validationState = {this.validatePass()}>
               <FormControl type="password" value={this.state.pass} placeholder="••••••••••"
                            onChange={this.handlePassChange} required
                            name="pass"/>
               <FormControl.Feedback />
               <p id="registerPaswordMessage">{this.props.messages.registerPassword}</p>
               <FormControl type="password" value={this.state.pass2} placeholder="Re-enter Password"
                            onChange={this.handlePassChange} name="pass2"/>
               <FormControl.Feedback />
             </FormGroup>
           </div>
           <ButtonToolbar bsClass="loginButton">
               <Button type="submit" bsStyle="primary" bsSize="large" block>Create</Button>
           </ButtonToolbar>
         </Form>
      </Panel>
    </div>
    );
  }
});

export default Register;
