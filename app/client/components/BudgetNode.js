import React from 'react';
import { Button, InputGroup, Form, FormGroup,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';

import CustomSearch from './CustomSearch';
import cata from "../data/public.js";


const BudgetNode = React.createClass({
  getInitialState() {
    return {
      lock: this.props.lock, filter: "", changed: false
    };
  },
  handleChange(e) {
    this.props.setChangedStatus(1);
    this.props.handleBudgetChange(e.target, this.props.idx);
    this.setState({changed: true});
  },
  selectCata(e) {
    this.props.setChangedStatus(1);
    this.props.handleBudgetSelect(e, this.props.idx);
    this.setState({changed: true});
  },
  setFilter(e) {
    this.setState({filter: e.target.value.toLowerCase()});
  },
  remove(e) {
    this.props.deleteBudgetNode(this.props.budget);
  },
  render() {
    const budgetDropdownItem = (node, idx) =>
    (
      node.cat === "header" ? <MenuItem header key={idx}>{node.label}</MenuItem>
        : <MenuItem eventKey={idx} key={idx} onSelect={this.selectCata}>{node.label}</MenuItem>
    );

    const code = this.props.budget.glCode;
    console.log("budgetNode ", code, cata[code]);
    return (
      <Form inline>
        <FormGroup validationState={this.state.changed ?
                    "warning" : undefined}>
          <InputGroup>
            <InputGroup.Addon>Description</InputGroup.Addon>
             <FormControl type="text" value={this.props.budget.description}
                          name="description" required
                         placeholder="Description" onChange={this.handleChange}/>
          </InputGroup>
          <InputGroup>
            <DropdownButton bsStyle={"default"} id={`catSelect`}
                            title={cata[code] && cata[code].label+": "+cata[code].code || "Category"}>

              <CustomSearch id={"5"} name={"customSearch"}
                      data={{value: this.state.filter, onChange: this.setFilter}}/>
             {cata
               .filter((node) =>
                  node.label.toLowerCase().includes(this.state.filter))
               .map(budgetDropdownItem)
             }
            </DropdownButton>
          </InputGroup>
          {/* <Grid><Row> */}
            <InputGroup className="budgetNodeForm">
              <InputGroup.Addon>Cost</InputGroup.Addon>
              <FormControl type="number" placeholder="Cost" name="cost"
                           value={this.props.budget.cost} required
                           onChange={this.handleChange} />
            </InputGroup>
            <InputGroup className="budgetNodeForm">
              <InputGroup.Addon>Quant</InputGroup.Addon>
              <FormControl type="number" placeholder="Quant" name="quant"
                           value={this.props.budget.quantity} required
                           onChange={this.handleChange}/>
            </InputGroup>
            <InputGroup className="budgetNodeTotal">
              <InputGroup.Addon>Total</InputGroup.Addon>
              <FormControl type="text" placeholder="Total Item Cost" readOnly
                           value={"$" + this.props.budget.cost * this.props.budget.quantity} required/>
            </InputGroup>
            <Button onClick={this.remove}>X</Button>
          </FormGroup>
      </Form>
    );
  }
});

export default BudgetNode;
