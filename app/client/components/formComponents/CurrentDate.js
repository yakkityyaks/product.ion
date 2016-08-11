import React from 'react';
import { Panel } from 'react-bootstrap';

const TextInput = React.createClass({
  getInitialState: function() {
    return {
      date: this.props.value
    };
  },

  Date: function(){var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    this.setState({date: mm+'/'+ dd + '/' + yyyy})
  },

  componentDidMount: function(){
    this.Date();
  },

  render() {
    return (
      <Panel>{this.state.date}</Panel>
    );
  }
});
export default TextInput;
