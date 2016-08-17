import React from 'react';

import { ControlLabel, Tabs, Tab } from 'react-bootstrap';

import Budget from "./Budget";
import PitchSummary from "./PitchSummary";

import { judy } from "../data/public";

const Pitch = React.createClass({
  getInitialState() {
    console.log("Opening Pitch page. Props are ", this.props);
    var now = new Date(),//just formatting the date as yyyy-mm-dd
        m = now.getMonth() < 10 ? "0" + now.getMonth() : now.getMonth(),
        d = now.getDate() < 10 ? "0" + now.getDate() : now.getDate(),
        date = [now.getFullYear(), m, d];

    let { data } = this.props,
          good = {val: "success", style: "success", action: "Reject"},
          bad = {val: "error", style: "danger", action: "Approve"},
          notAdmin = {val: null, action: undefined};
    let judge = {},
        counter = 0;

    //set default approval data if none present.
    data = data.approvals ? data :  {approvals:"11111111111"};
    //sets validation object to be mapped to each field in PitchSummary
    for (var key in judy) {
      judge[key] = {vars: this.props.organization.user.perm ?
          notAdmin
        : data.approvals[counter] == 1 ? good : bad};
      judge[key].index = counter;
      counter ++;
    }

    return {
      activeTab: 1,
      budget: [],
      newPitch: data.id ? false : true,
      id: data.id || undefined,
      projName: data.name || "",
      projId: data.projId || "",
      vertical: data.vertical || "",
      tier: data.tier || "",
      numAssets: data.numAssets || "",
      videoType: data.type || "",
      reqBudget: data.reqBudget || 0,
      startDate: data.startDate ? data.startDate.split("T")[0] : date.join("-"),
      endDate: data.endDate ? data.endDate.split("T")[0] : date.join("-"),
      editDate: data.editDate ? data.endDate.split("T")[0] : "",
      releaseDate: data.editDate ? data.endDate.split("T")[0] : "",
      adminNotes: data.adminNotes || "",
      approvals: data.approvals || "111111111111",
      createdBy: data.createdBy,
      judge
    };
  },
  buildPitch() {
    return {
      orgs_id: this.props.organization.orgs_id,
      id: this.state.id,
      name: this.state.projName,
      projId: this.state.projId,
      vertical: this.state.vertical,
      tier: this.state.tier,
      numAssets: this.state.numAssets,
      type: this.state.videoType,
      status: 'Pitch',
      estimateToComplete: this.state.reqBudget,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      editDate: this.state.editDate,
      releaseDate: this.state.releaseDate,
      approvals: this.state.approvals,
      adminNotes: this.state.adminNotes
    };
  },
  handlePitchSubmit(event) {
    event.preventDefault();
    var data = this.buildPitch();

    this.props.postNewProject(data);
    this.closeModal();
  },
  handleReject(e) {
    var data = this.buildPitch();

    this.props.updateProject(data, this.props.projId);
    this.closeModal();
  },
  handleApprove(e) {
    var data = this.buildPitch();
    data.status = "Production";

    console.log("Pitch approved. Pitch is ", data);
    this.state.newPitch ? this.props.postNewProject(data)
        : this.props.updateProject(data, this.props.projId);

    this.closeModal();
  },
  closeModal() {
    this.props.getOrgProjects(this.props.organization.orgName);
    this.props.changeModal("pitch");
  },
  handleSelect(key) {
    //budget set here to accomodate asynchronous budget list hydration.
    this.setState({
        budget: this.props.budgets["proj" + this.state.id],
        activeTab: key,
    });
  },
  tabToBudget() {
    this.handleSelect(2);
  },
  updateBudget(newTotal) {
    this.setState({reqBudget: newTotal});
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  },
  handleBudgetChange(e, idx) {
    let newBudget = this.state.budget;
    newBudget[idx][e.name] = e.value;

    this.setState({budget: newBudget});
  },
  handleBudgetSelect(e, idx) {
    let newBudget = this.state.budget;
    newBudget[idx].codeID = e;

    this.setState({budget: newBudget});
  },
  addNewBudget(budget) {
    this.props.postNewBudget(budget);
    this.setState({
      reqBudget: this.state.reqBudget + budget.total
    });
  },
  deleteBudgetNode(budgetId) {
    let { budget } = this.state;

    this.props.deleteBudgetNode(budgetId);
    for (var x = 0; x < this.state.budget.length; x++) {
      if (budget.id === budgetId) {
        let newBudget = budget.slice(0, x).concat(budget.slice(x+1));
        console.log("newBudget is ", newBudget);
        this.setState({
            reqBudget: this.state.reqBudget - budget.total,
            budget: newBudget
          });
        break;
      }
    }
  },
  updateApproval(index) {
    var approvals = this.state.approvals.split("");

    approvals[index] = Number(!Boolean(approvals[index]/1));

    this.setState({approvals: approvals.join("")});
  },
  handleJudgement(e) {
    const name = e.target.name,
          good = {val: "success", style: "success", action: "Reject"},
          bad = {val: "error", style: "danger", action: "Approve"},
          newJudge = this.state.judge;

    //set the judgement props of each field to the inverse
    newJudge[name].vars =
      this.state.judge[name].vars.action === "Reject" ? bad
      : good;

    this.updateApproval(newJudge[name].index);
    this.setState({judge: newJudge});
  },
  render() {
    this.setState({budget: this.props.budgets["proj" + this.state.id]});
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect} id="pitchTabs">
        <Tab eventKey={1} title="Pitch">
          {<PitchSummary {...this.props.organization} {...this.state}
            handleChange={this.handleChange} handleJudgement={this.handleJudgement}
            tabToBudget={this.tabToBudget} updatePitch={this.updatePitch}
            handleReject={this.handleReject} handlePitchSubmit={this.handlePitchSubmit}/>
          }
        </Tab>
        <Tab eventKey={2} title="Budget">
          <Budget
            budget={this.state.budget}
            total={this.state.reqBudget} addNewBudget={this.addNewBudget}
            handleBudgetChange={this.handleBudgetChange}
            handleBudgetSelect={this.handleBudgetSelect}
            deleteBudgetNode = {this.deleteBudgetNode}
            otherBudget={this.props.budgets["proj" + this.state.id]}
            />


        </Tab>
      </Tabs>
    );
  }
});
export default Pitch;
