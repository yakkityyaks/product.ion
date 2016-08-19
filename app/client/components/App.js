import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    organization: state.organization,
    projects: state.projects,
    budgets: state.budgets,
    expenses: state.expenses,
    messages: state.messages,
    modals: state.modals,
    navBar: state.navBar,
    csv: state.parseCSV
  };
}

function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
