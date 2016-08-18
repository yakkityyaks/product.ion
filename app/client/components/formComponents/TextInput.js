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
        onChange = {this.handleInputChange}
        placeholder={this.props.name}>
      </FormControl>
    );
  }
});

export default TextInput;
