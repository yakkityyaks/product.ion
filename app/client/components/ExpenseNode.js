import React from 'react';
import { Link } from 'react-router';
import { Button, Form, FormControl, InputGroup, Modal, OverlayTrigger} from 'react-bootstrap';
import codes from "../data/expenseCodes.js";
import DatePicker from './formComponents/DatePicker.js';
import StaticDate from './formComponents/StaticDate.js';
import SelectInput from './formComponents/SelectInput.js';
import TextInput from './formComponents/TextInput.js';

const ExpenseNode = React.createClass({
  getInitialState: function() {
    return {
      importedExpenses: this.props.expense,
      readOnlyStatus: this.props.readOnlyStatus,
      category: "Producer",
      cost: 0,
      dateSpent: "",
      dateTracked: "",
      description: "",
      glCode: 560260,
      id: 0,
      method: "",
      vendor: ""
    };
  },

  componentDidMount: function(){
    console.log('At mount ', this.state.readonlyStatus)
  },

  handleAdd: function(){
    var singleExpense = {
      category: this.state.category,
      cost: this.state.cost,
      dateSpent: this.state.dateSpent.rawDate,
      dateTracked: this.state.dateTracked.rawDate,
      description: this.state.description,
      glCode: this.state.glCode,
      method: this.state.method,
      vendor: this.state.vendor
    }
    console.log('handleAdd built this expense object ', singleExpense);
    this.props.handleNewExpense(singleExpense);
  },

  handleChange: function(inputName, inputValue) {
    console.log("handleChange set the state of ", inputName, "to ", inputValue);
    var nextState = {};
    nextState[inputName] = inputValue;
    this.setState(nextState);
    if(inputName === "category"){
      for (var key in codes){
        if(inputValue === key){
          this.setState({glCode: codes[key]});
        }
      }
    }
  },

  handleDelete: function(){
    var expenseToDelete = this.props.expense;
    console.log('handleDelete built this expense object ', expenseToDelete);
    this.props.handleExpenseToDelete(expenseToDelete);
  },

  handleEdit: function(){
    var off = false;
    this.setState({readOnlyStatus: off})
    this.setState({category:this.props.expense.category})
    this.setState({cost:this.props.expense.cost})
    this.setState({dateSpent:this.props.expense.dateSpent})
    this.setState({dateTracked:this.props.expense.dateTracked})
    this.setState({description:this.props.expense.description})
    this.setState({glCode:this.props.expense.glCode})
    this.setState({id:this.props.expense.id})
    this.setState({method:this.props.expense.method})
    this.setState({vendor:this.props.expense.vendor})
    console.log('readonlyStatus in the Expense node is ', this.state.readOnlyStatus);
    console.log('handleEdit is tracking the current expense id: ', this.props.expense.id);
  },

  handleUpdate: function(){
    var on = true;
    this.setState({readOnlyStatus: on})
    console.log('readOnly status is ', this.state.readonlyStatus)
    var expenseToUpdate = {
      category:this.state.category,
      cost:this.state.cost,
      dateSpent:this.state.dateSpent.rawDate || this.state.dateSpent,
      dateTracked:this.state.dateTracked.rawDate || this.state.dateTracked,
      description:this.state.description,
      glCode:this.state.glCode,
      id:this.state.id,
      method:this.state.method,
      vendor:this.state.vendor
    }
    console.log('handleUpdate built this expense object ', expenseToUpdate);
    this.props.handleExpenseUpdate(expenseToUpdate);

  },

  render() {
    return (
      <tr>
        <td>
          <TextInput
            name="vendor"
            onChange={this.handleChange}
            readOnlyStatus={this.state.readOnlyStatus}
            value={this.state.importedExpenses.vendor} />
        </td>
        <td>
          <TextInput
            name="description"
            onChange={this.handleChange}
            readOnlyStatus={this.state.readOnlyStatus}
            value={this.state.importedExpenses.description} />
        </td>
        <td  width="115">
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
               <TextInput
                 name="cost"
                 onChange={this.handleChange}
                 readOnlyStatus={this.state.readOnlyStatus}
                 value={this.state.importedExpenses.cost} />
          </InputGroup>
        </td>
        <td width="135">
          {(this.state.importedExpenses.method && this.state.readOnlyStatus === true) ?
            <TextInput
              name="method"
              onChange={this.handleChange}
              readOnlyStatus={this.state.readOnlyStatus}
              value={this.state.importedExpenses.method} /> :
            <SelectInput
              name="method"
              onChange={this.handleChange}
              options={['Credit Card', 'Invoice', 'Payroll', 'Petty Cash', 'Misc']}
              readOnlyStatus={this.state.readOnlyStatus}
              value={this.state.importedExpenses.method} />
          }
        </td>
        <td>
          {(this.state.importedExpenses.category && this.state.readOnlyStatus === true) ?
            <TextInput
              name="category"
              onChange={this.handleChange}
              readOnlyStatus={this.state.readOnlyStatus}
              value={this.state.importedExpenses.category} /> :
              <SelectInput
                name="category"
                onChange={this.handleChange}
                options={[
                'Producer', 'Associate Producer', 'Production Assistant', 'Set Production Assistant', 'Intern',
                'Director', 'Writer', 'Director of Photography', 'Camera Operator', 'Assistant Camera','Audio Operator',
                'Gaffer/Grip/Best Boy', 'Set Design', 'Location Manager','Make-Up Artist','Hair Stylist', 'Wardrobe Stylist',
                'Wardrobe Allowance','Photographer', 'On-Camera Talent', 'Equipment', 'Camera Rental', 'Camera Rental',
                'Lighting Rental', 'Misc Equipment Rental', 'Misc Equipment Rental', 'Props', 'Insurance', 'Meals & Craft Service',
                'Hosting Service', 'Taxis & Local Transpo', 'Airfare', 'Hotel', 'Car Rental', 'Gas, Tolls, Parking', 'Research Materials',
                'Location Fees & Permits', 'Editor', 'Assistant Editor', 'Edit Suite', 'Color Correction', 'Audio Mix',
                'Design & Motion GFX', 'Transcription', 'Misc Post', 'Photo Licensing', 'Footage Licensing', 'Music Licensing'
                ]}
                readOnlyStatus={this.state.readOnlyStatus}
                value={this.state.importedExpenses.category} />
            }
          </td>
          <td width="93">
            <TextInput
              value={this.state.glCode}
              readOnlyStatus={true} />
          </td>
          <td width="115">
            {(this.state.importedExpenses.dateSpent && this.state.readOnlyStatus === true) ?
              <StaticDate
                name="dateSpent"
                value={this.state.importedExpenses.dateSpent} readOnlyStatus={this.state.readOnlyStatus} /> :
              <DatePicker
                name="dateSpent"
                onChange={this.handleChange}
                readOnlyStatus={this.state.readOnlyStatus}
                value={this.state.importedExpenses.dateSpent ? this.state.importedExpenses.dateSpent: this.state.dateSpent} />
            }
          </td>
          <td width="115">
              <StaticDate
              name="dateTracked"
              value={this.state.importedExpenses.dateTracked} />
          </td>
          {this.state.importedExpenses ? <td width="auto"><Button onClick={this.handleEdit}>Edit</Button></td> : null}
          {this.state.importedExpenses ? <td width="auto"><Button onClick={this.handleUpdate}>Update</Button></td> : null}
          {this.state.importedExpenses ? <td width="auto"><Button onClick={this.handleDelete}>Delete</Button></td> : null}
          {this.state.importedExpenses ? null : <td width="auto"><Button onClick={this.handleAdd}>addExpense</Button></td>}
        </tr>
    );
  }
});

export default ExpenseNode;
