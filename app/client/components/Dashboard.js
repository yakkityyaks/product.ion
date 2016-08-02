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
        <Projects {...this.props}/>
      </div>
    );
  }
});

export default Dashboard;
        // {this.props.projects.map((project, idx) =>
        //   <ProjectNode key={idx} idx={idx} {...this.props} project={project}/>)}
