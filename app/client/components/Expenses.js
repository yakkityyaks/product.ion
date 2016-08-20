import React from 'react';
import { Link } from 'react-router';
import { Button, ControlId, Form, FormControl, FormGroup, InputGroup, Modal, Panel, Table } from 'react-bootstrap';
import CSVDrop from './CSVDrop';
import ExpenseChart from './ExpenseChart';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import StaticDate from './formComponents/StaticDate.js';
import ReadOnlyText from './formComponents/ReadOnlyText.js';

const Expenses = React.createClass({

  getInitialState: function() {
    var proj = null;

    this.props.projects.forEach((project) => {
      if (project.projId === this.props.expenses.projId) {
        proj = project;
        return;
      }
    });
    return {
      open: false,
      count: 0,
      addedExpenses: [0],
      newExpenses: [],
      modal: false,
      newView: false,
      proj: proj
    };
  },

  handleNewExpense: function(singleExpense){
    singleExpense.projs_id = this.props.expenses.id;
    var newExpenses = this.state.newExpenses;
    newExpenses.push(singleExpense);
    this.setState({newExpenses: newExpenses});
    console.log('Handle NEW Expense ', singleExpense);
    this.props.postNewExpense(singleExpense, this.props.expenses.projId);
  },

  handleExpenseToDelete: function(singleExpense){
    singleExpense.projs_id = this.props.expenses.id;
    console.log('Handle DELETE ', singleExpense);
    this.props.removeExpense(singleExpense, this.props.expenses.projId);
  },

  handleExpenseUpdate: function(singleExpense){
    singleExpense.projs_id = this.props.expenses.id;
    console.log('Handle UPDATE ', singleExpense);
    this.props.updateExpense(singleExpense, this.props.expenses.projId);
  },

  // shouldComponentUpdate() {
  //   return Object.keys(this.props.expenses).length > 0;
  // },

  switchModal () {
    this.setState({newView: true, modal: !this.state.modal});
  },

  switchChart() {
    console.log('switching chart', !this.state.open);
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

    var username = '';
    var that = this;
    this.props.organization.users.forEach(function(user) {
      if (user.id === proj.createdBy) username = user.username;
    });

    return (
      <div>
        <Modal show={this.state.modal} onHide={this.switchModal} >
          <Modal.Header>
            <Modal.Title>{"Add Expenses to '" + proj.name + "' with a CSV"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CSVDrop {...this.props}/>
          </Modal.Body>
          <Modal.Footer />
        </Modal>
        <NavBar {...this.props}/>
        <Panel>
          <span style={{"font-size":"30"}}>{"Project Details for " + proj.name }</span>
          <Button bsStyle="primary" style={{"float":"right"}} onClick={this.switchChart}>Toggle Visuals</Button>
          <div style={{"margin-top":"20px"}}>
            <Table striped>
              <thead>
                <tr id="readOnlyHeader">
                  <th>Project ID</th>
                  <th>Created By</th>
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
                  <td width="50">
                    <ReadOnlyText
                      name="projId"
                      value={proj.projId} />
                  </td>
                  <td width="145">
                    <ReadOnlyText
                      name="projId"
                      value={username} />
                  </td>
                  <td width="145">
                    <ReadOnlyText
                      name="vertical"
                      value={proj.vertical} />
                  </td>
                  <td width="70">
                    <ReadOnlyText
                      name="tier"
                      value={proj.tier} />
                  </td>
                  <td width="145">
                    <ReadOnlyText
                      name="type"
                      value={proj.type} />
                  </td>
                  <td width="15">
                    <ReadOnlyText
                      name="numAssets"
                      value={proj.numAssets} />
                  </td>
                  <td width="125">
                    <ReadOnlyText
                      name="status"
                      value={proj.status} />
                  </td>
                  <td width="125">
                    <StaticDate
                      name="startDate"
                      value={proj.startDate} />
                  </td>
                  <td width="125">
                    <StaticDate
                      name="endDate"
                      value={proj.endDate} />
                  </td>
                  <td width="125">
                    <StaticDate
                      name="editDate"
                      value={proj.editDate} />
                  </td>
                  <td width="125">
                    <StaticDate
                      name="releaseDate"
                      value={proj.releaseDate} />
                  </td>
                  <td width="125">
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                        <ReadOnlyText
                          name="costToDate"
                          value={proj.costToDate} />
                    </InputGroup>
                  </td>
                  <td width="125">
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                        <ReadOnlyText
                          name="estimateToComplete"
                          value={proj.estimateToComplete} />
                    </InputGroup>
                  </td>
                  <td width="125">
                    <InputGroup>
                      <InputGroup.Addon>$</InputGroup.Addon>
                        <ReadOnlyText
                          name="reqBudget"
                          value={proj.reqBudget} />
                    </InputGroup>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
          {this.state.open ? <ExpenseChart {...this.props} projName={this.state.proj.name}/> : null}
        </Panel>
        <Panel>
          <span style={{"font-size":"30"}}>{"Expenses for " + this.state.proj.name }</span>
          <Button onClick={this.switchModal} style={{"float":"right"}} bsStyle="primary">Add Expenses with a CSV</Button>
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
          <Panel>
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
        </Panel>
      </div>
    );
  }
});

export default Expenses;
