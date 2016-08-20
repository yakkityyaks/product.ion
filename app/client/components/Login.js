import React from 'react';
import { Link, browserHistory } from 'react-router';
import ApiCall from '../utils/serverCalls';

import { Button, Panel, FormGroup, FormControl, Form, ControlLabel, ButtonToolbar } from 'react-bootstrap';

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
        {this.state.renderStuff && <Panel bsStyle="primary" header={<h3>Happy Budgeting!</h3>}>

         <Form id="loginForm" onSubmit={this.handleSubmit} onBlur={this.props.resetLoginMessage}>
           <Link to={`/register`}>
             <Button className="createOrgButton">
               Create Organization
             </Button>
           </Link>
           <div className="">
             <ControlLabel id="userLabel" htmlFor="username">Username</ControlLabel>
             <FormControl type="text" value={this.state.username} placeholder="Enter text"
                          onChange={this.handleUserChange} required/>
           </div>
           <div className="">
             <ControlLabel id="userLabel" htmlFor="password">Password</ControlLabel>
             <FormControl type="password" value={this.state.password} placeholder="••••••••••"
                          onChange={this.handlePassChange} required/>
           </div>
           <div className="loginButton">
             <p id="loginMessage">{this.props.messages.login}</p>
           </div>
           <ButtonToolbar id="loginButton">
            <Button type="submit" bsStyle="primary" bsSize="large">Login</Button>
          </ButtonToolbar>
         </Form>
        </Panel>}
      </div>
    );
  }
});

export default Login;
