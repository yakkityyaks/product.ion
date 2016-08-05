import React from 'react';
import { Link } from 'react-router';
import  store  from '../store';
import { browserHistory } from 'react-router';

import { PageHeader } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';


const Login = React.createClass({
  

  componentWillMount() {
    if (this.props.organization.user) {
      var joinedName = this.props.organization.orgName.split(" ").join("");
      browserHistory.push(`/dashboard/${joinedName}`);
    }
  },
  handleSubmit(event) {
    event.preventDefault();
    var username = this.refs.usernameInput.value, password = this.refs.passwordInput.value;
    this.props.postLogin(username, password);
  },
  render() {
    return (
     <div className="center-block" id="loginPanel">
        <PageHeader id="loginHeader"><small>Login</small></PageHeader>
        <Panel>
         <form className="form" id="loginPanel" onSubmit={this.handleSubmit}>
           {/* <div className="form__error-wrapper">
             <p className="form__error form__error--username-not-registered">This username does not exist.</p>
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div> */}
           <Link to={`/register`}>
             <Button>
               Create Organization
             </Button>
           </Link>
           <br></br>
           <div className="form__field-wrapper">

             <label className="form__field-label" htmlFor="username">Username</label>
             <br></br>
             <input className="form__field-input" type="text" id="username"
                    placeholder="Username" ref="usernameInput"
                    onChange={this.props.resetLoginMessage} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="password">Password</label>
             <br></br>
             <input className="form__field-input" id="password" type="password"
                    ref="passwordInput" onChange={this.props.resetLoginMessage} placeholder="••••••••••"/>
              <p className="form__error form__error--wrong-password">Wrong password.</p>
           </div>
           <div className="form__submit-btn-wrapper">
               <Button type="submit">Login</Button>
               <p id="loginMessage" className="">{this.props.messages.login}</p>
           </div>
         </form>
        </Panel>
      </div>
    );
  }
});

export default Login;

// {/* <div className="form__error-wrapper">
//              <p className="form__error form__error--username-not-registered">This username does not exist.</p>
//              <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
//              <p className="form__error form__error--failed">Something went wrong, please try again!</p>
//            </div> */}
//            <Link to={`/register`}>
//              <Button>
//                Create Organization
//              </Button>
//            </Link>
//            <FormGroup controlId="loginPanel">
//              <ControlLabel>Username</ControlLabel>
//              <FormControl type="text" placeholder="Username" ref="user" onChange={this.props.resetLoginMessage}/>
//              <ControlLabel>Password</ControlLabel>
//              <FormControl type="text" ref="pass" placeholder="••••••••••"/>
//              <Button className="form__submit-btn" onClick={this.handleSubmit}>Login</Button>
//            </FormGroup>
