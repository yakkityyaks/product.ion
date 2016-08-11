import React from 'react';
import { FormControl } from 'react-bootstrap';

const TextInput = React.createClass({
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
      <FormControl
        componentClass="input"
        value = {this.state.input}
        onChange = {this.handleInputChange}
        placeholder={this.props.title}>
      </FormControl>
    );
  }
});
export default TextInput;
