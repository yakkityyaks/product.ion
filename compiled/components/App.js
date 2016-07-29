import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main.js';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  };
}

//does a bit of magic, not entirely clear on what this does yet
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

//adds all of the props and data from state to props
// adds all of the action creators to props as well.
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;