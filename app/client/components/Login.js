import React from 'react';
import { Link } from 'react-router';

const Login = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    var user = this.refs.usernameInput.value,
        pass = this.refs.passwordInput.value;
    console.log("Login: store is ", this.store);
    this.props.postLogin(user, pass);

  },
  render() {
    return (
      <div>
        <h2 className="form-page__form-heading">Login</h2>
        <Link to={`/dashboard`}>
          REGISTER TEST
        </Link>
        <form className="form" onSubmit={this.handleSubmit}>
           {/* <div className="form__error-wrapper">
             <p className="form__error form__error--username-not-registered">This username does not exist.</p>
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div> */}
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
               <button className="form__submit-btn" type="submit">LOGIN</button>
               <p id="loginMessage" className="">{this.props.messages.login}</p>
           </div>
         </form>
       </div>
    );
  }
});

export default Login;
