import React from 'react';
import { Link } from 'react-router';

// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ProjectNode = React.createClass({
  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    // const { post, idx, comments } = this.props;
    return (
      <tr>
        <td>{this.props.project.name}</td>
        <td>{this.props.project.projId}</td>
        <td>{this.props.project.status}</td>
        <td>{this.props.project.costToDate}</td>
        <td>{this.props.project.estimateToComplete}</td>
      </tr>
    );

  }

});

export default ProjectNode;