import React from 'react';
import { Link } from 'react-router';
import Dropdown from 'react-dropdown'
import Calendar from "./Calendar.js";

const options = ['feature', 'short', 'television', 'web', 'episode'];

const options1 = [1,2,3,4,5,6,7,8,9,10];

const Pitch = React.createClass({
  getInitialState: function(){
    return {
      checked: false
    }
  },

  onChange: function(event) {
    event.preventDefault();
    var input = event.target;

    this.setState({
      checked: input.checked
    });
  },

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
             <input className="form__field-input" type="text" id="numberOfAssets" placeholder="Please fill me out!" ref="projectName" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="numberOfAssets">Number of Assets</label>
             <input className="form__field-input" type="text" id="numberOfAssets" placeholder="Please fill me out!" ref="numberOfAssetsInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <span>
               <Dropdown className="form__field-input" options={options} onChange={this._onSelect} value='Video type' placeholder="Select an option" />
             </span>
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="requestedBudget">Requested Budget</label>
             <input className="form__field-input" type="text" id="requestedBudget" placeholder="Please fill me out" ref="requestedBudgetInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <label className="form__field-label" htmlFor="studioNeeds">Studio Needs</label>
             <input className="form__field-input" type="text" id="studioNeeds" placeholder="Please fill me out" ref="studioNeedsInput" autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>
           <div className="form__field-wrapper">
             <div>
                <button onChange={this.onChange}>
                  <Link to={`/calendar`}>
                    Start Date
                  </Link>
                </button>
             </div>

             <div>
                <button onChange={this.onChange}>
                  <Link to={`/calendar`}>
                     End Date
                  </Link>
                </button>
             </div>
           </div>
           <div className="form__submit-btn-wrapper">
             <button className="form__submit-btn" type="submit">
               <Link to={`/dashboard/${this.props.organization.orgName.split(" ").join("")}`}>
                 Submit your Pitch!
               </Link>
             </button>
           </div>
         </form>
      </div>
    );
  }
});

export default Pitch;


