import React from 'react';
import { Link } from 'react-router';

const Pitch = React.createClass({
  render() {
    return (
      <div className="Pitch">
        <h2 className="form-page__form-heading">Pitch</h2>
        <form className="form" onSubmit={this.handleSubmit}>
           <div className="form__error-wrapper">
             <p className="form__error form__error--username-not-registered">This username does not exist.</p>
             <p className="form__error form__error--field-missing">Please fill out the entire form.</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="projectName">Project Name</label>
             <input className="form__field-input" type="text" id="numberOfAssets" placeholder="Project Name" ref="projectName" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="numberOfAssets">Number of Assets</label>
             <input className="form__field-input" type="text" id="numberOfAssets" placeholder="Number of Assets" ref="numberOfAssetsInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="typeOfVideo">Type of Video</label>
             <input className="form__field-input" type="text" id="typeOfVideo" placeholder="Video Type" ref="typeOfVideoInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="requestedBudget">Requested Budget</label>
             <input className="form__field-input" type="text" id="requestedBudget" placeholder="Requested Budget" ref="requestedBudgetInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="studioNeeds">Studio Needs</label>
             <input className="form__field-input" type="text" id="studioNeeds" placeholder="Studio Needs" ref="studioNeedsInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="shootStartDate">Shoot Start Date</label>
             <input className="form__field-input" type="text" id="shootStartDate" placeholder="Start Date" ref="shootStartDateInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="shootEndDate">Shoot End Date</label>
             <input className="form__field-input" type="text" id="shootEndDate" placeholder="End Date" ref="shootEndDateInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__submit-btn-wrapper">
               <button className="form__submit-btn" type="submit">Submit Pitch!</button>
           </div>
         </form>
      </div>
    );
  }
});

export default Pitch;


