import React from 'react';
import { FormControl } from 'react-bootstrap';

const TextInput = React.createClass({
  handleInputChange: function(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  },

  render() {
    return (
      <FormControl
        componentClass="input"
        name={this.props.name}
        readOnly={this.props.readOnlyStatus}
        value = {this.props.value}
        onChange = {this.handleInputChange}
        placeholder={this.props.title}>
      </FormControl>
    );
  }
});

export default TextInput;
