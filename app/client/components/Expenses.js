import React from 'react';
import { Link } from 'react-router';
import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import { Panel } from 'react-bootstrap';

const Expenses = React.createClass({

  render() {
    console.log("Props are ", this.props.expenses);

    return (
      <div>
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
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
        			{
                this.props.expenses["1"] && this.props.expenses["1"].map(
        				(expense, idx) =>
            			<ExpenseNode key={idx} idx={idx} {...this.props} expense={expense} />)
                }
        		</tbody>
        	</table>
        </div>
      </div>
    );
  }
});

export default Expenses;
