import React from 'react';
import { Link } from 'react-router';
<<<<<<< HEAD
import ExpenseChart from './ExpenseChart';
import { Button, ControlId, Form, FormControl, FormGroup, Modal, Panel, Table } from 'react-bootstrap';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import CSVDrop from './CSVDrop';
=======
import { Button, ControlId, Form, FormControl, FormGroup, Modal, Panel, Table } from 'react-bootstrap';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
>>>>>>> 5e1b99dc0de25f8d946f9866698764f9cb835087
import FormTable from './formComponents/Table.js';

const Expenses = React.createClass({
  getInitialState: function() {
    return {
<<<<<<< HEAD
      open: false,
=======
>>>>>>> 5e1b99dc0de25f8d946f9866698764f9cb835087
      expenses: this.props.expenses.expenses,
      projId: this.props.expenses.projId,
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
<<<<<<< HEAD
    this.setState({count : newCount});
=======
    this.setState({
      count : newCount
    });
>>>>>>> 5e1b99dc0de25f8d946f9866698764f9cb835087
  },

  removeExpenseNode(idx) {
    var last = this.state.addedExpenses.length-1
    var newExpensesCount = this.state.addedExpenses.slice(0,last);
    this.setState({addedExpenses : newExpensesCount});
<<<<<<< HEAD
  },

  handleNewExpense: function(singleExpense){
    var newExpenses = this.state.newExpenses;
    newExpenses.push(singleExpense);
    this.setState({newExpenses: newExpenses})
    console.log('new state', 'Project ID is ', this.state.projId, 'THe expense object is',this.state.newExpenses);
    this.props.postNewExpense(this.state.projId, singleExpense);
  },

  handleSubmit: function(){
    var newExpenses = this.state.newExpenses;

  },
  switchModal () {
    this.props.changeModal('csv');
  },
  switchChart() {
    this.setState({open: !this.state.open});
=======
  },

  handleNewExpense: function(singleExpense){
    var newExpenses = this.state.newExpenses;
    newExpenses.push(singleExpense);
    this.setState({newExpenses: newExpenses})
    console.log('new state', 'Project ID is ', this.state.projId, 'THe expense object is',this.state.newExpenses);
    this.props.postNewExpense(this.state.projId, singleExpense);
  },

  handleSubmit: function(){
    var newExpenses = this.state.newExpenses;

>>>>>>> 5e1b99dc0de25f8d946f9866698764f9cb835087
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
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
<<<<<<< HEAD
        <h3>{"Expenses for " + projName }</h3>
        <Panel>
          <h3>Data Visualization!!!</h3>
          <Button onClick={this.switchChart}>Click for Visuals</Button>
          <Panel>
            {this.state.open ? <ExpenseChart {...this.props}/> : null}
            </Panel>
        </Panel>
=======
        <h3>{"Project ID: "+ this.state.projId}</h3>
>>>>>>> 5e1b99dc0de25f8d946f9866698764f9cb835087
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
