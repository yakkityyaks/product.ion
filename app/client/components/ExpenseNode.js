import React from 'react';
import { Button, FormControl, InputGroup} from 'react-bootstrap';
import SelectInput from './formComponents/SelectInput.js';
import TextInput from './formComponents/TextInput.js';
import CurrentDate from './formComponents/CurrentDate.js';
import DatePicker from './formComponents/DatePicker.js';

const ExpenseNode = React.createClass({
  getInitialState: function() {
    return {
      expense: this.props.expense,
      date: this.props.expense,
      glCode: ''
    };
  },

  handleChange: function(e) {
    console.log([e.target.name])
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
    // this.props.removeExpense(this.props.expense.id, this.props.projId, this.props.projs_id);
  },

  componentDidMount: function(){
    console.log("the date is ", this.state.expense)
  },

  handleGLCode: function(value){
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

    for (var key in codes){
      if(value === key){
        console.log(codes[key]);
      }
    }
  },

  render() {
    return (
        <tr>
          <td width="auto">
            <SelectInput title ="Type" value={this.state.expense.type} name="type" onInput={this.handleChange} options={['Video Originals', 'Branded', 'Editorial', 'Debt Expenses']} />
          </td>
          <td width="auto">
            <SelectInput title ="Vertical" value={this.state.expense.vertical} name="vertical" onInput={this.handleChange} options={['Food', 'Beauty', 'Fashion & Style', 'News & Politics', 'News & Celeb', 'Wellness', 'Entertainment']} />
          </td>
          <td width="auto"><TextInput title={this.state.expense.vendor} value={this.state.expense.vendor} onInput={this.handleChange} /></td>
          <td width="auto"><TextInput title={this.state.expense.description} value={this.state.expense.description} onInput={this.handleChange} /></td>
          <td width="auto"><InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
               <TextInput title={this.state.expense.cost} value={this.state.expense.cost} onInput={this.handleChange} />
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup></td>
          <td width="auto">
            <SelectInput title ="Method" value={this.state.expense.method} name="method" onInput={this.handleChange} options={['Credit Card', 'Invoice', 'Payroll', 'Petty Cash', 'Misc']} />
          </td>
          <td width="auto">
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
          <td width="auto"><FormControl readOnly value={this.state.expense.glCode}></FormControl></td>
          <td width="auto"><DatePicker title={this.state.dateSpent} value={this.state.dateSpent} onInput={this.handleChange} /></td>
          <td width="auto"><CurrentDate value={this.state.dateTracked}/></td>
          <td><Button onClick={this.handleUpdate}>Update</Button></td>
          <td><Button onClick={this.handleRemove}>Remove</Button></td>
        </tr>
    );
  }
});

export default ExpenseNode;
