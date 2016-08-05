import React from 'react';
import { Link } from 'react-router';

// need to pass in children.. how?
// React Router
// React.cloneElement passes down props from Main to first child.
const Main = React.createClass({
  render() {

    return (
      <div>
        <nav className="nav">
          <div className="nav__wrapper">
            <Link to="/" className="nav__logo-wrapper"><h2 className="nav__logo">product.ion</h2></Link>
          </div>
        </nav>

        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
});
// allows us to go into main application and import Main.js.
export default Main;
