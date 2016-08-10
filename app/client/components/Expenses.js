import React from 'react';
import { Link } from 'react-router';

import { Table, Form, FormControl, FormGroup, ControlId, Button } from 'react-bootstrap';

import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import { Panel } from 'react-bootstrap';

const Expenses = React.createClass({
  getInitialState() {
    return {
      type: undefined,
      vertical: undefined,
      vendor: undefined,
      description: undefined,
      cost: undefined,
      method: undefined,
      category: undefined,
      glCode: undefined,
      dateSpent: undefined,
      dateTracked: undefined,
      projs_id: this.props.expenses.id
    };
  },
  getValidationState() {

  },
  onSubmit(e) {
    e.preventDefault();
    var temp = this.state;
    this.setState({
      type: undefined,
      vertical: undefined,
      vendor: undefined,
      description: undefined,
      method: undefined,
      category: undefined,
      glCode: undefined,
      dateSpent: undefined,
      dateTracked: undefined,
      cost: undefined,
      projs_id: this.props.expenses.id
    });
    this.props.postNewExpense(temp, this.props.expenses.projId);
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
  render() {
    return (
      <div style={{fontSize : "14px"}}>
        <Panel>
          <NavBar {...this.props}/>
        </Panel>

        <h3>{" ProjectName goes here - ProjectID goes here -" + this.props.expenses.id}</h3>
        <Form onSubmit={this.onSubmit}>
          <Table condensed style={{width: "100%"}}>
            <FormGroup controlId="whatToDo">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Vertical</th>
                  <th>Vendor</th>
                  <th>Description</th>
                  <th>Cost</th>
                  <th>Method</th>
                  <th>Expense Category</th>
                  <th>GL Code</th>
                  <th>Date Spent</th>
                  <th>Date Tracked</th>
                </tr>
              </thead>
              {/* <Form inline> */}
                <tbody>
                  {
                    this.props.expenses.expenses && this.props.expenses.expenses
                      .map((expense, idx) =>
                      <ExpenseNode key={idx} idx={idx} {...this.props} expense={expense} projId={this.props.expenses.projId} projs_id={this.props.expenses.id}/>)
                  }
                  <Button>ThisButton</Button>
                  <tr>
                    <td>
                      <FormControl componentClass="select" placeholder="Type" ref="exType" onChange={this.handleChangeType}>
                        <option value="Video Originals">Video Originals</option>
                        <option value="Branded">Branded</option>
                        <option value="Editorial">Editorial</option>
                        <option value="Debt Expenses">Dept Expenses</option>
                      </FormControl>
                    </td>
                    <td>
                      <FormControl componentClass="select" placeholder="Vertical" onChange={this.handleChangeVertical}>
                        <option value="Food">Food</option>
                        <option value="Beauty">Beauty</option>
                        <option value="Fashion & Style">Fashion & Style</option>
                        <option value="News & Politics">News & Politics</option>
                        <option value="News & Celeb">News & Celeb</option>
                        <option value="Wellness">Wellness</option>
                        <option value="Entertainment">Entertainment</option>
                      </FormControl>
                    </td>
                    <td><FormControl type="text" placeholder="Vendor" onChange={this.handleChangeVendor}/></td>
                    <td><FormControl type="text" placeholder ="description" onChange={this.handleChangeDescription}/></td>
                    <td><FormControl type="text" placeholder ="cost" onChange={this.handleChangeCost}/></td>
                    <td>
                      <FormControl componentClass="select" placeholder="Method" onChange={this.handleChangeMethod}>
                        <option value="Credit Card">Credit Card</option>
                        <option value="Invoice">Invoice</option>
                        <option value="Payroll">Payroll</option>
                        <option value="Petty Cash">Petty Cash</option>
                        <option value="Misc">Misc</option>
                      </FormControl>
                    </td>
                    <td>
                      <FormControl componentClass="select" placeholder="Category" onChange={this.handleChangeCategory}>
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
                    <td><FormControl type="text" placeholder ="glCode" onChange={this.handleChangeGl}/></td>
                    <td><FormControl type="date" placeholder ="dateSpent" onChange={this.handleChangeDateSpent}/></td>
                    <td><FormControl type="date" placeholder ="dateTracked" onChange={this.handleChangeDateTracked}/></td>
                    <td><Button onClick={this.onSubmit}>Submit</Button></td>
                  </tr>
                </tbody>
              {/* </Form> */}
            </FormGroup>
          </Table>
        </Form>
      </div>
    );
  }
});

export default Expenses;

const glCodes = {
  Consultant: 580200,
  Writer:	560100,
  Director:	560270,
  Producer:	560260,
  AssociateProducer:	560260,
  ProductionAssistant:	560230,
  ResearchMaterials:	545010,
  OnCameraTalent:	560250,
  MakeUpArtist:	560350,
  HairStylist:	560350,
  WardrobeStylist:	560350,
  WardrobeAllowance:	560350,
  DirectorofPhotography:	560220,
  CameraOperator: 560220,
  AssistantCamera:	560230,
  AudioOperator:	560210,
  GafferGripBestBoy:	560220,
  Photographer:	560450,
  SetPA:	560230,
  Intern:	500120,
  CameraRental:	570100,
  LightingRental:	570100,
  MiscEquipmentRental:	570100,
  LocationFeesPermits:	570150,
  LocationManager:	570150,
  SetDesign:	570150,
  Props:	545100,
  MealsCraftService:	590200,
  TaxisLocalTranspo:	590500,
  Airfare:	590400,
  Hotel:	590300,
  CarRental:	590400,
  GasTollsParking:	590600,
  Editor: 560240,
  AssistantEditor:	560240,
  EditSuite:	560240,
  DesignMotionGFX:	660400,
  Transcription:	515250,
  ColorCorrection:	515250,
  AudioMix:	515250,
  MiscPost:	515250,
  PhotoLicensing:	564000,
  FootageLicensing:	570200,
  MusicLicensing:	570200,
  Insurance:	"NONE",
  HostingService:	500950,
  ThirdPartyProduction:	560275,
  ThirdPartyProductionLicensing:	560280,
};
