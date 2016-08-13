import React from 'react';
import { FormControl } from 'react-bootstrap';

const CurrentDate = React.createClass({
  getInitialState: function() {
    return {
      date: this.props.value
    };
  },

  componentDidMount: function(){
    this.Date();
  },

  handleInputChange: function(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  },

  Date: function(){var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    this.setState({date: mm+'/'+ dd + '/' + yyyy})
  },

  render() {
    return (
      <FormControl
        readOnly
        value={this.state.date}
        ></FormControl>
    );
  }
});

export default CurrentDate;
