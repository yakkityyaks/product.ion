import React from 'react';
import { Link } from 'react-router';
import { Button, Label, Modal, Panel, Table } from 'react-bootstrap';
import Papa from 'papaparse';
import ApiCall from "../utils/serverCalls";
import DashCharts from './DashCharts';
import NavBar from './NavBar';
import Pitch from './Pitch';
import ProjectNode from './ProjectNode';
import Projects from './Projects';

const Dashboard = React.createClass({
  getInitialState() {
    return {
      open: false,
      editProject: null
    };
  },

  componentWillMount() {
    var orgName = this.props.organization.orgName;
    this.props.getOrgProjects(orgName);
  },

  switchChart() {
    this.setState({open: !this.state.open});
  },

  switchModal(Project) {
    if (Project !== null) {
      this.setState({editProject: Project});
    } else {
      this.setState({editProject: null});
    }
    this.props.changeModal('pitch');
  },

  exportCSV() {
    var fields = [
    "Project",
    "Name",
    "Project ID",
    "Type",
    "Vertical",
    "Tier",
    "Status",
    "Number of Assets",
    "Start Date",
    "End Date",
    "Edit Date",
    "Release Date",
    "Requested Budget",
    "Cost to Date",
    "Estimate to Complete",
    "Expense",
    "Category",
    "GL Code",
    "Date Spent",
    "Date Tracked",
    "Vendor",
    "Method",
    "Description",
    "Cost"
  ];
    var getProj = this.getProj;
    var ids = [];
    this.props.projects.forEach(function(proj) {
      ids.push(proj.projId);
    });
    ApiCall.getExpenses(ids).then(function(res) {
      console.log(res);
      var exps = res.data.reduce(function(a,b) {
          return a.concat(b);
        }, []);
      var data = [];
      for (var i = 0; i < exps.length; i++) {
        var proj = getProj(exps[i].projs_id);
        data.push([
          ' ',
          proj.name,
          proj.projId,
          proj.type,
          proj.vertical,
          proj.tier,
          proj.status,
          proj.numAssets,
          proj.startDate,
          proj.endDate,
          proj.editDate,
          proj.releaseDate,
          proj.reqBudget,
          proj.costToDate,
          proj.estimateToComplete,
          ' ',
          exps[i].category,
          exps[i].glCode,
          exps[i].dateSpent,
          exps[i].dateTracked,
          exps[i].vendor,
          exps[i].method,
          exps[i].description,
          exps[i].cost
        ]);
      }
      var csv = {fields: fields, data: data};
      csv = Papa.unparse(csv);
      var hiddenElement = document.createElement('a');
      hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
      hiddenElement.target = '_blank';
      hiddenElement.download = 'data.csv';
      hiddenElement.click();
    });
  },

  getProj(id) {
    for (var i = 0; i < this.props.projects.length; i++) {
      if (this.props.projects[i].id === id) { console.log(this.props.projects[i]); return this.props.projects[i];};
    }
    return 'proj not found';
  },

  render() {
    return (
      <div className="dashboard">

        <Panel>
          <NavBar {...this.props}/>
        </Panel>

        <div>

          <Modal show={this.props.modals.pitch} onHide={this.switchModal} >
            <Modal.Body>
              <Pitch {...this.props} data={this.state.editProject}/>
            </Modal.Body>
            <Modal.Footer />

          </Modal>

          <Panel>
            <h2>{"Welcome to " + this.props.organization.orgName + "'s dashboard"}</h2>
            <div>
              <Button onClick={this.exportCSV} bsStyle="primary" bsSize="large" id="csvExport">Export Projects/Expenses to a CSV</Button>
            </div>
            <br></br>
            <div>
              {
                this.props.organization.user.perm === 0 ?
                (<Link to="/mastersheet">
                  <Button bsStyle="primary" bsSize="large">Click for Master Sheet</Button>
                </Link>) :
                <div></div>
              }
            </div>

            <h3>Data Visualization!!!</h3>
            <Button bsStyle="primary" onClick={this.switchChart}>Click for Visuals</Button>
            {this.state.open ? <DashCharts {...this.props}/> : null}

            <h3>Most Recent Three Projects</h3>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Project ID</th>
                  <th>Project Status</th>
                  <th>Cost to Date</th>
                  <th>Estimate to Complete</th>
                </tr>
              </thead>
              <tbody>
              {
                this.props.projects.length > 0 ? this.props.projects.slice(-3).map(function(proj, idx) {
                  return <ProjectNode key={idx} {...this.props} project={proj} switchModal={this.switchModal}/>
                }, this) : null
              }
              </tbody>
            </Table>

            {
              this.props.organization.user.perm === 0 ?
              <div>
                <h3>Pitches to be Approved</h3>
                <Table striped bordered>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Project ID</th>
                      <th>Project Status</th>
                      <th>Cost to Date</th>
                      <th>Estimate to Complete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props.projects.length > 0 ? this.props.projects.filter(function(proj) {
                        return proj.status === "Pitch";
                      }).map(function(proj, idx) {
                        return <ProjectNode key={idx} {...this.props} project={proj} switchModal={this.switchModal}/>
                      }, this) : null
                    }
                  </tbody>
                </Table>
              </div> :
              this.props.organization.user.perm === 1 ? <div><h3>Pitches awaiting Approval</h3></div> : <div></div>
            }
          </Panel>
        </div>
      </div>
    );
  }
});

export default Dashboard;
