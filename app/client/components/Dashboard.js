import React from 'react';
import Projects from './Projects';
import ProjectNode from './ProjectNode';
// was comment.

const Dashboard = React.createClass({
  componentDidMount() {
    console.log(this);
  },
  render() {
    return (
      <div className="dashboard">
        I'm the dashboard!
        {this.props.projects.map((project, idx) =>
          <ProjectNode key={idx} idx={idx} {...this.props} project={project}/>)}
      </div>
    );
  }
});

export default Dashboard;