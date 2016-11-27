import React from 'react';
import { Button, DropdownButton, Form, FormGroup, ControlLabel,
  InputGroup, MenuItem, FormControl } from 'react-bootstrap';
import BudgetNode from './BudgetNode';
import CustomSearch from './CustomSearch';

import cata from "../data/public";

const Budget = React.createClass({
    getInitialState: function() {
      return {
        newBudgetCode: "", newBudgetLabel: "", newBudgetTotal: "",
        newBudgetCost: "", newBudgetQuant: "", newBudgetDescription: "",
        filter: "", changed: false,
      };
    },
    componentWillReceiveProps: function(newProps) {
      if (newProps.budgets)
        this.setState({budgets: newProps.budgets});
    },
    resetNewBudgetField() {
      this.setState({
              newBudgetCode: "",
              newBudgetLabel: "",
              newBudgetCost: "",
              newBudgetQuant: "",
              newBudgetTotal: "",
              newBudgetDescription: "",
      });
    },
    postAllBudgets() {
      this.setState({changed: false});
      this.props.postAllBudgets();
    },
    handleSubmit(e) {
      e.preventDefault();
      //create a budget object, push it to the temp budget storage array
      var budget = {
        description: this.state.newBudgetDescription,
        glCode: this.state.newBudgetCode,
        cost: this.state.newBudgetCost,
        quantity: this.state.newBudgetQuant,
        total: this.state.newBudgetCost * this.state.newBudgetQuant,
        projs_id: this.props.id
      };
      this.props.addNewBudget(budget);
      this.resetNewBudgetField();
    },
    handleNewTotalChange(e) {
      this.setState({
        newBudgetTotal: e.target.value
      });
    },
    setChangedStatus(val) {
      this.setState({changed: val ? true : false});
    },
    setFilter(e) {
      this.setState({filter: e.target.value.toLowerCase()});
    },
    handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
    },
    selectCata(e) {
      this.setState({
        newBudgetCode: e,
        filter: ""
      });
    },
    render: function () {
      const budgetDropdownItem = (node, idx) =>
      (
        node.cat === "header" ? <MenuItem header key={idx}>{node.label}</MenuItem>
          : <MenuItem eventKey={node.id} key={idx} onSelect={this.selectCata}>{node.label}</MenuItem>
      );
      let code = this.state.newBudgetCode;
      const { total } = this.props;

      return (
        <div style={{"marginTop":"20px"}}>
          {
            this.state.changed ?
              <Button bsStyle="warning" onClick={this.postAllBudgets}>
                Save Changes
              </Button>
              : <br />
          }
          {
            this.state.budgets &&
            this.state.budgets.map((row, key) =>
              <div key={key}>
                <BudgetNode  idx={key} budget = {row} lock={true}
                            changed = {this.state.changed}
                            setChangedStatus = {this.setChangedStatus}
                            deleteBudgetNode={this.props.deleteBudgetNode}
                            handleBudgetChange = {this.props.handleBudgetChange}
                            handleBudgetSelect = {this.props.handleBudgetSelect}/>
               <br />
              </div>
          )
          }
          <Form inline onSubmit={this.handleSubmit} className="budgetFormReqBudget">
            <FormGroup validationState="success">
              <InputGroup>
                <InputGroup.Addon>Requested budget: </InputGroup.Addon>
                <FormControl readOnly value={"$"+total} />
              </InputGroup>
            </FormGroup>
            <br />
            <FormGroup validationState="success">
              <ControlLabel>Add New Budget Item:</ControlLabel>
            </FormGroup>
            <br />
            <InputGroup>
                <InputGroup.Addon>Description</InputGroup.Addon>
               <FormControl type="text" value={this.state.newBudgetDescription}
                            name="newBudgetDescription" required
                           placeholder="Description" onChange={this.handleChange}/>
             </InputGroup>

            <DropdownButton bsStyle={"default"} id="budgetCatSelect"
                    title={cata[code] && cata[code].label+": "+cata[code].code || "Category"} >
              <CustomSearch id={"5"} name={"cataDropdown"}
                      data={{value: this.state.filter, onChange: this.setFilter}}/>
             {cata
               .filter((node) =>
                  node.label.toLowerCase().includes(this.state.filter))
               .map(budgetDropdownItem)
             }
            </DropdownButton>

            <InputGroup id="newBudgetForm">
              <InputGroup.Addon>Cost:</InputGroup.Addon>
              <FormControl type="number" placeholder="Cost"
                           onChange={this.handleChange} name="newBudgetCost"
                           value={this.state.newBudgetCost} />
            </InputGroup>
            <InputGroup id="newBudgetForm">
              <InputGroup.Addon>Quant:</InputGroup.Addon>
              <FormControl type="number" placeholder="Units"
                           onChange={this.handleChange} name="newBudgetQuant"
                           value={this.state.newBudgetQuant} />
            </InputGroup>
            <InputGroup id="newBudgetTotal">
              <FormControl type="text" readOnly value={this.state.newBudgetTotal =
                              "Total: $" + this.state.newBudgetCost *
                                  this.state.newBudgetQuant} />
            </InputGroup>
            <Button onClick={this.handleSubmit} type="submit">
            Add
            </Button>

        </Form>
      </div>
    );
   }
});

export default Budget;
