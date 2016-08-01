import React from 'react';

const Login = React.createClass({
  validatePassword: function(pass) {

  },
  handleSubmit(event) {

  },

  render() {
    console.log("LOGIN PROPS ", this);
    return (
      <div>
        <h2 className="form-page__form-heading">Login</h2>
        <form className="form" onSubmit={console.log("loginClicked")}>
           <div className="form__error-wrapper">
             <p className="form__error form__error--username-not-registered">This username does not exist.</p>
             <p className="form__error form__error--wrong-password">Wrong password.</p>
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div>
           <div className="form__field-wrapper">
             <input className="form__field-input" type="text" id="email" value={this.props.email}
                    placeholder="E-Mail" onChange={console.log("Change!")}
                    autoCorrect="off" autoCapitalize="off" spellCheck="false" />
             <label className="form__field-label" htmlFor="username">E-Mail</label>
           </div>
           <div className="form__field-wrapper">
             <input className="form__field-input" id="password" type="password" value={this.props.password}
             placeholder="••••••••••" onChange={console.log("inputPasswordClicked")} />
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

// Login.propTypes = {
//     onSubmit: React.PropTypes.func.isRequired,
//     btnText: React.PropTypes.string.isRequired,
//     data: React.PropTypes.object.isRequired
// }
export default Login;
