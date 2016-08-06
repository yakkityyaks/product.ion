import React from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import  store  from '../store';
import { browserHistory } from 'react-router';

import { PageHeader, Button, Panel, FormGroup, FormControl,
         ControlLabel, Form } from 'react-bootstrap';

const Login = React.createClass({
  getInitialState() {
    return {username: "", password: ""};
  },

  componentWillMount() {
    if (this.props.organization.user) {
      var joinedName = this.props.organization.orgName.split(" ").join("");
      browserHistory.push(`/dashboard/${joinedName}`);
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
     <div className="center-block" id="loginPanel">
        <PageHeader id="loginHeader"><small>Login</small></PageHeader>
        <Panel>
         <Form id="loginPanel" onSubmit={this.handleSubmit}>
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
             {
               this.props.messages.login && <p id="loginMessage" className="">{this.props.messages.login}</p>
             }
               <Button type="submit">Login</Button>
           </div>
         </Form>
        </Panel>
      </div>
    );
  }
});

export default Login;
