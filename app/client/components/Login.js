import React from 'react';
import { History } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  console.log('LOGIN state ', state);
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  console.log('dispatch ', dispatch)
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}
const Login = React.createClass({

  render() {
    console.log("LOGIN PROPS ", this.props);
    return (
      <div>
      <h2 className="form-page__form-heading">Login</h2>
      <form className="form">
         <div className="form__error-wrapper">
           <p className="form__error form__error--username-taken">Sorry, but this username is already taken.</p>
           <p className="form__error form__error--username-not-registered">This username does not exist.</p>
           <p className="form__error form__error--wrong-password">Wrong password.</p>
           <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
           <p className="form__error form__error--failed">Something went wrong, please try again!</p>
         </div>
         <div className="form__field-wrapper">
           <input className="form__field-input" type="text" id="username" placeholder="Username"
           autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           <label className="form__field-label" htmlFor="username">Username</label>
         </div>
         <div className="form__field-wrapper">
           <input className="form__field-input" id="password" type="password"
           placeholder="••••••••••" />
           <label className="form__field-label" htmlFor="password">Password</label>
         </div>
         <div className="form__submit-btn-wrapper">
             <button className="form__submit-btn" type="submit">LOGIN</button>
         </div>
       </form>
       </div>
    );
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
