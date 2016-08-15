import React from 'react';

import { ControlLabel, Tabs, Tab } from 'react-bootstrap';

import Budget from "./Budget";
import PitchSummary from "./PitchSummary";

import { judy } from "../data/public";

const Pitch = React.createClass({
  getInitialState() {
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

    for (var key in judy) {
      judge[key] = {vars: this.props.organization.user.perm ?
          notAdmin
        : data.approvals[counter] == 1 ? good : bad};
      judge[key].index = counter;
      counter ++;
    }
    this.props.getProject(data.projId);
    return {
      activeTab: 1,
      id: data.id || null,
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
    data.status = "Production";

    this.props.updateProject(data, this.props.projId);
    this.props.changeModal("pitch");
  },
  handleSelect(key) {
    this.setState({activeTab: key});
  },
  tabToBudget() {
    this.setState({activeTab: 2});
  },
  updateBudget(newTotal) {
    this.setState({reqBudget: newTotal});
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
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
  handleReject(e) {
    var data = this.buildPitch();

    this.props.updateProject(data, this.props.projId);
    this.props.changeModal("pitch");
  },
  render() {
    return (
      <Tabs activeKey={this.state.activeTab} onSelect={this.handleSelect} id="test-tabs">
        <Tab eventKey={1} title="Pitch">
          {<PitchSummary {...this.props.organization} {...this.state}
            handleChange={this.handleChange} handleJudgement={this.handleJudgement}
            tabToBudget={this.tabToBudget} updatePitch={this.updatePitch}
            handleReject={this.handleReject} handlePitchSubmit={this.handlePitchSubmit}/>
          }
        </Tab>
        <Tab eventKey={2} title="Budget">{<Budget total={this.state.reqBudget}
            updateBudget={this.updateBudget}/>}</Tab>
      </Tabs>
    );
  }
});
export default Pitch;
