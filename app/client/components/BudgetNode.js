import React from 'react';
import Dropdown from 'react-dropdown';
import { Button, InputGroup, Form,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';

import cata from "../data/public.js";


const BudgetNode = React.createClass({
  getInitialState() {
    return {
      lockInputs: this.props.lock
    };
  },
  handleCommonChange(e) {
    console.log(e);
  },
  selectCata(e) {
    this.setState({
      code: cata[e].code,
      label: cata[e].label,
      lockInputs: true
    });
  },
  remove(e) {
    this.props.removeBudgetNode(this.props.idx);
  },
  render() {
    const budgetDropdownItem = (node, idx) =>
    (
      node.cat === "header" ? <MenuItem header key={idx}>{node.label}</MenuItem>
        : <MenuItem eventKey={idx} key={idx} onSelect={this.selectCata}>{node.label}</MenuItem>
    );

    const { codeID } = this.props.budget;
    return (
      <Form inline>
        <DropdownButton bsStyle={"default"} title={"Category"} id={`catSelect`}>
         {cata
           .filter((node) => node)
           .map(budgetDropdownItem)
         }
        </DropdownButton>
          <FormControl readOnly type="number"
                       value={cata[codeID].code} placeholder="GL Code"/>
          <FormControl readOnly={this.props.lockInputs} type="text"
                       value={cata[codeID].label} placeholder="Category"/>
         <InputGroup>
             <InputGroup.Addon>Description</InputGroup.Addon>
            <FormControl readOnly={this.props.lockInputs} type="text"
                      value={this.props.budget.description} placeholder="Description" />
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon>Cost</InputGroup.Addon>
            <FormControl type="text" placeholder="Cost"
                         value={"$" + this.props.budget.cost} required/>
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon>Quant</InputGroup.Addon>
            <FormControl type="text" placeholder="Quant"
                         value={this.props.budget.quantity} required/>
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon>Total</InputGroup.Addon>
            <FormControl type="text" placeholder="Total Estimate"
                         value={"$" + this.props.budget.cost * this.props.budget.quantity} required/>
          </InputGroup>
          <Button onClick={this.remove}>X</Button>
      </Form>
    );
  }
});

export default BudgetNode;
