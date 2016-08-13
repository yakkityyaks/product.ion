import React from 'react';
import DayPicker, { DateUtils } from "react-day-picker";
import { FormControl } from 'react-bootstrap';

function sunday(day) {
  return day.getDay() === 0;
}

const DatePicker = React.createClass({

  getInitialState: function() {
    return {
      input: this.props.value
    };
  },

  handleInputChange: function(e) {
    this.setState({input: e.target.value});
    var input = this.state.input.trim();
    if (!input) {
      return;
    }
    this.props.onInput(input);
  },

  render() {
    return (
      <div className="dateInput">
         <label
         className="form__field-label"
         htmlFor="endDate">
           {this.props.title}
         </label>
         <FormControl
           format='dd/mm/yyyy'
           className="form__field-input"
           type = "date"
           value = {this.state.input}
           onChange = {this.handleInputChange}
           placeholder={this.props.title}/>
      </div>
    );
  }
});

export default DatePicker;
