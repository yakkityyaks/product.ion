import React from 'react';
import { Link } from 'react-router';
import { Form, FormControl, FormGroup, ControlLabel, Button,
        InputGroup, Tabs, Tab } from 'react-bootstrap';

import Budget from "./Budget";

const PitchSummary = React.createClass({
    getInitialState() {
    return this.props.data;
  },
  handleSubmit(event) {
    event.preventDefault();
    var pitch = {
      name: this.state.projName,
      projId: this.props.projects.length + 1,//TEMPORARY, FIX LATER
      numAssets: this.state.numAssets,
      type: this.state.videoType,
      status: 'Pitch',
      estimateToComplete: this.state.reqBudget,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      orgs_id: this.props.organization.orgs_id,
      createdBy: this.props.organization.user.id
    };
    console.log("Submitting function temporaritly disabled. pitch is ", pitch);
    this.props.postNewProject(pitch);
  },
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  },
  handleSelect(key) {
    this.setState({activeTab: key});
  },
  render() {
    return (
      <div className="Pitch">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formProjName">
            <ControlLabel>Project Name</ControlLabel>
            <FormControl type="text" placeholder="What's the project called?"
                        name="projName" onChange={this.handleChange}
                        value={this.state.projName} required />
          </FormGroup>
          <FormGroup controlId="formNumAssets">
            <ControlLabel>Number of Assets</ControlLabel>
            <FormControl type="number" placeholder="How many episodes?"
                        name="numAssets" onChange={this.handleChange}
                        value={this.state.numAssets} required />
          </FormGroup>
          <FormGroup controlId="formVideoType">
            <ControlLabel>Video Type</ControlLabel>
            <FormControl componentClass="select" placeholder="Video Type"
                        name="videoType" onChange={this.handleChange}>
              <option value="feature">Feature</option>
              <option value="short">Short</option>
              <option value="television">Television</option>
              <option value="web">Web</option>
              <option value="episode">Episode</option>
            </FormControl>
          </FormGroup>
          <FormGroup controlId="formBudget">
            <ControlLabel>Requested Budget</ControlLabel>
            <InputGroup>
              <FormControl type="number" placeholder="Enter or fill our Budget Tab"
                          name="reqBudget" onChange={this.handleChange}
                          value={this.state.reqBudget} />
              <InputGroup.Button>
                <Button onClick={this.props.tabToBudget}>Detailed Budget Breakdown</Button>
              </InputGroup.Button>
            </InputGroup>
            <ControlLabel>Studio Needs</ControlLabel>
            <FormControl type="string" placeholder="I forget what this is"
                        name="studioNeeds" onChange={this.handleChange}
                        value={this.state.studioNeeds} />
          </FormGroup>
          <FormGroup controlId="formStartEndDates">
            <ControlLabel>Start Date</ControlLabel>
            <FormControl type="date"
                        name="startDate" onChange={this.handleChange}
                        value={this.state.startDate} />
            <ControlLabel>End Date</ControlLabel>
            <FormControl type="date"
                        name="endDate" onChange={this.handleChange}
                        value={this.state.endDate} />
          </FormGroup>
          <Button type="submit">Submit pitch for approval</Button>
        </Form>
      </div>
    );
  }
});
export default PitchSummary;
