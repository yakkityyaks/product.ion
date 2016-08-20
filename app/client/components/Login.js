import React from 'react';
import { Link, browserHistory } from 'react-router';
import ApiCall from '../utils/serverCalls';

import { Button, Panel, FormGroup, FormControl, Form, ControlLabel, ButtonToolbar, Col } from 'react-bootstrap';

const Login = React.createClass({
  getInitialState() {
    return {username: "", password: "", renderStuff: true};
  },
  componentWillMount() {
    this.props.resetLoginMessage();
    let token = sessionStorage.getItem('jwtToken');
    console.log("TOKEN ", token);
    if(token && token !== '') {
      this.setState({renderStuff: false});
      this.props.refreshLogin(token);
    }
  },
  handleUserChange(e) {
    this.setState({username:e.target.value});
  },
  handlePassChange(e) {
    this.setState({password:e.target.value});
  },
  handleSubmit(event) {
    event.preventDefault();
    this.props.postLogin(this.state.username, this.state.password);
  },

  render() {
    return (
       <div id="loginPanel">
        {this.state.renderStuff && <Panel bsStyle="primary" header={<h2 bsClass="happy">Happy Budgeting!</h2>}>

         <Form className="" onSubmit={this.handleSubmit} onBlur={this.props.resetLoginMessage}>
           <Button bsStyle="default" bsSize="small" bsClass="createOrgButton">
             <Link to={`/register`}>
               Create Organization
             </Link>
           </Button>
           <FormGroup controlId="userInput">
             <ControlLabel id="loginLabel" htmlFor="username">Username</ControlLabel>
             <FormControl type="text" value={this.state.username} placeholder="Enter text"
                          onChange={this.handleUserChange} required/>
           </FormGroup>
           <FormGroup controlId="userInput">
             <ControlLabel id="loginLabel" htmlFor="password">Password</ControlLabel>
             <FormControl type="password" value={this.state.password} placeholder="•••••••••••"
                          onChange={this.handlePassChange} required/>
           </FormGroup>
           <div className="loginButton">
             <p id="loginMessage">{this.props.messages.login}</p>
           </div>
           <ButtonToolbar bsClass="loginButton">
            <Button type="submit" bsStyle="primary" bsSize="large" block>Login</Button>
          </ButtonToolbar>
         </Form>
        </Panel>}
      </div>
    );
  }
});

export default Login;
