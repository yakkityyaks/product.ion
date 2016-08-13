import React from 'react';
import { Button, FormControl, InputGroup, Panel} from 'react-bootstrap';

const StaticExpenseNode = React.createClass({
  getInitialState: function() {
    return {
      expenses: [],
      readOnly: true
    };
  },
  componentDidMount: function(){
    console.log('the props passed', this.props.expenses)
    this.setState({expenses: this.props.expenses});
  },

  handleUpdate: function(){
    var on = true;
    this.setState({readOnly: on})
    console.log('readonly is ', this.state.readOnly)
  },
  handleEdit: function(){
    var off = false;
    this.setState({readOnly: off})
    console.log('readonly is ', this.state.readOnly)
  },

  render() {
    return (
        <tr>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.type}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.vertical}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.vendor}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.description}></FormControl></td>
          <td width="auto"><InputGroup>
            <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl readOnly={this.state.readOnly} value={this.state.expenses.cost}></FormControl>
            <InputGroup.Addon>.00</InputGroup.Addon>
          </InputGroup></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.method}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.category}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.glCode}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.dateSpent}></FormControl></td>
          <td width="auto"><FormControl readOnly={this.state.readOnly} value={this.state.expenses.dateTracked}></FormControl></td>
          <td width="auto"><Button onClick={this.handleEdit}>Edit</Button></td>
          <td width="auto"><Button onClick={this.handleUpdate}>Update</Button></td>
        </tr>
    );
  }
});

export default StaticExpenseNode;
