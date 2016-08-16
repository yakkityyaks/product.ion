import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link, browserHistory } from 'react-router';
import ApiCall from '../utils/serverCalls';

import { Button, Panel, FormGroup, FormControl, Form } from 'react-bootstrap';

const Login = React.createClass({
  getInitialState() {
    return {username: "", password: ""};
  },
  // componentWillMount() {
  //   this.props.resetLoginMessage();
  //   if (this.props.organization.user) {
  //     var joinedName = this.props.organization.orgName.split(" ").join("");
  //     browserHistory.push(`/dashboard/${joinedName}`);
  //   }
  // },
  componentWillMount() {
    this.props.resetLoginMessage();
      //get token from local sessionStorage, send it to server
          // the server decrypts and gets username from token
          // with a username, the server can get all user info from the database
          // server sends back username and password
          // this.props.postLogin(username, password);
    let token = sessionStorage.getItem('jwtToken');
    console.log("TOKEN ", token);
    if(!token || token === '') {
      return;
    } else {
      this.props.refreshLogin(token);
    }
  },
  handleUserChange(e) {
    this.setState({username:e.target.value});
    // this.props.resetLoginMessage();
  },
  handlePassChange(e) {
    this.setState({password:e.target.value});
    // this.props.resetLoginMessage();
  },
  handleSubmit(event) {
    event.preventDefault();
    this.props.postLogin(this.state.username, this.state.password);
  },

  render() {
    return (
     <div id="loginPanel">
        <Panel bsStyle="primary" header={<h3>Login</h3>}>
         <Form onSubmit={this.handleSubmit} onBlur={this.props.resetLoginMessage}>
           <Link to={`/register`}>
             <Button>
               Create Organization
             </Button>
           </Link>
           <br />
           <div className="">
             <label className="" htmlFor="username">Username</label>
             <br></br>
             <FormControl type="text" value={this.state.username} placeholder="Enter text"
                          onChange={this.handleUserChange} required/>
           </div>
           <div className="">
             <label className="" htmlFor="password">Password</label>
             <br/>
             <FormControl type="password" value={this.state.password} placeholder="••••••••••"
                          onChange={this.handlePassChange} required/>
           </div>
           <div className="">
               <p id="loginMessage">{this.props.messages.login}</p>
               <Button type="submit">Login</Button>
           </div>
         </Form>
        </Panel>
      </div>
    );
  }
});

export default Login;
