import React from 'react';
import { Link } from 'react-router';
import { Button, ControlId, Form, FormControl, FormGroup, Modal, Panel, Table } from 'react-bootstrap';
import ExpenseNode from './ExpenseNode';
import StaticExpenseNode from './ExpenseNode(Static)';
import NavBar from './NavBar';

const Expenses = React.createClass({
  getInitialState() {
    return {
      expenses: this.props.expenses.expenses,
      type: undefined,
      vertical: undefined,
      vendor: undefined,
      description: undefined,
      cost: undefined,
      method: undefined,
      category: undefined,
      glCode: undefined,
      dateSpent: undefined,
      dateTracked: undefined,
      projs_id: this.props.expenses.id,
      count: 0,
      addedExpenses: [0]
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
    console.log(count, newCount, addedExpenses)
  },

  removeExpenseNode(idx) {
    var last = this.state.addedExpenses.length-1
    var newExpensesCount = this.state.addedExpenses.slice(0,last);
    this.setState({addedExpenses : newExpensesCount});
  },

  handleSubmit: function() {
    console.log('hey')
  },

  handleUpdate: function(){

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
                  {this.state.expenses.map((expense, index) => {return <StaticExpenseNode expenses={expense} idx={index} readOnly={this.handleUpdate} /> })}
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
            <tbody>{this.state.addedExpenses.map((item, index) => <ExpenseNode expense={item} key={index} />)}</tbody>
          </Table>
          <Button onClick={this.addExpenseNode}>Add Expense</Button>
          <Button onClick={this.removeExpenseNode}>Remove Expense</Button>
          <div>
          <Button onClick={this.handleSubmit}>Submit New Expenses</Button>
          </div>
      </div>
    );
  }
});

export default Expenses;
