import React from 'react';
import {
  Link,
  browserHistory
} from 'react-router';
import ApiCall from '../utils/serverCalls';

const Login = React.createClass({
  getInitialState() {
    return {
      username: "",
      password: "",
      renderStuff: true
    };
  },
  componentWillMount() {
    this.props.resetLoginMessage();
    let token = sessionStorage.getItem('jwtToken');

    // console.log("TOKEN ", token);
    if (token && token !== '') {
      this.setState({renderStuff: false});
      this.props.refreshLogin(token);
    }
  },
  handleUserChange(e) {
    this.setState({
      username: e.target.value
    });
  },
  handlePassChange(e) {
    this.setState({
      password: e.target.value
    });
  },
  handleSubmit(e) {
    e.preventDefault();
    this.props.postLogin(this.state.username, this.state.password);
  },

  render() {
    return (
      <div id="app">

      <div className="loginForm">
      {this.state.renderStuff &&
       <form onSubmit={this.handleSubmit} onBlur={this.props.resetLoginMessage}>
       <h1 className="estimate-login">e$timate</h1>
         <div>
           <label className="userLabel">Username</label>
           <input className="formInput" type="text" value={this.state.username} placeholder="Enter text"
           onChange={this.handleUserChange} required/>
         </div>

         <div>
           <label className="userLabel">Password</label>
           <input className="formInput" type="password" value={this.state.password} placeholder="•••••••••••"
           onChange={this.handlePassChange} required/>
         </div>

         <div>
           <p id="loginMessage">{this.props.messages.login}</p>
         </div>
         <div>
            <button className="button" type="submit">Login</button>
         </div>
         <div className="switchViewLink">
           <Link to={`/register`}>
             <p>Don't have an account?<strong> Sign Up</strong></p>
           </Link>
         </div>
       </form>}
      </div>
      </div>
    );
  }
});

export default Login;
