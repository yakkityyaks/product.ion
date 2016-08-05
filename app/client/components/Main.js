import React from 'react';
import { Link } from 'react-router';
import { PageHeader } from 'react-bootstrap';


// need to pass in children.. how?
// React Router
// React.cloneElement passes down props from Main to first child.
const Main = React.createClass({
  render() {

    return (
      <div>
        <Link to="/" className="nav__logo-wrapper">
          <PageHeader id="title">product.ion</PageHeader>
        </Link>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    );
  }
});
// allows us to go into main application and import Main.js.
export default Main;
