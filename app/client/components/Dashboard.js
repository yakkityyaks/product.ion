import React from 'react';
// was comment.
const Dashboard = React.createClass({

  render() {
    return (
      <div className="dashboard">
        I'm the dashboard!
        {/* {this.props.projects.map((project, idx) =>
          <Project key={idx} idx={idx} {...this.props} project={project}/>)} */}
      </div>
    );
  }
});

export default Dashboard;
