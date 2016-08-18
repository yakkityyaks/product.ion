import React from 'react';
import { Link } from 'react-router';
import { Button, Form, FormControl, InputGroup, Modal, OverlayTrigger} from 'react-bootstrap';
import CurrentDate from './formComponents/CurrentDate.js';
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
    this.Date();
  },

  Date: function(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    var dates = {};
    dates.rawDate = today;
    dates.formattedDate = mm+'/'+ dd + '/' + yyyy
    this.setState({dateTracked: dates});
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
    console.log('addExpense built ', singleExpense);
    this.props.handleNewExpense(singleExpense);
  },

  handleChange: function(inputName, inputValue) {
    console.log("The input name is ", inputName, "This is the value ", inputValue);
    var nextState = {};
    nextState[inputName] = inputValue;
    this.setState(nextState);
    var codes = {'Consultant': 580200, 'Writer': 560100, 'Director': 560270,
    'Producer': 560260, 'Associate Producer': 560260, 'Production Assistant':  560230,
    'Research Materials': 545010, 'On-Camera Talent': 560250, 'Make-Up Artist': 560350,
    'Hair Stylist':  560350, 'Wardrobe Stylist':  560350, 'Wardrobe Allowance': 560350,
    'Director of Photography': 560220, 'Camera Operator': 560220, 'Assistant Camera': 560230,
    'Audio Operator': 560210, 'Gaffer/Grip/Best Boy': 560220, 'Photographer':  560450, 'Set PA': 560230,
    'Intern': 500120, 'Camera Rental': 570100, 'Lighting Rental':  570100, 'Misc Equipment Rental':570100,
    'Location Fees & Permits': 570150, 'Location Manager': 570150, 'Set Design': 570150, 'Props': 545100,
    'Meals & Craft Service': 590200, 'Taxis & Local Transpo': 590500, 'Airfare': 590400, 'Hotel': 590300,
    'Car Rental': 590400, 'Gas, Tolls, Parking': 590600, 'Editor': 560240, 'Assistant Editor': 560240,
    'Edit Suite': 560240, 'Design & Motion GFX': 660400, 'Transcription': 515250, 'Color Correction': 515250,
    'Audio Mix': 515250, 'Misc Post': 515250, 'Photo Licensing': 564000, 'Footage Licensing': 570200,
    'Music Licensing': 570200, 'Insurance':  null, 'Hosting Service': 500950, 'Third Party Production': 560275,
    'Third Party Production - Licensing': 560280};
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
  },

  handleUpdate: function(){
    var on = true;
    this.setState({readOnlyStatus: on})
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
            title={this.state.importedExpenses.vendor}
            value={this.state.importedExpenses.vendor} />
        </td>
        <td>
          <TextInput
            name="description"
            onChange={this.handleChange}
            readOnlyStatus={this.state.readOnlyStatus}
            title={this.state.importedExpenses.description}
            value={this.state.importedExpenses.description} />
        </td>
        <td>
          <InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
               <TextInput
                 name="cost"
                 onChange={this.handleChange}
                 readOnlyStatus={this.state.readOnlyStatus}
                 title={this.state.importedExpenses.cost}
                 value={this.state.importedExpenses.cost} />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup></td>
        <td>
          {(this.state.importedExpenses.method && this.state.readOnlyStatus === true) ?
          <TextInput
            name="method"
            onChange={this.handleChange}
            readOnlyStatus={this.state.readOnlyStatus}
            title={this.state.importedExpenses.method}
            value={this.state.importedExpenses.method} /> :
          <SelectInput
            name="method"
            onChange={this.handleChange}
            options={['Credit Card', 'Invoice', 'Payroll', 'Petty Cash', 'Misc']}
            readOnlyStatus={this.state.readOnlyStatus}
            title ="Method"
            value={this.state.importedExpenses.method} />
          }
        </td>
        <td>
          {(this.state.importedExpenses.category && this.state.readOnlyStatus === true) ?
            <TextInput
              name="category"
              onChange={this.handleChange}
              readOnlyStatus={this.state.readOnlyStatus}
              title={this.state.importedExpenses.category}
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
            title ="category"
            value={this.state.importedExpenses.category} />
          }
        </td>
        <td width="87">
          {this.state.importedExpenses.glCode ? <TextInput value={this.state.importedExpenses.glCode} readOnlyStatus={true} /> :
          <TextInput value={this.state.glCode} readOnlyStatus={true} />
          }
        </td>
        <td width="115">
          {(this.state.importedExpenses.dateSpent && this.state.readOnlyStatus === true) ?
            <StaticDate name="dateSpent" value={this.state.importedExpenses.dateSpent} readOnlyStatus={this.state.readOnlyStatus} /> :
          <DatePicker
            name="dateSpent"
            onChange={this.handleChange}
            readOnlyStatus={this.state.readOnlyStatus}
            title={this.state.dateSpent}
            value={this.state.importedExpenses.dateSpent ? this.state.importedExpenses.dateSpent: this.state.dateSpent} />}
        </td>
        <td width="115">
          {this.state.importedExpenses.dateTracked ?
          <StaticDate name="dateTracked" value={this.state.importedExpenses.dateTracked} readOnlyStatus={this.state.readOnlyStatus} /> :
          <TextInput name="dateTracked" value={this.state.dateTracked.formattedDate} readOnlyStatus={true} />
          }
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
