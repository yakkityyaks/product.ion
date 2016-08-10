import React from 'react';
import { Link } from 'react-router';
import { Form, FormControl, Button, Tabs, Tab } from 'react-bootstrap';

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
        <Form>
           <div className="">
             <label className="">Project Name</label>
             <input className="" type="text" id="projectName"
               placeholder="Please fill me out!"
               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
           </div>
           <div className="">
             <label className="">Number of Assets</label>
             <input className="" type="text" id="numberOfAssets"
               placeholder="Please fill me out!"
               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
           </div>
           <div className="">
             <label className="">Video Type</label>
             <select className="" ref="videoType">
               <option value="feature">Feature</option>
               <option value="short">Short</option>
               <option value="television">Television</option>
               <option value="web">Web</option>
               <option value="episode">Episode</option>
             </select>
           </div>

           <div className="">
             <label className="">Requested Budget</label>
             <input className="" type="text" id="requestedBudget"
               placeholder="Please fill me out"
               autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>

           <div className="">
             <label
               className=""
               htmlFor="studioNeeds">
                 Studio Needs
             </label>
             <input
               className=""
               type="text" id="studioNeeds"
               placeholder="Please fill me out"
               ref="studioNeeds"
               autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>

           <div className="">
             <label
               className=""
               htmlFor="startDate">
                 Start Date
             </label>
             <input
             className=""
             type="date" id="startDate"
             ref="startDate"
             />
           </div>

           <div className="">
             <label
             className=""
             htmlFor="endDate">
               End Date
             </label>
             <input
             className=""
             type="date" id="endDate"
             ref="endDate" />
           </div>
           <div className="">
             <Button onClick={this.handleSubmit}>
               Submit your Pitch!
             </Button>
           </div>
         </Form>
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
