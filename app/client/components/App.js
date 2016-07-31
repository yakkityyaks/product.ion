import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// runs two functions: get store values in as props.
function mapStateToProps(state) {
  return {
    store: store.user.user,
    userFetched: store.user.fetched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default class App extends React.Component {
  componentWillMount() {
    // dispatch the action function.
    this.props.dispatch(actionCreators.fetchUser());
  }
  render() {
    console.log('this.props ', this.props);
    return null;
  }
}




















// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   };
// }
//
// function mapDispachToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// const App = connect(mapStateToProps, mapDispachToProps)(Main);
//
export default App;
