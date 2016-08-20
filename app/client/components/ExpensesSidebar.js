import React from 'react';
import { Button, InputGroup, Form, FormGroup, Panel, Table, ControlLabel,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';


const ExpensesSidebar = React.createClass({

  render() {
    return (
      <div width="200px">
        <Form>
          <FormGroup controlId="formProjId">
            <InputGroup>
              <InputGroup.Addon>Project Id</InputGroup.Addon>
              <FormControl type="text" placeholder="Get this from accounting"
                          name="projId"
                          value={"001"} required />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formCreatedBy">
            <InputGroup>
              <InputGroup.Addon>Created By</InputGroup.Addon>
              <FormControl type="text" placeholder="Get this from accounting"
                          name="createdBy"
                          value={"timtim"} required />
            </InputGroup>
          </FormGroup>
          <FormGroup controlId="formVertical">
            <InputGroup>
              <InputGroup.Addon>Vertical</InputGroup.Addon>
              <FormControl type="text" placeholder="Get this from accounting"
                          name="vertical"
                          value={"entertainment"} required />
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
  //     <Panel>
  //       <span style={{"font-size":"30"}}>{"Project Details for " + proj.name }</span>
  //       <Button bsStyle="primary" style={{"float":"right"}} onClick={this.switchChart}>Toggle Visuals</Button>
  //       <div style={{"margin-top":"20px"}}>
  //         <Table striped>
  //           <thead>
  //             <tr id="readOnlyHeader">
  //               <th>Project ID</th>
  //               <th>Created By</th>
  //               <th>Vertical</th>
  //               <th>Tier</th>
  //               <th>Type</th>
  //               <th>Number of Assets</th>
  //               <th>Status</th>
  //               <th>Start Date</th>
  //               <th>End Date</th>
  //               <th>Edit Date</th>
  //               <th>Release Date</th>
  //               <th>Cost to Date</th>
  //               <th>Estimate to Complete</th>
  //               <th>Requested Budget</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr id="readOnlyBody">
  //               <td width="50">
  //                 <ReadOnlyText
  //                   name="projId"
  //                   value={proj.projId} />
  //               </td>
  //               <td width="145">
  //                 <ReadOnlyText
  //                   name="projId"
  //                   value={username} />
  //               </td>
  //               <td width="145">
  //                 <ReadOnlyText
  //                   name="vertical"
  //                   value={proj.vertical} />
  //               </td>
  //               <td width="70">
  //                 <ReadOnlyText
  //                   name="tier"
  //                   value={proj.tier} />
  //               </td>
  //               <td>
  //                 <ReadOnlyText
  //                   name="type"
  //                   value={proj.type} />
  //               </td>
  //               <td width="15">
  //                 <ReadOnlyText
  //                   name="numAssets"
  //                   value={proj.numAssets} />
  //               </td>
  //               <td width="125">
  //                 <ReadOnlyText
  //                   name="status"
  //                   value={proj.status} />
  //               </td>
  //               <td width="125">
  //                 <StaticDate
  //                   name="startDate"
  //                   value={proj.startDate} />
  //               </td>
  //               <td width="125">
  //                 <StaticDate
  //                   name="endDate"
  //                   value={proj.endDate} />
  //               </td>
  //               <td width="125">
  //                 <StaticDate
  //                   name="editDate"
  //                   value={proj.editDate} />
  //               </td>
  //               <td width="125">
  //                 <StaticDate
  //                   name="releaseDate"
  //                   value={proj.releaseDate} />
  //               </td>
  //               <td width="125">
  //                 <InputGroup>
  //                   <InputGroup.Addon>$</InputGroup.Addon>
  //                     <ReadOnlyText
  //                       name="costToDate"
  //                       value={proj.costToDate} />
  //                 </InputGroup>
  //               </td>
  //               <td width="125">
  //                 <InputGroup>
  //                   <InputGroup.Addon>$</InputGroup.Addon>
  //                     <ReadOnlyText
  //                       name="estimateToComplete"
  //                       value={proj.estimateToComplete} />
  //                 </InputGroup>
  //               </td>
  //               <td width="125">
  //                 <InputGroup>
  //                   <InputGroup.Addon>$</InputGroup.Addon>
  //                     <ReadOnlyText
  //                       name="reqBudget"
  //                       value={proj.reqBudget} />
  //                 </InputGroup>
  //               </td>
  //             </tr>
  //           </tbody>
  //         </Table>
  //       </div>
  //       {this.state.open ? <ExpenseChart {...this.props} projName={this.state.proj.name}/> : null}
  //     </Panel>
  );}
});

export default ExpensesSidebar;
