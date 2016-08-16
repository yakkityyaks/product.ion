import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import { FormControl } from 'react-bootstrap';

const DatePicker = React.createClass({

  componentDidMount: function(){
    console.log('in the date picker ', this.props.value)
  },

  handleInputChange: function(e) {
    e.preventDefault();
    var date = e.target.value.split('-');
    var mm = date[1];
    var dd = date[2];
    var yyyy = date[0];
    var data = mm+'-'+dd+'-'+yyyy;
    var formats = {};
    formats.rawDate = e.target.value;
    formats.formattedDate = data;
    this.props.onChange(e.target.name, formats);
  },

  render() {
    return (
      <FormControl
        name={this.props.name}
        readOnly={this.props.readOnlyStatus}
        type = "date"
        onChange = {this.handleInputChange} />
    );
  }
});

export default DatePicker;
