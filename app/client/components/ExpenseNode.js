import React from 'react';
import { Link } from 'react-router';
import { Button, Form, FormControl, InputGroup, Modal, OverlayTrigger} from 'react-bootstrap';
import codes from "../data/expenseCodes.js";
import categories from "../data/expenseCategories.js";
import DateFormat from './formComponents/DateFormat.js';
import DatePicker from './formComponents/DatePicker.js';
import ReadOnlyText from './formComponents/ReadOnlyText.js';
import StaticDate from './formComponents/StaticDate.js';
import SelectInput from './formComponents/SelectInput.js';
import TextInput from './formComponents/TextInput.js';

const ExpenseNode = React.createClass({
  getInitialState: function() {
    return {
      importedExpenses: this.props.expense,
      readOnlyStatus: this.props.readOnlyStatus,
      category: "Producer",
      cost: 0,
      dateSpent: "",
      dateTracked: "",
      description: "",
      glCode: 560260,
      id: 0,
      method: "Credit Card",
      vendor: ""
    };
  },

  componentWillReceiveProps: function() {
    this.setState({importedExpenses: this.props.expense});
  },

  componentDidMount: function(){
    if(this.state.dateTracked === ''){
      var newDate = new Date();
      var today = {}
      var formattedDate = newDate.format("mm/dd/yyyy");
      var rawDate = newDate;
      today.formattedDate = formattedDate;
      today.rawDate = rawDate;
      console.log('in the node ',today)
      this.setState({dateTracked: today})
    }
  },

  handleAdd: function(){
    var singleExpense = {
      category: this.state.category,
      cost: this.state.cost,
      dateSpent: this.state.dateSpent.rawDate,
      dateTracked: this.state.dateTracked.rawDate,
      description: this.state.description,
      glCode: this.state.glCode,
      method: this.state.method,
      vendor: this.state.vendor
    }
    console.log('handleAdd built this expense object ', singleExpense);
    this.props.handleNewExpense(singleExpense);
  },

  handleChange: function(inputName, inputValue) {
    console.log("handleChange set the state of ", inputName, "to ", inputValue);
    var nextState = {};
    nextState[inputName] = inputValue;
    this.setState(nextState);
    if(inputName === "category"){
      for (var key in codes){
        if(inputValue === key){
          this.setState({glCode: codes[key]});
        }
      }
    }
  },

  handleDelete: function(){
    var expenseToDelete = this.props.expense;
    console.log('handleDelete built this expense object ', expenseToDelete);
    this.props.handleExpenseToDelete(expenseToDelete);
  },

  handleEdit: function(){
    var off = false;
    this.setState({readOnlyStatus: off})
    this.setState({category:this.props.expense.category})
    this.setState({cost:this.props.expense.cost})
    this.setState({dateSpent:this.props.expense.dateSpent})
    this.setState({dateTracked:this.props.expense.dateTracked})
    this.setState({description:this.props.expense.description})
    this.setState({glCode:this.props.expense.glCode})
    this.setState({id:this.props.expense.id})
    this.setState({method:this.props.expense.method})
    this.setState({vendor:this.props.expense.vendor})
    console.log('readonlyStatus in the Expense node is ', this.state.readOnlyStatus);
    console.log('handleEdit is tracking the current expense id: ', this.props.expense.id);
  },

  handleUpdate: function(){
    var off = true;
    this.setState({readOnlyStatus: off}, function(){
    var expenseToUpdate = {
      category:this.state.category,
      cost:this.state.cost,
      dateSpent:this.state.dateSpent.rawDate || this.state.dateSpent,
      dateTracked:this.state.dateTracked.rawDate || this.state.dateTracked,
      description:this.state.description,
      glCode:this.state.glCode,
      id:this.state.id,
      method:this.state.method,
      vendor:this.state.vendor
    }
    console.log('handleUpdate built this expense object ', expenseToUpdate);
    this.props.handleExpenseUpdate(expenseToUpdate);
    })
    console.log('READONLY status is ', this.state.readOnlyStatus)
  },

  render() {
    return (
      <tr>
        <td>
          {this.state.readOnlyStatus === true ?
            <ReadOnlyText
              name="vendor"
              value={this.state.importedExpenses.vendor} /> :
            this.state.importedExpenses.vendor ?
            <TextInput
              name="vendor"
              value={this.state.importedExpenses.vendor}
              onChange={this.handleChange} /> :
            <TextInput
              name="vendor"
              onChange={this.handleChange} />
          }
        </td>
        <td>
          {this.state.readOnlyStatus === true ?
            <ReadOnlyText
              name="description"
              value={this.state.importedExpenses.description} /> :
            this.state.importedExpenses.description ?
            <TextInput
              name="description"
              value={this.state.importedExpenses.description}
              onChange={this.handleChange} /> :
            <TextInput
              name="description"
              onChange={this.handleChange} />
          }
        </td>
        <td  width="115">
          {this.state.readOnlyStatus === true ?
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
                <ReadOnlyText
                  name="cost"
                  value={this.state.importedExpenses.cost} />
            </InputGroup> :
            this.state.importedExpenses.cost ?
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
                <TextInput
                  name="cost"
                  value={this.state.importedExpenses.description}
                  onChange={this.handleChange} />
            </InputGroup> :
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
                <TextInput
                  name="cost"
                  onChange={this.handleChange} />
            </InputGroup>
          }
        </td>
        <td width="135">
          {this.state.readOnlyStatus === true ?
            <ReadOnlyText
              name="method"
              value={this.state.importedExpenses.method} /> :
            <SelectInput
              name="method"
              onChange={this.handleChange}
              options={['Credit Card', 'Invoice', 'Payroll', 'Petty Cash', 'Misc']} />
          }
        </td>
        <td>
          {this.state.readOnlyStatus === true ?
            <ReadOnlyText
              name="category"
              value={this.state.importedExpenses.category} /> :
            <SelectInput
              name="category"
              onChange={this.handleChange}
              options={categories} />
            }
          </td>
          <td width="93">
            {this.state.readOnlyStatus === true ?
              <ReadOnlyText
                name="glCode"
                value={this.state.importedExpenses.glCode} /> :
              <ReadOnlyText
                name="glCode"
                value={this.state.glCode} />
            }
          </td>
          <td width="125">
            {this.state.readOnlyStatus === true ?
              <StaticDate
                name="dateSpent"
                value={this.state.importedExpenses.dateSpent} /> :
              <DatePicker
                name="dateSpent"
                onChange={this.handleChange} />
            }
          </td>
          <td width="125">
            <StaticDate
              name="dateTracked"
              value={this.state.importedExpenses.dateTracked} />
          </td>
          {this.state.importedExpenses ? <td width="auto"><Button onClick={this.handleEdit}>Edit</Button></td> : null}
          {this.state.importedExpenses ? <td width="auto"><Button onClick={this.handleUpdate}>Update</Button></td> : null}
          {this.state.importedExpenses ? <td width="auto"><Button onClick={this.handleDelete}>Delete</Button></td> : null}
          {this.state.importedExpenses ? null : <td width="auto"><Button onClick={this.handleAdd}>addExpense</Button></td>}
        </tr>
    );
  }
});

export default ExpenseNode;
