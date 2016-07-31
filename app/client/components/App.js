import { bindActionCreators } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

// runs two functions: get store values in as props.
function mapStateToProps(state) {
  console.log('app state ', state);
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

export default class App extends React.Component {
  // componentWillMount() {
  //   // dispatch the action function.
  //   this.props.dispatch(fetchUser());
  // }
  render() {

    console.log('this.props ', this.props);
    return ( <h1>product.ion</h1> );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);



















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
// export default App;
