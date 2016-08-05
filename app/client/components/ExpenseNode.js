import React from 'react';
import { Link } from 'react-router';
import { Form, FormControl, Button, Modal, OverlayTrigger } from 'react-bootstrap';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ExpenseNode = React.createClass({
  componentWillMount() {
    // this.props.editMode = false;
    // this.props.editTable = () => (
    //   <Form inline>
    //     <tr>
    //       <td><FormControl type="text" value={this.props.expense.type} /></td>
    //       <td><FormControl type="text" value={this.props.expense.vertical} /></td>
    //       <td><FormControl type="text" value={this.props.expense.vendor} /></td>
    //       <td><FormControl type="text" value={this.props.expense.description} /></td>
    //       <td><FormControl type="text" value={this.props.expense.cost} /></td>
    //       <td><FormControl type="text" value={this.props.expense.method} /></td>
    //       <td><FormControl type="text" value={this.props.expense.category} /></td>
    //       <td><FormControl type="text" value={this.props.expense.glCode} /></td>
    //       <td><FormControl type="text" value={this.props.expense.dateSpent} /></td>
    //       <td><FormControl type="text" value={this.props.expense.dateTracked} /></td>
    //     </tr>
    //   </Form>
    // );
    // this.props.displayTable = () => (
    //   <tr>
    //     <td>{this.props.expense.type}</td>
    //     <td>{this.props.expense.vertical}</td>
    //     <td>{this.props.expense.vendor}</td>
    //     <td>{this.props.expense.description}</td>
    //     <td>{this.props.expense.cost}</td>
    //     <td>{this.props.expense.method}</td>
    //     <td>{this.props.expense.category}</td>
    //     <td>{this.props.expense.glCode}</td>
    //     <td>{this.props.expense.dateSpent}</td>
    //     <td>{this.props.expense.dateTracked}</td>
    //   </tr>
    // );

  },
  testing() {
    console.log("Refs are ", this.refs.readToggle);
    this.refs.readToggle.props.readOnly = false;
  },
  render() {
    return (
        <tr>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.type} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.vertical} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.vendor} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.description} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.cost} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.method} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.category} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.glCode} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.dateSpent} /></td>
          <td><FormControl ref="lookJear" readOnly type="text" value={this.props.expense.dateTracked} /></td>
        </tr>
    );
  }
});

export default ExpenseNode;
