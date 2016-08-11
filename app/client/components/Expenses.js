import React from 'react';
import { Link } from 'react-router';
import { Table, Form, FormControl, FormGroup, ControlId, Button, Modal } from 'react-bootstrap';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import { Panel } from 'react-bootstrap';


const Expenses = React.createClass({
  getInitialState() {
    return {
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
      projs_id: this.props.expenses.id
    };
  },
  getValidationState() {

  },
  onSubmit(e) {
    e.preventDefault();
    var temp = this.state;
    this.setState({
      type: undefined,
      vertical: undefined,
      vendor: undefined,
      description: undefined,
      method: undefined,
      category: undefined,
      glCode: undefined,
      dateSpent: undefined,
      dateTracked: undefined,
      cost: undefined,
      projs_id: this.props.expenses.id
    });
    this.props.postNewExpense(temp, this.props.expenses.projId);
  },

  render() {
    return (
      <div style={{fontSize : "14px"}}>
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <Panel>
          <Button bsStyle="primary" bsSize="large" id="expenseButton" onClick={this.switchModal}>Create an Expense</Button>
        <Modal show={this.props.modals.expense} onHide={this.switchModal} >
          <Modal.Header closeButton>
            <Modal.Title>Add an Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ExpenseNode {...this.props}/>
          </Modal.Body>
        <Modal.Footer />
        </Modal>
        </Panel>
        <h3>{"Expenses for project w/ project ID" + this.props.expenses.projId}</h3>
          <Table condensed style={{width: "100%"}}>
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
                  {this.props.expenses.expenses.map((expense, idx) =>
                      <ExpenseNode key={idx} idx={idx} {...this.props} expense={expense} projId={this.props.expenses.projId} projs_id={this.props.expenses.id}/>)
                  }
                </tbody>
          </Table>
      </div>
    );
  }
});

export default Expenses;
