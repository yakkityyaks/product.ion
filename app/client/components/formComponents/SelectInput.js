import React, { Component } from 'react'
import Dropdown from 'react-dropdown'
import { FormControl } from 'react-bootstrap';


const SelectInput = React.createClass({

  getInitialState: function() {
    return {
      input: this.props.value,
      options: this.props.options
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

  render () {

    return (
        <div className="selectInput">
        <FormControl componentClass="select" value={this.state.input} onChange={this.handleInputChange}>
            {this.state.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </FormControl>
        </div>
    );
  }
});

export default SelectInput;
