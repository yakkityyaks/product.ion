import React { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Login = React.createClass({
  render() {
    const navButtons = this.props.loggedIn ? (
      <div>
        <Link to="/" className="btn btn--dash btn--nav">Dashboard</Link>
        {this.props.currentlySending ? (
          <LoadingButton className="btn--nav" />
      ) : (
        <a href="#" className="btn btn--login btn--nav">Logout</a>
      )}
      </div>

    ) : (

      <div>
        <Link to="/create" className="btn btn--login btn--nav">Create Organization</Link>
        <Link to="/login" className="btn btn--login btn--nav">Login</Link>
      </div>
    );

    return(
      <div className="nav">
        <div className="nav__wrapper">
          <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">Product.ion</h1></Link>
          { navButtons }
        </div>
      </div>
    );
  }
});

export default Login;
