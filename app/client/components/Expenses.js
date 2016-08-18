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
    this.setState({newView: true})
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    console.log('the next props are ', nextProps)
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
    this.setState({newView: true, modal: !this.state.modal});
  },

  switchChart() {
    console.log('switching chart', !this.state.open)
    this.setState({newView: true, open: !this.state.open});
  },

  render() {
    var proj = null;

    this.props.projects.forEach((project) => {
      if (project.projId === this.props.expenses.projId) {
        proj = project;
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
        <Panel>
          <span style={{"font-size":"30"}}>{"Project Details for " + proj.name }</span>
          <Button bsStyle="primary" style={{"float":"right","margin-right":"5px"}} onClick={this.switchChart}>Toggle Visuals</Button>
          <Button onClick={this.switchModal} style={{"float":"right","margin-right":"5px"}} bsStyle="primary">Add Expenses with a CSV</Button>
          <div style={{"margin-top":"20px"}}>
            <Table striped bordered>
              <thead>
                <tr id="readOnlyHeader">
                  <th>Project ID</th>
                  <th>Vertical</th>
                  <th>Tier</th>
                  <th>Type</th>
                  <th>Number of Assets</th>
                  <th>Status</th>
                  <th>Start Date</th>
                  <th>End Date</th>
                  <th>Edit Date</th>
                  <th>Release Date</th>
                  <th>Cost to Date</th>
                  <th>Estimate to Complete</th>
                  <th>Requested Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr id="readOnlyBody">
                  <td>{proj.projId}</td>
                  <td>{proj.vertical}</td>
                  <td>{proj.tier}</td>
                  <td>{proj.type}</td>
                  <td>{proj.numAssets}</td>
                  <td>{proj.status}</td>
                  <td>{proj.startDate.slice(0,10)}</td>
                  <td>{proj.endDate.slice(0,10)}</td>
                  <td>{proj.editDate.slice(0,10)}</td>
                  <td>{proj.releaseDate.slice(0,10)}</td>
                  <td>{proj.costToDate}</td>
                  <td>{proj.estimateToComplete}</td>
                  <td>{proj.reqBudget}</td>
                </tr>
              </tbody>
            </Table>
          </div>
          {this.state.open ? <ExpenseChart {...this.props}/> : null}
        </Panel>
        <Panel>
          <span style={{"font-size":"30"}}>{"Expenses for " + proj.name }</span>
          <Table>
            <thead>
              <tr id="readOnlyHeader">
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
                    readOnlyStatus={true} />)
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
