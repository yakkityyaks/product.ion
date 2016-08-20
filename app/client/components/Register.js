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
    if (this.validatePass() === "warning") {
      this.props.registrationError(4, "Password must be longer than 6 characters");
    } else {
      this.props.resetRegistrationMessages();
    }
    this.setState({pass:e.target.value});
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
             <ControlLabel id="loginLabel" htmlFor="username">Organization</ControlLabel>
             <FormControl type="text" value={this.state.org} placeholder="name it something catchy"
                          onChange={this.handleChange} name="org" required/>
             <p id="registerOrgMessage">{this.props.messages.registerOrg}</p>
           </FormGroup>
           <FormGroup controlId="userInput">
             <ControlLabel id="loginLabel" htmlFor="username">Admin</ControlLabel>
             <FormControl type="text" value={this.state.admin} placeholder="the company leader"
                          onChange={this.handleChange} name="admin" required/>
             <p id="registerUserMessage" className="">{this.props.messages.registerUser}</p>
           </FormGroup>
           <div>
             <ControlLabel id="loginLabel" htmlFor="password">Password</ControlLabel>
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
