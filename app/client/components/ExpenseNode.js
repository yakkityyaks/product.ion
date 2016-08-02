import React from 'react';
import { Link } from 'react-router';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ExpenseNode = React.createClass({
  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    // const { post, idx, comments } = this.props;
    return (
      <tr>
        <td>{this.props.expense.type}</td>
        <td>{this.props.expense.vertical}</td>
        <td>{this.props.expense.category}</td>
        <td>{this.props.expense.glCode}</td>
        <td>{this.props.expense.dateSpent}</td>
        <td>{this.props.expense.dateTracked}</td>
        <td>{this.props.expense.vendor}</td>
        <td>{this.props.expense.method}</td>
        <td>{this.props.expense.description}</td>
        <td>{this.props.expense.cost}</td>
      </tr>
    );
  }
});

export default ExpenseNode;
