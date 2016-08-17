import React from 'react';
import { Link, browserHistory } from 'react-router';
import ApiCall from '../utils/serverCalls';

import { Button, Panel, FormGroup, FormControl, Form } from 'react-bootstrap';

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
    // if(!token || token === '') {
    //   return;
    // } else {
    //   this.setState({renderStuff: false});
    //   this.props.refreshLogin(token);
    // }
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
        {this.state.renderStuff && <Panel bsStyle="primary" header={<h3>Login</h3>}>
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
        </Panel>}
      </div>
    );
  }
});

export default Login;
