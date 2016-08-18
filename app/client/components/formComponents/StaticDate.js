import React from 'react';
import { FormControl } from 'react-bootstrap';

const StaticDate = React.createClass({
  getInitialState: function() {
    return {
      date: this.props.value
    };
  },

  componentDidMount: function(){
    var date = this.state.date.split('-', 3)
    console.log('in the static date picker ', date)
    var dd = date.pop().split("T").shift();
    var mm = date[1];
    var yyyy = date[0];
    this.setState({date: mm+'/'+ dd + '/' + yyyy})
  },

  render() {
    return (
      <FormControl
        readOnly={this.props.readOnlyStatus}
        value={this.state.date}>
      </FormControl>
    );
  }
});

export default StaticDate;
