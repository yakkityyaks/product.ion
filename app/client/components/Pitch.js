import React from 'react';
import { Link } from 'react-router';
import { Button, Tabs, Tab } from 'react-bootstrap';

import Budget from "./Budget";

const Pitch = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    var pitch = {
      name: this.refs.projectName.value,
      projId: this.props.projects.length + 1,
      numAssets: this.refs.numberOfAssets.value,
      type: this.refs.videoType.value,
      status: 'Pitch',
      estimateToComplete: this.refs.requestedBudget.value,
      needs: this.refs.studioNeeds.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value,
      orgs_id: this.props.organization.orgs_id
    };
    console.log(pitch);
    this.props.postNewProject(pitch);
  },

  render() {
    const thing = (
      <div className="Pitch">
        <form className="form">
           <div className="">
             <label
               className="form__field-label"
               htmlFor="projectName">
                 Project Name
             </label>
             <input
               className="form__field-input"
               type="text" id="projectName"
               placeholder="Please fill me out!"
               ref="projectName"
               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
           </div>

           <div className="">
             <label
               className="form__field-label"
               htmlFor="numberOfAssets">
                 Number of Assets
             </label>
             <input
               className="form__field-input"
               type="text" id="numberOfAssets"
               placeholder="Please fill me out!"
               ref="numberOfAssets"
               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
           </div>

           <div className="">
             <label
               className="form__field-label"
               htmlFor="videoType">
                 Video Type
             </label>
             <select className="form__field-input" ref="videoType">
               <option value="feature">Feature</option>
               <option value="short">Short</option>
               <option value="television">Television</option>
               <option value="web">Web</option>
               <option value="episode">Episode</option>
             </select>
           </div>

           <div className="">
             <label className="form__field-label"
             htmlFor="requestedBudget">
               Requested Budget
             </label>
             <input
               className="form__field-input"
               type="text" id="requestedBudget"
               placeholder="Please fill me out"
               ref="requestedBudget"
               autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>

           <div className="">
             <label
               className="form__field-label"
               htmlFor="studioNeeds">
                 Studio Needs
             </label>
             <input
               className="form__field-input"
               type="text" id="studioNeeds"
               placeholder="Please fill me out"
               ref="studioNeeds"
               autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>

           <div className="">
             <label
               className="form__field-label"
               htmlFor="startDate">
                 Start Date
             </label>
             <input
             className="form__field-input"
             type="date" id="startDate"
             ref="startDate"
             />
           </div>

           <div className="">
             <label
             className="form__field-label"
             htmlFor="endDate">
               End Date
             </label>
             <input
             className="form__field-input"
             type="date" id="endDate"
             ref="endDate" />
           </div>
           <div className="form__submit-btn-wrapper">
             <Button onClick={this.handleSubmit}>
               Submit your Pitch!
             </Button>
           </div>
         </form>
      </div>
    );
    return (
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Pitch">{thing}</Tab>
        <Tab eventKey={2} title="Budget">{<Budget />}</Tab>
      </Tabs>
    );
  }
});
export default Pitch;
