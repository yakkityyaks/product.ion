import React from 'react';
import { Link } from 'react-router';

import { Table, Form, FormControl, Button, Modal, OverlayTrigger } from 'react-bootstrap';

import ExpenseNode from './ExpenseNode';
import NavBar from './NavBar';
import { Panel } from 'react-bootstrap';

const Expenses = React.createClass({
  onSubmit(e) {
    e.preventDefault();
    console.log("ding ding ding, event is ", e);
    console.log("Ref is ", this.refs.exType);
  },
  render() {
    return (
      <div style={{fontSize : "14px"}}>
        <Panel>
          <NavBar {...this.props}/>
        </Panel>
        <h3> ProjectName goes here - ProjectID goes here -</h3>
        <Form onSubmit={this.onSubmit}>
        <Table condensed style={{width: "100%"}}>
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
                this.props.expenses.current && this.props.expenses.current
                  .map((expense, idx) =>
                  <ExpenseNode key={idx} idx={idx} {...this.props} expense={expense} />)
              }
              <tr>
                <td>
                  <FormControl componentClass="select" placeholder="Type" ref="exType">
                    <option value="select">Video Originals</option>
                    <option value="select">Branded</option>
                    <option value="select">Editorial</option>
                    <option value="select">Dept Expenses</option>
                  </FormControl>
                </td>
                <td>
                  <FormControl componentClass="select" placeholder="Vertical">
                    <option value="select">Food</option>
                    <option value="select">Beauty</option>
                    <option value="select">Fashion & Style</option>
                    <option value="select">News & Politics</option>
                    <option value="select">News & Celeb</option>
                    <option value="select">Wellness</option>
                    <option value="select">Entertainment</option>
                  </FormControl>
                </td>
                <td><FormControl type="text" placeholder ={"vendor"} /></td>
                <td><FormControl type="text" placeholder ={"description"} /></td>
                <td><FormControl type="text" placeholder ={"cost"} /></td>
                <td>
                  <FormControl componentClass="select" placeholder="Method">
                    <option value="select">Credit Card</option>
                    <option value="select">Invoice</option>
                    <option value="select">Payroll</option>
                    <option value="select">Petty Cash</option>
                    <option value="select">Misc</option>
                  </FormControl>
                </td>
                <td>
                  <FormControl componentClass="select" placeholder="Category">
                    <option value="select">Consultant</option>
                    <option value="select">Writer</option>
                    <option value="select">Director</option>
                    <option value="select">Producer</option>
                    <option value="select">Associate Producer</option>
                    <option value="select">Production Assistant</option>
                    <option value="select">Research Materials</option>
                    <option value="select">On-Camera Talent</option>
                    <option value="select">Make-Up Artist</option>
                    <option value="select">Hair Stylist</option>
                    <option value="select">Wardrobe & Stylist</option>
                    <option value="select">Wardrobe Allowance</option>
                    <option value="select">Director of Photography</option>
                    <option value="select">Camera Operator</option>
                    <option value="select">Assistant Camera</option>
                    <option value="select">Audio Operator</option>
                    <option value="select">Gaffer/Grip/Best-Boy</option>
                    <option value="select">Photographer</option>
                    <option value="select">Set PA</option>
                    <option value="select">Intern</option>
                    <option value="select">Camera Rental</option>
                    <option value="select">Lighting Rental</option>
                    <option value="select">Misc Equipment Rental</option>
                    <option value="select">Location Fees/Permits</option>
                    <option value="select">Location Manager</option>
                    <option value="select">Set Design</option>
                    <option value="select">Meals & Craft Service</option>
                    <option value="select">Taxis/Local/Transpo</option>
                    <option value="select">Airfare</option>
                    <option value="select">Hotel</option>
                    <option value="select">Car Rental</option>
                    <option value="select">Gas Tolls Parking</option>
                    <option value="select">Editor</option>
                    <option value="select">Assistant Editor</option>
                    <option value="select">Edit Suite</option>
                    <option value="select">Design & Motion GFX</option>
                    <option value="select">Transcription</option>
                    <option value="select">Color Correction</option>
                    <option value="select">Audio Mix</option>
                    <option value="select">Misc Post</option>
                    <option value="select">Photo Licensing</option>
                    <option value="select">Footage Licensing</option>
                    <option value="select">Music Licensing</option>
                    <option value="select">Insurance</option>
                    <option value="select">Hosting Service</option>
                    <option value="select">Third Party Production</option>
                    <option value="select">Third Party Production/Licensing</option>

                  </FormControl>
                </td>
                {/* <td><FormControl type="text" placeholder ={"category"} /></td> */}
                <td><FormControl type="text" placeholder ={"glCode"} /></td>
                <td><FormControl type="date" placeholder ={"dateSpent"} /></td>
                <td><FormControl type="date" placeholder ={"dateTracked"} /></td>
              </tr>
            </tbody>
          {/* </Form> */}
        </Table>
        <Button type="submit">
         Submit
       </Button>
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
