import React from 'react';
import Dropdown from 'react-dropdown';
import { Button, Form, FormGroup, Col, ControlLabel,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';

import cata from "../data/public.js";


const BudgetNode = React.createClass({
  getInitialState() {
    return {
      code: this.props.node.code,
      label: this.props.node.label,
      total: this.props.node.total,
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

    return (
      <Form inline>
        <DropdownButton bsStyle={"default"} title={"Category"} id={`catSelect`}>
         {cata
           .filter((node) => node)
           .map(budgetDropdownItem)
         }
        </DropdownButton>
          <FormControl readOnly={this.state.lockInputs} type="text"
                       value={this.state.code} placeholder="GL Code" className="testing"/>
          <FormControl readOnly={this.state.lockInputs} type="text"
                       value={this.state.label} placeholder="Category"/>
          <FormControl type="text" placeholder="Total Estimate"
                       value={this.state.total} required/>
          <Button onClick={this.remove}>X</Button>
      </Form>
    );
  }
});

export default BudgetNode;
