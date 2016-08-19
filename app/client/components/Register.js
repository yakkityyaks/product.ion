import React from 'react';
import { Link } from 'react-router';
import { Button, Panel, FormGroup, FormControl, Form } from 'react-bootstrap';

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
        <Panel bsStyle="primary" header={<h3>We're happy you want to do this</h3>}>
         <Form onSubmit={this.handleSubmit} onBlur={this.resetErrorMessages}>
           <Link to={`/login`}>
             <Button>
               Login
             </Button>
           </Link>
           <br></br>
           <div>
             <label className="" htmlFor="username">Organization</label>
             <FormControl type="text" value={this.state.org} placeholder="Name it something catchy"
                          onChange={this.handleChange} name="org" required/>
             <p id="registerOrgMessage">{this.props.messages.registerOrg}</p>
           </div>
           <div>
             <label className="" htmlFor="username">Admin</label>
             <FormControl type="text" value={this.state.admin} placeholder="The Company Leader"
                          onChange={this.handleChange} name="admin" required/>
             <p id="registerUserMessage" className="">{this.props.messages.registerUser}</p>
           </div>
           <div>
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
               <Button type="submit">Create</Button>
           </div>
         </Form>
      </Panel>
    </div>
    );
  }
});

export default Register;
