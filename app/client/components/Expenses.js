import React from 'react';
import { Link } from 'react-router';
import { Button, ControlId, Form, FormControl, FormGroup, Modal, Panel, Table } from 'react-bootstrap';
import CSVDrop from './CSVDrop';
import ExpenseChart from './ExpenseChart';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';

const Expenses = React.createClass({
  getInitialState: function() {
    return {
      open: false,
      expenses: this.props.expenses.expenses,
      projId: this.props.expenses.projId,
      count: 0,
      addedExpenses: [0],
      newExpenses: [],
      modal: false,
      newView: false
    };
  },

  componentWillReceiveProps: function(newProps){
    console.log('in the expense recieve props', newProps.expenses)
    this.setState({newView: true})
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('in the should update ', nextProps, nextState)
    return nextState.newView;
  },

  handleNewExpense: function(singleExpense){
    singleExpense.projs_id = this.state.projId;
    var newExpenses = this.state.newExpenses;
    newExpenses.push(singleExpense);
    this.setState({newExpenses: newExpenses})
    console.log('Handle NEW Expense ', singleExpense);
    this.props.postNewExpense(singleExpense);
  },

  handleExpenseToDelete: function(singleExpense){
    singleExpense.projs_id = this.state.projId;
    console.log('Handle DELETE ', singleExpense);
    this.props.removeExpense(singleExpense);
  },

  handleExpenseUpdate: function(singleExpense){
    singleExpense.projs_id = this.state.projId;
    console.log('Handle UPDATE ', singleExpense);
    this.props.updateExpense(singleExpense);
  },

  switchModal () {
    this.setState({modal: !this.state.modal});
  },

  switchChart() {
    this.setState({open: !this.state.open});
  },

  render() {
    let projName="THIS AINT RIGHT";

    this.props.projects.forEach((project) => {
      if (project.projId === this.props.expenses.projId) {
        projName = project.name;
        return;
      }
    });

    return (
      <div>
        <Modal show={this.state.modal} onHide={this.switchModal} >
          <Modal.Body>
            <CSVDrop {...this.props}/>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <h3>{"Expenses for " + projName }</h3>
        <Panel>
          <Button bsStyle="primary" bsSize="large" onClick={this.switchChart}>Click for Visuals</Button>
          {this.state.open ? <ExpenseChart {...this.props}/> : null}
        </Panel>
        <Panel>
          <span>
            <h3>{"Project ID: "+ this.state.projId}</h3>
          </span>
          <Table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Method</th>
                <th>Expense Category</th>
                <th>GL Code</th>
                <th>Date Spent</th>
                <th>Date Tracked</th>
              </tr>
            </thead>
              <tbody>
                {this.props.expenses.expenses.map((item, index) =>
                  <ExpenseNode expense={item}
                    handleExpenseToDelete={this.handleExpenseToDelete}
                    handleExpenseUpdate={this.handleExpenseUpdate}
                    projs_id={this.state.projs_id}
                    key={index}
                    readOnlyStatus={true}/>)
                }
              </tbody>
          </Table>
          <Table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Description</th>
                <th>Cost</th>
                <th>Method</th>
                <th>Expense Category</th>
                <th>GL Code</th>
                <th>Date Spent</th>
                <th>Date Tracked</th>
              </tr>
            </thead>
            <tbody>
              {this.state.addedExpenses.map((item, index) =>
                <ExpenseNode
                  expense={item}
                  handleNewExpense={this.handleNewExpense}
                  key={index}
                  projs_id={this.state.projs_id}
                  readOnlyStatus={false}/>)
              }
            </tbody>
          </Table>
        </Panel>
      </div>
    );
  }
});

export default Expenses;
