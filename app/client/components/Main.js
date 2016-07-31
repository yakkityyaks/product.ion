import React from 'react';
import { History } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { Link } from 'react-router';

// need to pass in children.. how?
// React Router
// React.cloneElement passes down props from Main to first child.

function mapStateToProps(state) {
  console.log('MAIN state ', state);
  return {
    email: state.email,
    password: state.password,
  };
}

function mapDispatchToProps(dispatch) {
  console.log('dispatch ', dispatch)
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

const Main = React.createClass({
  render() {
console.log("MAIN props ", this.props);
    return (
      <div>
        <div>
          <Link to="/register" className="btn btn--login btn--nav">Create Organization</Link>
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

export default Main;

function select(state) {
  console.log("selected state : ", state);
  return {
    data: state
  };
}


// allows us to go into main application and import Main.js.
export default connect(select)(Main);
