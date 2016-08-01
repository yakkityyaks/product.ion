import React from 'react';
import { Link } from 'react-router';

// need to pass in children.. how?
// React Router
// React.cloneElement passes down props from Main to first child.
const Main = React.createClass({
  render() {

    return (
      <div>
        <div>
          <Link to="/register" className="btn btn--login btn--nav">Register</Link>
          <Link to="/login" className="btn btn--login btn--nav">Login</Link>
        </div>
        <div className="nav">
          <div className="nav__wrapper">
            <Link to="/" className="nav__logo-wrapper"><h1 className="nav__logo">Product.ion</h1></Link>
          </div>
        </div>

        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
});
// allows us to go into main application and import Main.js.
export default Main;
