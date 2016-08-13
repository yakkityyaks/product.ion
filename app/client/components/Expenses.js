import React from 'react';
import { Link } from 'react-router';
import { Button, ControlId, Form, FormControl, FormGroup, Modal, Panel, Table } from 'react-bootstrap';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import FormTable from './formComponents/Table.js';

const Expenses = React.createClass({
  getInitialState: function() {
    return {
      expenses: this.props.expenses.expenses,
      projs_id: this.props.expenses.id,
      count: 0,
      addedExpenses: [0],
      newExpenses: []
    };
  },

  addExpenseNode: function(e) {
    e.preventDefault();
    var count = this.state.count;
    var newCount = ++count;
    var addedExpenses = this.state.addedExpenses;
    addedExpenses.push(newCount);
    this.setState({
      count : newCount
    });
  },

  removeExpenseNode(idx) {
    var last = this.state.addedExpenses.length-1
    var newExpensesCount = this.state.addedExpenses.slice(0,last);
    this.setState({addedExpenses : newExpensesCount});
  },

  handleNewExpense: function(singleExpense){
    var newExpenses = this.state.newExpenses;
    newExpenses.push(singleExpense);
    this.setState({newExpenses: newExpenses})
    console.log('new state', this.state.newExpenses);
  },

  handleSubmit: function(){
    var newExpenses = this.state.newExpenses;

  },

  render() {
    return (
      <div>
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <h3>{"Expenses for project w/ project ID" + this.props.expenses.projId}</h3>
          <Table striped bordered condensed hover style={{width: "90%"}}>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Vertical</th>
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
                  {this.state.expenses.map((item, index) => <ExpenseNode expense={item} projs_id={this.state.projs_id} key={index} readOnlyStatus={true}/>)}
                </tbody>
          </Table>
          <h3>New Expenses</h3>

          <Table striped bordered condensed hover style={{width: "90%"}}>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Vertical</th>
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
            <tbody>{this.state.addedExpenses.map((item, index) => <ExpenseNode expense={item} handleNewExpense={this.handleNewExpense} projs_id={this.state.projs_id} key={index} readOnlyStatus={false}/>)}</tbody>
          </Table>
          <Button onClick={this.addExpenseNode}>Add Expense</Button>
          <Button onClick={this.removeExpenseNode}>Remove Expense</Button>
          <div>
          <Button>Submit New Expenses</Button>
          </div>
      </div>
    );
  }
});

export default Expenses;
