import React from 'react';
import { FormControl } from 'react-bootstrap';
import DateFormat from './DateFormat';


const StaticDate = React.createClass({
  getInitialState: function() {
    return {
      date: this.props.value
    };
  },

  componentDidMount: function(){
    if(this.state.date === undefined || this.state.date === null){
      var newDate = new Date();
      var today = newDate.format("mm/dd/yyyy")
      this.setState({date: today})
    } else {
      var date = this.state.date.split('-', 3)
      var dd = date.pop().split("T").shift();
      var mm = date[1];
      var yyyy = date[0];
      this.setState({date: mm+'/'+ dd + '/' + yyyy})
    }
  },

  render() {
    return (
      <FormControl
        readOnly
        value={this.state.date}>
      </FormControl>
    );
  }
});

export default StaticDate;
