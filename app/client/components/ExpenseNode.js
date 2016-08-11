import React from 'react';
<<<<<<< 24aeb35257b28e73bfccde1fe31f198535cc6beb
import { Link } from 'react-router';
import { Form, FormControl, Button, Modal, OverlayTrigger } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";

// import CSSTransitionGroup from 'react-addons-css-transition-group';
=======
import { Button } from 'react-bootstrap';
import SelectInput from './formComponents/SelectInput.js';
import TextInput from './formComponents/TextInput.js';
import CurrentDate from './formComponents/CurrentDate.js';

>>>>>>> (feat) Expense Component

const ExpenseNode = React.createClass({
  getInitialState: function() {
    return {
      expense: this.props.expense
    };
  },

  handleChange: function(e) {
    e.preventDefault();
    console.log(e.target.value);
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  },

  handleUpdate: function(e) {
    console.log(this.state);
    e.preventDefault();
    this.props.updateExpense(this.state, this.props.projId, this.props.projs_id);
  },

  handleRemove: function(e) {
    e.preventDefault();
    console.log('clicked remove');
    // ApiCall.removeExpense(this.props.expense.id);
    this.props.removeExpense(this.props.expense.id, this.props.projId, this.props.projs_id);
  },

  componentDidMount: function(){
    console.log(this.state)
  },

  render() {
    return (
        <tr>
          <td>
            <SelectInput title ="Type" value={this.state.expense.type} name="type" onInput={this.handleChange} options={['Video Originals', 'Branded', 'Editorial', 'Debt Expenses']} />
          </td>
          <td>
            <SelectInput title ="Vertical" value={this.state.expense.vertical} name="vertical" onInput={this.handleChange} options={['Food', 'Beauty', 'Fashion & Style', 'News & Politics', 'News & Celeb', 'Wellness', 'Entertainment']} />
          </td>
          <td><TextInput title={this.state.expense.vendor} value={this.state.expense.vendor} onInput={this.handleChange} /></td>
          <td><TextInput title={this.state.expense.description} value={this.state.expense.description} onInput={this.handleChange} /></td>
          <td><TextInput title={this.state.expense.cost} value={this.state.expense.cost} onInput={this.handleChange} /></td>
          <td>
            <SelectInput title ="Method" value={this.state.expense.method} name="method" onInput={this.handleChange} options={['Credit Card', 'Invoice', 'Payroll', 'Petty Cash', 'Misc']} />
          </td>
          <td>
            <SelectInput title ="Category" value={this.state.expense.category} name="category" onInput={this.handleChange} options={[
              'Producer', 'Associate Producer', 'Production Assistant', 'Set Production Assistant', 'Intern',
              'Director', 'Writer', 'Director of Photography', 'Camera Operator', 'Assistant Camera','Audio Operator',
              'Gaffer/Grip/Best Boy', 'Set Design', 'Location Manager','Make-Up Artist','Hair Stylist', 'Wardrobe Stylist',
              'Wardrobe Allowance','Photographer', 'On-Camera Talent', 'Equipment', 'Camera Rental', 'Camera Rental',
              'Lighting Rental', 'Misc Equipment Rental', 'Misc Equipment Rental', 'Props', 'Insurance', 'Meals & Craft Service',
              'Hosting Service', 'Taxis & Local Transpo', 'Airfare', 'Hotel', 'Car Rental', 'Gas, Tolls, Parking', 'Research Materials',
              'Location Fees & Permits', 'Editor', 'Assistant Editor', 'Edit Suite', 'Color Correction', 'Audio Mix',
              'Design & Motion GFX', 'Transcription', 'Misc Post', 'Photo Licensing', 'Footage Licensing', 'Music Licensing'
             ]} />
          </td>
<<<<<<< 24aeb35257b28e73bfccde1fe31f198535cc6beb
          <td><FormControl type="text" value={this.state.glCode} onChange={this.handleChangeGl}/></td>
          <td><FormControl type="text" value={this.state.dateSpent.slice(0,10)} onChange={this.handleChangeDateSpent}/></td>
          <td><FormControl type="text" value={this.state.dateTracked.slice(0,10)} onChange={this.handleChangeDateTracked}/></td>
=======
          <td><TextInput title={this.state.expense.glCode} value={this.state.expense.glCode} onInput={this.handleChange} /></td>
          <td><TextInput title={this.state.dateSpent} value={this.state.dateSpent} onInput={this.handleChange} /></td>
          <td><CurrentDate value={this.state.dateTracked}/></td>
>>>>>>> (feat) Expense Component
          <td><Button onClick={this.handleUpdate}>Update</Button></td>
          <td><Button onClick={this.handleRemove}>Remove</Button></td>
        </tr>
    );
  }
});

export default ExpenseNode;
