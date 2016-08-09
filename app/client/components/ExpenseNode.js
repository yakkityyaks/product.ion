import React from 'react';
import { Link } from 'react-router';
import { Form, FormControl, Button, Modal, OverlayTrigger } from 'react-bootstrap';
// import CSSTransitionGroup from 'react-addons-css-transition-group';

const ExpenseNode = React.createClass({
  getInitialState() {
    return this.props.expense;
  },
    handleChangeType(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({type: e.target.value});
  },
  handleChangeVertical(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({vertical: e.target.value});
  },
  handleChangeVendor(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({vendor: e.target.value});
  },
  handleChangeDescription(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({description: e.target.value});
  },
  handleChangeCost(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({cost: e.target.value});
  },
  handleChangeMethod(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({method: e.target.value});
  },
  handleChangeCategory(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({category: e.target.value});
  },
  handleChangeGl(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({glCode: e.target.value});
  },
  handleChangeDateSpent(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({dateSpent: e.target.value});
  },
  handleChangeDateTracked(e) {
    e.preventDefault();
    console.log(e.target.value);
    this.setState({dateTracked: e.target.value});
  },
  handleUpdate() {

  },
  remove() {

  },
  render() {
    return (
        <tr>
          <td>
            <FormControl componentClass="select" value={this.state.type} onChange={this.handleChangeType}>
                    <option value="Video Originals">Video Originals</option>
                    <option value="Branded">Branded</option>
                    <option value="Editorial">Editorial</option>
                    <option value="Debt Expenses">Dept Expenses</option>
            </FormControl>
          </td>
          <td>
            <FormControl componentClass="select" value={this.state.vertical} onChange={this.handleChangeVertical}>
                    <option value="Food">Food</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Fashion & Style">Fashion & Style</option>
                    <option value="News & Politics">News & Politics</option>
                    <option value="News & Celeb">News & Celeb</option>
                    <option value="Wellness">Wellness</option>
                    <option value="Entertainment">Entertainment</option>
            </FormControl>
          </td>
          <td><FormControl type="text" value={this.state.vendor} onChange={this.handleChangeVendor}/></td>
          <td><FormControl type="text" value={this.state.description} onChange={this.handleChangeDescription}/></td>
          <td><FormControl type="text" value={this.state.cost} onChange={this.handleChangeCost}/></td>
          <td>
            <FormControl componentClass="select" value={this.state.method} onChange={this.handleChangeMethod}>
              <option value="Credit Card">Credit Card</option>
              <option value="Invoice">Invoice</option>
              <option value="Payroll">Payroll</option>
              <option value="Petty Cash">Petty Cash</option>
              <option value="Misc">Misc</option>
            </FormControl>
          </td>
          <td>
            <FormControl componentClass="select" value={this.state.category} onChange={this.handleChangeCategory}>
              <option value="Consultant">Consultant</option>
              <option value="Writer">Writer</option>
              <option value="Director">Director</option>
              <option value="Producer">Producer</option>
              <option value="Associate Producer">Associate Producer</option>
              <option value="Production Assistant">Production Assistant</option>
              <option value="Research Materials">Research Materials</option>
              <option value="On-Camera Talent">On-Camera Talent</option>
              <option value="Make-Up Artist">Make-Up Artist</option>
              <option value="Hair Stylist">Hair Stylist</option>
              <option value="Wardrobe & Stylist">Wardrobe & Stylist</option>
              <option value="Wardrobe Allowance">Wardrobe Allowance</option>
              <option value="Director of Photography">Director of Photography</option>
              <option value="Camera Operator">Camera Operator</option>
              <option value="Assistant Camera">Assistant Camera</option>
              <option value="Audio Operator">Audio Operator</option>
              <option value="Gaffer/Grip/Best-Boy">Gaffer/Grip/Best-Boy</option>
              <option value="Photographer">Photographer</option>
              <option value="Set PA">Set PA</option>
              <option value="Intern">Intern</option>
              <option value="Camera Rental">Camera Rental</option>
              <option value="Lighting Rental">Lighting Rental</option>
              <option value="Misc Equipment Rental">Misc Equipment Rental</option>
              <option value="Location Fees/Permits">Location Fees/Permits</option>
              <option value="Location Manager">Location Manager</option>
              <option value="Set Design">Set Design</option>
              <option value="Meals & Craft Service">Meals & Craft Service</option>
              <option value="Taxis/Local/Transpo">Taxis/Local/Transpo</option>
              <option value="Airfare">Airfare</option>
              <option value="Hotel">Hotel</option>
              <option value="Car Rental">Car Rental</option>
              <option value="Gas Tolls Parking">Gas Tolls Parking</option>
              <option value="Editor">Editor</option>
              <option value="Assistant Editor">Assistant Editor</option>
              <option value="Edit Suite">Edit Suite</option>
              <option value="Design & Motion GFX">Design & Motion GFX</option>
              <option value="Transcription">Transcription</option>
              <option value="Color Correction">Color Correction</option>
              <option value="Audio Mix">Audio Mix</option>
              <option value="Misc Post">Misc Post</option>
              <option value="Photo Licensing">Photo Licensing</option>
              <option value="Footage Licensing">Footage Licensing</option>
              <option value="Music Licensing">Music Licensing</option>
              <option value="Insurance">Insurance</option>
              <option value="Hosting Service">Hosting Service</option>
              <option value="Third Party Production">Third Party Production</option>
              <option value="Third Party Production/Licensing">Third Party Production/Licensing</option>
            </FormControl>
          </td>
          <td><FormControl type="text" value={this.state.glCode} onChange={this.handleChangeGl}/></td>
          <td><FormControl type="text" value={this.state.dateSpent} onChange={this.handleChangeDateSpent}/></td>
          <td><FormControl type="text" value={this.state.dateTracked} onChange={this.handleChangeDateTracked}/></td>
          <td><Button onClick={this.handleUpdate}>Update</Button></td>
          <td><Button onClick={this.handleRemove}>Remove</Button></td>
        </tr>
    );
  }
});

export default ExpenseNode;
