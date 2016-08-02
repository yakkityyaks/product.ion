import React from 'react';
import { Link } from 'react-router';

// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ProjectNode = React.createClass({
  render() {
    // es6 syntax to create 3 variables that pull their data from
    // this.props
    // const { post, idx, comments } = this.props;
    return (
      <div className="projectNode">
        <span>    
          <b>Name: </b>{this.props.project.name}<b>  Project ID: </b>{this.props.project.projId}<b>  Project Status: </b>{this.props.project.status}<b>  Status: </b>{this.props.project.costToDate}<b>  Estimate to Complete: </b>{this.props.project.estimateToComplete}
        </span>
      </div>
    );

  }

});

export default ProjectNode;


// return (
//       <div className="projectNode">
//         {this.props.project.name + " , " + this.props.project.projId + " , " + this.props.project.status + " , " + this.props.project.costToDate + " , " + this.props.project.estimateToComplete}
//       </div>
//     );