import React from 'react';
import {
  Link
} from 'react-router';
import {
  FormGroup,
  FormControl,
  Form,
  ControlLabel
} from 'react-bootstrap';

const Register = React.createClass({
  getInitialState() {
    return {
      org: "",
      admin: "",
      pass: "",
      pass2: ""
    };
  },
  resetErrorMessages() {
    this.props.resetRegistrationMessages();
  },
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  },
  handlePassChange(e) {
    console.log(e.target);
    if (this.validatePass() === "warning") {
      this.props.registrationError(4, "Password must be longer than 6 characters");
    } else {
      this.props.resetRegistrationMessages();
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  },
  validatePass() {
    const pass = this.state.pass;

    return this.state.pass.length < 6 ? "warning" : "success";
  },
  handleSubmit: function(event) {
    event.preventDefault();
    var {
      org,
      admin,
      pass
    } = this.state;

    this.props.checkRegistration(org, admin, pass);
  },
  render() {
    return (
      <div id="app">
        <div className="registerForm">
           <form onSubmit={this.handleSubmit} onBlur={this.resetErrorMessages}>
           <h1 className="estymate-register">e$tymate</h1>
             <FormGroup>
               <ControlLabel className="userLabel">Organization</ControlLabel>
               <FormControl className="formInput" type="text" value={this.state.org} placeholder="name it something catchy"
                            onChange={this.handleChange} name="org" required/>
               <p id="registerOrgMessage">{this.props.messages.registerOrg}</p>
             </FormGroup>
             <FormGroup>
               <ControlLabel className="userLabel">Admin</ControlLabel>
               <FormControl className="formInput" type="text" value={this.state.admin} placeholder="the company leader"
                            onChange={this.handleChange} name="admin" required/>
               <p id="registerUserMessage" className="">{this.props.messages.registerUser}</p>
             </FormGroup>
             <FormGroup>
               <ControlLabel className="userLabel">Password</ControlLabel>
               <FormGroup validationState = {this.validatePass()}>
                 <FormControl className="formInput" type="password" value={this.state.pass} placeholder="••••••••••"
                              onChange={this.handlePassChange} required
                              name="pass"/>
                 <FormControl.Feedback />
                 <p id="registerPasswordMessage">{this.props.messages.registerPassword}</p>
                 <FormControl className="formInput" type="password" value={this.state.pass2} placeholder="Re-enter Password"
                              onChange={this.handlePassChange} name="pass2"/>
                 <FormControl.Feedback />
               </FormGroup>
             </FormGroup>

             <div>
                <button className="button" type="submit">Create</button>
             </div>

             <div className="switchViewLink">
               <Link to={`/login`}>
                 Already have an account? <strong>Login</strong>
               </Link>
             </div>
           </form>
        </div>
      </div>
    );
  }
});

export default Register;
