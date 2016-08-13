import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import { FormControl } from 'react-bootstrap';


const SelectInput = React.createClass({

  handleInputChange: function(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  },

  render () {

    return (
        <div className="selectInput">
          <FormControl
            componentClass="select"
            readOnly={this.props.readOnlyStatus}
            name={this.props.name}
            onChange={this.handleInputChange}>
              {this.props.options.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
              ))}

            value={this.props.value}
          </FormControl>
        </div>
    );
  }
});

export default SelectInput;
