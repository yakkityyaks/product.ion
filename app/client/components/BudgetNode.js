import React from 'react';
import Dropdown from 'react-dropdown';
import { Button, InputGroup, Form,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';

import cata from "../data/public.js";


const BudgetNode = React.createClass({
  getInitialState() {
    return {
      lock: this.props.lock
    };
  },
  handleChange(e) {
    this.props.handleBudgetChange(e.target, this.props.idx);
  },
  selectCata(e) {
    this.props.handleBudgetSelect(e, this.props.idx);
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
                       defaultValue={cata[codeID].code} placeholder="GL Code"/>
          <FormControl readOnly type="text"
                       defaultValue={cata[codeID].label} placeholder="Category"/>
         <InputGroup>
             <InputGroup.Addon>Description</InputGroup.Addon>
            <FormControl type="text" value={this.props.budget.description}
                         name="description" required
                        placeholder="Description" onChange={this.handleChange}/>
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon>Cost</InputGroup.Addon>
            <FormControl type="number" placeholder="Cost" name="cost"
                         value={this.props.budget.cost} required
                         onChange={this.handleChange}/>
          </InputGroup>
          <InputGroup>
            <InputGroup.Addon>Quant</InputGroup.Addon>
            <FormControl type="number" placeholder="Quant" name="quant"
                         value={this.props.budget.quantity} required
                         onChange={this.handleChange}/>
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
