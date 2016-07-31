import React from 'react';
import { History } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { changeForm } from '../actions/actionCreators';
import Main from './Main';
const assign = Object.assign || require('object.assign');

function mapStateToProps(state) {
  console.log('LOGIN state ', state);
  return {
    user: state.email,
    password: state.password,
    isLogginIn: false,
    isLoggedIn: false,
    error: null,
  };
}

function mapDispatchToProps(dispatch) {
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
      <form className="form" onSubmit={this.onSubmit.bind(this)}>
         <div className="form__error-wrapper">
           <p className="form__error form__error--username-taken">Sorry, but this username is already taken.</p>
           <p className="form__error form__error--username-not-registered">This username does not exist.</p>
           <p className="form__error form__error--wrong-password">Wrong password.</p>
           <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
           <p className="form__error form__error--failed">Something went wrong, please try again!</p>
         </div>
         <div className="form__field-wrapper">
           <input className="form__field-input" type="text" id="username" value={this.props.data.email} placeholder="E-Mail" onChange={this.changeUsername.bind(this)} autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           <label className="form__field-label" htmlFor="username">Username</label>
         </div>
         <div className="form__field-wrapper">
           <input className="form__field-input" id="password" type="password" value={this.props.data.password}
           placeholder="••••••••••" onChange={this.changePassword.bind(this)} />
           <label className="form__field-label" htmlFor="password">Password</label>
         </div>
         <div className="form__submit-btn-wrapper">
             <button className="form__submit-btn" type="submit">LOGIN</button>
         </div>
       </form>
       </div>
    );
  },

  // Change the username in the app state
  changeUsername(evt) {
    var newState = this.mergeWithCurrentState({
      username: evt.target.value
    });

    this.emitChange(newState);
  },

  // Change the password in the app state
  changePassword(evt) {
    var newState = this.mergeWithCurrentState({
      password: evt.target.value
    });

    this.emitChange(newState);
  },

  // Merges the current state with a change
  mergeWithCurrentState(change) {
    return assign(this.props.data, change);
  },

  // Emits a change of the form state to the application state
  emitChange(newState) {
    this.props.dispatch(changeForm(newState));
  },

  // onSubmit call the passed onSubmit function
  onSubmit(evt) {
    evt.preventDefault();
    this.props.action.onSubmit(this.props.data.email, this.props.data.password);
  },

});

// Login.propTypes = {
//     onSubmit: React.PropTypes.func.isRequired,
//     btnText: React.PropTypes.string.isRequired,
//     data: React.PropTypes.object.isRequired
// }
export default Login;
export default connect(mapStateToProps, mapDispatchToProps)(Login);
