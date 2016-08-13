import React from 'react';
import { Link } from 'react-router';
<<<<<<< 825d902fb84c076c66d2f6294f6792df3a017dc3
<<<<<<< 24aeb35257b28e73bfccde1fe31f198535cc6beb
import ExpenseChart from './ExpenseChart';

import { Table, Form, FormControl, FormGroup, ControlId, Button, Modal } from 'react-bootstrap';

=======
import { Table, Form, FormControl, FormGroup, ControlId, Button, Modal } from 'react-bootstrap';
>>>>>>> (feat) Expense Component
=======
import { Button, ControlId, Form, FormControl, FormGroup, Modal, Panel, Table } from 'react-bootstrap';
>>>>>>> (feat) Expense Components
import ExpenseNode from './ExpenseNode';
import StaticExpenseNode from './ExpenseNode(Static)';
import NavBar from './NavBar';
<<<<<<< 825d902fb84c076c66d2f6294f6792df3a017dc3
import CSVDrop from './CSVDrop';
import { Panel } from 'react-bootstrap';

=======
>>>>>>> (feat) Expense Components

const Expenses = React.createClass({
  getInitialState() {
    return {
<<<<<<< 825d902fb84c076c66d2f6294f6792df3a017dc3
      type: "",
      vertical: "",
      vendor: "",
      description: "",
      cost: "",
      method: "",
      category: "",
      glCode: "",
      dateSpent: "",
      dateTracked:"",
      projs_id: this.props.expenses.id,
      open: false
=======
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
>>>>>>> (feat) Expense Components
    };
  },

  addExpenseNode: function(e) {
    e.preventDefault();
    var count = this.state.count;
    var newCount = ++count;
    var addedExpenses = this.state.addedExpenses;
    addedExpenses.push(newCount);
    this.setState({
<<<<<<< 825d902fb84c076c66d2f6294f6792df3a017dc3
      type: "",
      vertical: "",
      vendor: "",
      description: "",
      method: "",
      category: "",
      glCode: "",
      dateSpent: "",
      dateTracked: "",
      cost: "",
      projs_id: this.props.expenses.id
=======
      count : newCount
>>>>>>> (feat) Expense Components
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
<<<<<<< 24aeb35257b28e73bfccde1fe31f198535cc6beb
  handleChangeType(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({type: e.target.value});
  },
  handleChangeVertical(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({vertical: e.target.value});
  },
  handleChangeVendor(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({vendor: e.target.value});
  },
  handleChangeDescription(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({description: e.target.value});
  },
  handleChangeCost(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({cost: e.target.value});
  },
  handleChangeMethod(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({method: e.target.value});
  },
  handleChangeCategory(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({category: e.target.value});
  },
  handleChangeGl(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({glCode: e.target.value});
  },
  handleChangeDateSpent(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({dateSpent: e.target.value});
  },
  handleChangeDateTracked(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({dateTracked: e.target.value});
  },
  switchModal () {
    this.props.changeModal('csv');
  },
  switchChart() {
    this.setState({open: !this.state.open});
  },
=======

>>>>>>> (feat) Expense Component
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
<<<<<<< 825d902fb84c076c66d2f6294f6792df3a017dc3
<<<<<<< 24aeb35257b28e73bfccde1fe31f198535cc6beb
        <h3>{"Expenses for " + projName }</h3>
        <Panel>
          <h3>Data Visualization!!!</h3>
          <Button onClick={this.switchChart}>Click for Visuals</Button>
          <Panel>
            {this.state.open ? <ExpenseChart {...this.props}/> : null}
            </Panel>
        </Panel>
        <Form onSubmit={this.onSubmit}>
=======
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
>>>>>>> (feat) Expense Component
          <Table condensed style={{width: "100%"}}>
=======
        <h3>{"Expenses for project w/ project ID" + this.props.expenses.projId}</h3>
          <Table striped bordered condensed hover style={{width: "90%"}}>
>>>>>>> (feat) Expense Components
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
<<<<<<< 825d902fb84c076c66d2f6294f6792df3a017dc3
                  {this.props.expenses.expenses.map((expense, idx) =>
                      <ExpenseNode key={idx} idx={idx} {...this.props} expense={expense} projId={this.props.expenses.projId} projs_id={this.props.expenses.id}/>)
                  }
<<<<<<< 24aeb35257b28e73bfccde1fe31f198535cc6beb
                  <tr>
                    <td>
                      <FormControl componentClass="select" placeholder="Type" value={this.state.type} onChange={this.handleChangeType}>
                        <option value="Video Originals">Video Originals</option>
                        <option value="Branded">Branded</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Debt Expenses">Dept Expenses</option>
                      </FormControl>
                    </td>
                    <td>
                      <FormControl componentClass="select" placeholder="Vertical" value={this.state.vertical} onChange={this.handleChangeVertical}>
                        <option value="Food">Food</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Fashion & Style">Fashion & Style</option>
                        <option value="News & Politics">News & Politics</option>
                        <option value="News & Celeb">News & Celeb</option>
                        <option value="Wellness">Wellness</option>
                        <option value="Entertainment">Entertainment</option>
                      </FormControl>
                    </td>
                    <td><FormControl type="text" placeholder="Vendor" value={this.state.vendor} onChange={this.handleChangeVendor}/></td>
                    <td><FormControl type="text" placeholder ="description" value={this.state.description} onChange={this.handleChangeDescription}/></td>
                    <td><FormControl type="text" placeholder ="cost" value={this.state.cost} onChange={this.handleChangeCost}/></td>
                    <td>
                      <FormControl componentClass="select" placeholder="Method" value={this.state.method} onChange={this.handleChangeMethod}>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Invoice">Invoice</option>
                        <option value="Payroll">Payroll</option>
                        <option value="Petty Cash">Petty Cash</option>
                        <option value="Misc">Misc</option>
                      </FormControl>
                    </td>
                    <td>
                      <FormControl componentClass="select" placeholder="Category" value={this.state.category} onChange={this.handleChangeCategory}>
                        <option value="Consultant">Consultant</option>
                        <option value="Writer">Writer</option>
                        <option value="Director">Director</option>
                        <option value="Producer">Producer</option>
                        <option value="Associate Producer">Associate Producer</option>
                        <option value="Production Assistant">Production Assistant</option>
                        <option value="Research Materials">Research Materials</option>
                        <option value="On-Camera Talent">On-Camera Talent</option>
                        <option value="Make-Up Artist">Make-Up Artist</option>
                        <option value="Hair Stylist">Hair Stylist</option>
                        <option value="Wardrobe & Stylist">Wardrobe & Stylist</option>
                        <option value="Wardrobe Allowance">Wardrobe Allowance</option>
                        <option value="Director of Photography">Director of Photography</option>
                        <option value="Camera Operator">Camera Operator</option>
                        <option value="Assistant Camera">Assistant Camera</option>
                        <option value="Audio Operator">Audio Operator</option>
                        <option value="Gaffer/Grip/Best-Boy">Gaffer/Grip/Best-Boy</option>
                        <option value="Photographer">Photographer</option>
                        <option value="Set PA">Set PA</option>
                        <option value="Intern">Intern</option>
                        <option value="Camera Rental">Camera Rental</option>
                        <option value="Lighting Rental">Lighting Rental</option>
                        <option value="Misc Equipment Rental">Misc Equipment Rental</option>
                        <option value="Location Fees/Permits">Location Fees/Permits</option>
                        <option value="Location Manager">Location Manager</option>
                        <option value="Set Design">Set Design</option>
                        <option value="Meals & Craft Service">Meals & Craft Service</option>
                        <option value="Taxis/Local/Transpo">Taxis/Local/Transpo</option>
                        <option value="Airfare">Airfare</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Car Rental">Car Rental</option>
                        <option value="Gas Tolls Parking">Gas Tolls Parking</option>
                        <option value="Editor">Editor</option>
                        <option value="Assistant Editor">Assistant Editor</option>
                        <option value="Edit Suite">Edit Suite</option>
                        <option value="Design & Motion GFX">Design & Motion GFX</option>
                        <option value="Transcription">Transcription</option>
                        <option value="Color Correction">Color Correction</option>
                        <option value="Audio Mix">Audio Mix</option>
                        <option value="Misc Post">Misc Post</option>
                        <option value="Photo Licensing">Photo Licensing</option>
                        <option value="Footage Licensing">Footage Licensing</option>
                        <option value="Music Licensing">Music Licensing</option>
                        <option value="Insurance">Insurance</option>
                        <option value="Hosting Service">Hosting Service</option>
                        <option value="Third Party Production">Third Party Production</option>
                        <option value="Third Party Production/Licensing">Third Party Production/Licensing</option>
                      </FormControl>
                    </td>
                    <td><FormControl type="text" placeholder ="glCode" value={this.state.glCode} onChange={this.handleChangeGl}/></td>
                    <td><FormControl type="date" placeholder ="dateSpent" value={this.state.dateSpent} onChange={this.handleChangeDateSpent}/></td>
                    <td><FormControl type="date" placeholder ="dateTracked" value={this.state.dateTracked} onChange={this.handleChangeDateTracked}/></td>
                    <td><Button onClick={this.onSubmit}>Submit</Button></td>
                  </tr>
                </tbody>
              {/* </Form> */}

              <Button bsStyle="primary" bsSize="large" id="modalButton" onClick={this.switchModal}>
                Upload a CSV File
              </Button>

              <Modal show={this.props.modals.csv} onHide={this.switchModal} >
                <Modal.Header closeButton>
                  <Modal.Title>CSV File Drop</Modal.Title>
                </Modal.Header>
               <Modal.Body>
                    <CSVDrop {...this.props} />
                  </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.switchModal}>Close</Button>
                </Modal.Footer>
              </Modal>

            </FormGroup>
=======
=======
                  {this.state.expenses.map((expense, index) => {return <StaticExpenseNode expenses={expense} idx={index} readOnly={this.handleUpdate} /> })}
>>>>>>> (feat) Expense Components
                </tbody>
>>>>>>> (feat) Expense Component
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
