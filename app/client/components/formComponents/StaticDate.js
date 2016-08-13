import React from 'react';
import { FormControl } from 'react-bootstrap';

const StaticDate = React.createClass({
  getInitialState: function() {
    return {
      date: ''
    };
  },

  Date: function(){
    var date = this.props.value.split('-', 3)
    var dd = date.pop().split("T").shift();
    var mm = date[1];
    var yyyy = date[0];
    this.setState({date: mm+'/'+ dd + '/' + yyyy})
  },

  componentDidMount: function(){
    this.Date();
  },

  render() {
    return (
      <FormControl readOnly value={this.state.date}></FormControl>
    );
  }
});

export default StaticDate;
