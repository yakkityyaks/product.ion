import React from 'react';
import { Link } from 'react-router';
import { Form, FormControl, FormGroup, ControlLabel, Button,
  InputGroup, Tabs, Tab } from 'react-bootstrap';

import Budget from "./Budget";
import { judy } from "../data/public";

const PitchSummary = React.createClass({
  render() {
    const { user, judge, handleChange, handleJudgement,
          handleReject, handleApprove, handlePitchSubmit} = this.props;

    const adminControls = (name) => (
      !user.perm &&
      <InputGroup.Button>
        <Button bsStyle={judge[name].vars.style} name={name} onClick={handleJudgement}>
          {judge[name].vars.action}
        </Button>
      </InputGroup.Button>
    );
    return (
      <div className="Pitch">
        <Form onSubmit={handlePitchSubmit}>
          <FormGroup controlId="formProjName" validationState = {judge.projName.vars.val}>
            <ControlLabel>Project Name</ControlLabel>
            <InputGroup>
              <FormControl type="text" placeholder="What's the project called?"
                          name="projName" onChange={handleChange}
                          value={this.props.projName} required />
              {adminControls("projName")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formProjId" validationState = {judge.projId.vars.val}>
            <ControlLabel>Project Id</ControlLabel>
            <InputGroup>
              <FormControl type="text" placeholder="Get this from accounting"
                          name="projId" onChange={handleChange}
                          value={this.props.projId} required />
              {adminControls("projId")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formVertical" validationState = {judge.vertical.vars.val}>
            <ControlLabel>Vertical</ControlLabel>
            <InputGroup>
              <FormControl componentClass="select" placeholder="Vertical"
                          name="vertical" onChange={handleChange}>
                <option value="food">Food</option>
                <option value="beauty">Bearty</option>
                <option value="fashionStyle">Fashion & Style</option>
                <option value="newsPolitics">News/Politics</option>
                <option value="newsWeb">News/Web</option>
                <option value="wellness">Wellness</option>
                <option value="entertainment">Entertainment</option>
              </FormControl>
              {adminControls("vertical")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formTier" validationState = {judge.tier.vars.val}>
            <ControlLabel>Tier</ControlLabel>
            <InputGroup>
              <InputGroup.Addon>Tier</InputGroup.Addon>
              <FormControl componentClass="select" placeholder="Tier"
                          name="tier" onChange={handleChange}>
                <option value="br">BR</option>
                <option value="t1">T1</option>
                <option value="t2">T2</option>
                <option value="t3">T3</option>
                <option value="t4">T4</option>
                <option value="t5">T5</option>
                <option value="r29">R29</option>
              </FormControl>
              {adminControls("tier")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formNumAssets" validationState = {judge.numAssets.vars.val}>
            <ControlLabel>Number of Assets</ControlLabel>
            <InputGroup>
              <FormControl type="number" placeholder="How many episodes?"
                          name="numAssets" onChange={handleChange}
                          value={this.props.numAssets} required />
              {adminControls("numAssets")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formVideoType" validationState = {judge.videoType.vars.val}>
            <ControlLabel>Video Type</ControlLabel>
            <InputGroup>
              <FormControl componentClass="select" placeholder="Video Type"
                          name="videoType" onChange={handleChange}>
                <option value="feature">Feature</option>
                <option value="short">Short</option>
                <option value="television">Television</option>
                <option value="web">Web</option>
                <option value="episode">Episode</option>
              </FormControl>
              {adminControls("videoType")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formBudget" validationState = {judge.reqBudget.vars.val}>
            <ControlLabel>Requested Budget</ControlLabel>
            <InputGroup>
              <FormControl type="text" placeholder="Estimate budget on next tab"
                          name="reqBudget" onChange={handleChange}
                          value={(this.props.reqBudget && "$" + this.props.reqBudget) || ""} readOnly/>
              <InputGroup.Button>
                <Button onClick={this.props.tabToBudget}>Switch to Detailed Budget Breakdown</Button>
              </InputGroup.Button>
              {adminControls("reqBudget")}
            </InputGroup>
          </FormGroup>
          <ControlLabel>Project Dates</ControlLabel>
          <FormGroup controlId="formStartDate" validationState = {judge.startDate.vars.val}>
            <InputGroup>
              <InputGroup.Addon>Start Date</InputGroup.Addon>
              <FormControl type="date"
                          name="startDate" onChange={handleChange}
                          value={this.props.startDate} />
              {adminControls("startDate")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formEndDate" validationState = {judge.endDate.vars.val}>
            <InputGroup>
              <InputGroup.Addon>End Date</InputGroup.Addon>
              <FormControl type="date"
                          name="endDate" onChange={handleChange}
                          value={this.props.endDate} />
              {adminControls("endDate")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formEditDate" validationState = {judge.editDate.vars.val}>
            <InputGroup>
              <InputGroup.Addon>Edit Date</InputGroup.Addon>
              <FormControl type="date"
                          name="editDate" onChange={handleChange}
                          value={this.props.editDate} />
              {adminControls("editDate")}
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formReleaseDate" validationState = {judge.releaseDate.vars.val}>
            <InputGroup>
              <InputGroup.Addon>Release Date</InputGroup.Addon>
              <FormControl type="date"
                          name="releaseDate" onChange={handleChange}
                          value={this.props.releaseDate} />
              {adminControls("releaseDate")}
            </InputGroup>
          </FormGroup>
          {!user.perm &&
            <FormGroup>
              <ControlLabel>Admin Notes</ControlLabel>
              <FormControl componentClass="textarea" name="adminNotes"
                placeholder={user.name+", if you're rejecting please explain why here."}
                value = {this.props.adminNotes} onChange={handleChange} />
            </FormGroup>
          }
          {user.perm ?
            <Button type="submit">Submit pitch for approval</Button>
            : <FormGroup>
               <Button bsStyle="success" onClick={handleApprove}>Approve Proposal</Button>
               {!this.props.newPitch &&
                 <Button bsStyle="danger" onClick={handleReject}>Reject with Reasons</Button>}
              </FormGroup>
          }
        </Form>
      </div>
    );
  }
});
export default PitchSummary;
