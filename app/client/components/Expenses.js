import React from 'react';
import { Link } from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
// import ExpenseNode from './ExpensesNode.js';

const Expenses = React.createClass({
  render() {
    return (
      <div style={{fontSize : "14px"}}>
      	<table style={{width: "100%"}}>
      		<thead>
      			<tr>
      				<th>Type</th>
      				<th>Vertical</th>
      				<th>Project Name</th>
      				<th>Project ID</th>
      				<th>Expense Category</th>
              <th>GL Code</th>
              <th>Date Spent</th>
              <th>Date Tracked</th>
              <th>Vendor</th>
              <th>Method</th>
              <th>Description</th>
              <th>Cost</th>
      			</tr>
      		</thead>
      		<tbody>
      			{this.props.expenses.map(
      				(expense, idx) =>
          			<ExpenseNode key={idx} idx={idx} {...this.props} expense={expense} />)}
      		</tbody>
      	</table>
      </div>
    );
  }
});

export default Expenses;
