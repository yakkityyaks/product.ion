import React from 'react';
import { Link } from 'react-router';
import Dropdown from 'react-dropdown';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { findDOMNode } from 'react-dom';


const Budget = React.createClass({

    getInitialState: function() {
      return {
        selected: { value: null, label: 'Select a Budget Item'},
        currentRow: {value: 0, label: ""},
        inputs : []
      };
    },

    _onSelect: function(option) {
      option = this.props.option;
      this.setState({currentRow: option})
      console.log('the option is ', this.state.inputs)
    },
    _onCostChange: function(option) {
      option = this.props.BugetItemCost.value;


    },
    addInputField: function(e) {
      e.preventDefault();
      var inputs = this.state.inputs;
      inputs.push(this.state.currentRow);
      this.setState({currentRow: this.state.selected})
      this.setState({inputs : inputs});
      console.log("Input state is now ", this.state.inputs)
    },
    removeInputField: function(index) {
        var inputs = this.state.inputs;
        inputs.splice(index, 1);
        this.setState({inputs : inputs});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var budget = this.state.inputs
        console.log('the budget is', budget);
    // this.props.postNewBudget(budget);
    },

    render: function (){
        var inputs = this.state.inputs;

        const options = [
      {
       type: 'group', name: 'Production-CREW', items: [
         { value: {Producer: 'Producer', code: 99999}, label: 'Producer' },
         { value: 'Associate Producer', label: 'Associate Producer' },
         { value: 'Production Assistant', label: 'Production Assistant' },
         { value: 'Set Production Assistant', label: 'Set Production Assistant' },
         { value: 'Intern', label: 'Intern' },
         { value: 'Director', label: 'Director' },
         { value: 'Writer', label: 'Writer' },
         { value: 'Director of Photography', label: 'Director of Photography' },
         { value: 'Camera Operator', label: 'Camera Operator' },
         { value: 'Assistant Camera', label: 'Assistant Camera' },
         { value: 'Audio Operator', label: 'Audio Operator' },
         { value: 'Gaffer/Grip/Best Boy', label: 'Gaffer/Grip/Best Boy' },
         { value: 'Set Design', label: 'Set Design' },
         { value: 'Location Manager', label: 'Location Manager' },
         { value: 'Make-Up Artist', label: 'Make-Up Artist' },
         { value: 'Hair Stylist', label: 'Hair Stylist' },
         { value: 'Wardrobe Stylist', label: 'Wardrobe Stylist' },
         { value: 'Wardrobe Allowance', label: 'Wardrobe Allowance' },
         { value: 'Photographer', label: 'Photographer' }
       ]
      },
      {
       type: 'group', name: 'Production-CAST', items: [
         { value: 'On-Camera Talent', label: 'On-Camera Talent' }
       ]
      },
      {
       type: 'group', name: 'Production-EQUIPMENT', items: [
         { value: 'Camera Rental', label: 'Camera Rental' },
         { value: 'Lighting Rental', label: 'Lighting Rental' },
         { value: 'Misc Equipment Rental', label: 'Misc Equipment Rental' },
         { value: 'Props', label: 'Props' }
       ]
      },
      {
       type: 'group', name: 'Production-GENERAL', items: [
         { value: 'Insurance', label: 'Insurance' },
         { value: 'Meals & Craft Service', label: 'Meals & Craft Service' },
         { value: 'Hosting Service', label: 'Hosting Service' },
         { value: 'Taxis & Local Transpo', label: 'Taxis & Local Transportation' },
         { value: 'Airfare', label: 'Airfare' },
         { value: 'Hotel', label: 'Hotel' },
         { value: 'Car Rental', label: 'Car Rental' },
         { value: 'Gas, Tolls, Parking', label: 'Gas, Tolls, Parking' },
         { value: 'Research Materials', label: 'Research Materials' },
         { value: 'Location Fees & Permits', label: 'Location Fees & Permits' }
       ]
      },
      {
       type: 'group', name: 'Post-Production-EDITING', items: [
         { value: 'Editor', label: 'Editor' },
         { value: 'Assistant Editor', label: 'Assistant Editor' },
         { value: 'Edit Suite', label: 'Edit Suite' },
         { value: 'Color Correction', label: 'Color Correction' },
         { value: 'Audio Mix', label: 'Audio Mix' },
         { value: 'Design & Motion GFX', label: 'Design & Motion GFX' },
         { value: 'Transcription', label: 'Transcription' },
         { value: 'Misc Post', label: 'Misc Post' },
         { value: 'Photo Licensing', label: 'Photo Licensing' },
         { value: 'Footage Licensing', label: 'Footage Licensing' },
         { value: 'Music Licensing', label: 'Music Licensing' }
       ]
      }
    ]

    const defaultOption = this.state.selected

        return (
           <div className="Budget">
             <Form onSubmit={this.handleSubmit}>
               <FormControl
                 componentClass="label">
                   Budget
               </FormControl>
                   {inputs.map(function (input, idx) {
                       var ref = "input_" + idx;
                       return (
                         <div>
                           <Dropdown options={options} onChange={this._onSelect} value={this.state.inputs[idx] || defaultOption} placeholder="Select an option" />
                           <div className="input-group" key={idx}>
                                 <FormControl
                                   componentClass="input"
                                   placeholder="Cost"
                                   ref="BugetItemCost"
                                   >
                                 </FormControl>
                                <Button
                                  bsSize="xsmall"
                                  onClick={this.removeInputField.bind(this, idx)}>
                                    Remove Field
                                </Button>
                           </div>
                         </div>
                       )
                   }.bind(this))}
                   <Button onClick={this.addInputField}>
                     Add a Budget Item
                   </Button>
               <Button type="submit">
                 Submit your Budget
               </Button>
             </Form>
           </div>
        );
    }
});

export default Budget;
