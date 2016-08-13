import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import { FormControl } from 'react-bootstrap';

const DatePicker = React.createClass({
  componentDidMount: function(){
    var value = this.props.value;
  },

  handleInputChange: function(e) {
    e.preventDefault();
    var date = e.target.value.split('-');
    var mm = date[1];
    var dd = date[2];
    var yyyy = date[0];
    var data = mm+'-'+dd+'-'+yyyy;
    this.props.onChange(e.target.name, data);
  },

  render() {
    return (
       <FormControl
         name={this.props.name}
         className="form__field-input"
         readOnly={this.props.readOnlyStatus}
         type = "date"
         value = {this.props.value}
         onChange = {this.handleInputChange}
         placeholder={this.props.value} />
    );
  }
});

export default DatePicker;
