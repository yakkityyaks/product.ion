import React from 'react';
import { Link, browserHistory } from 'react-router';
import { Button, Modal, OverlayTrigger } from 'react-bootstrap';


const ProjectNode = React.createClass({
  toDollar(num) {
    return "$" + num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
  },
  showExpensePage () {
    this.props.getExpenses(this.props.project.projId);
  },
  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    // const { post, idx, comments } = this.props;
    const { name, projId, status, costToDate, estimateToComplete } = this.props.project;

    return (
      <tr onClick={this.showExpensePage}>
        <td>{name}</td>
        <td>{projId}</td>
        <td>{status}</td>
        <td>{this.toDollar(costToDate)}</td>
        <td>{this.toDollar(estimateToComplete)}</td>
      </tr>
    );
  }
});

export default ProjectNode;
