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
        filter: "", budgets: this.props.budgets, changed: false
      };
    },
    componentWillReceiveProps: function(newProps){
      if (newProps.budgets) {
        this.setState({budgets: newProps.budgets});
      }
      this.setState({trigger: true});
    },

    //Not needed, use ComponentWillReceiveProps
    // shouldComponentUpdate: function(nextProps, nextState) {
    //   console.log('in the should update ', nextProps, nextState);
    //   this.setState({budgets: nextProps.budgets});
    //   return this.state.trigger || false;
    // },
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
    handleSubmit(e) {
      e.preventDefault();
      //create a budget object, push it to the temp budget storage array
      var budget = {
        description: this.state.newBudgetDescription,
        glCode: this.state.newBudgetCode,
        cost: this.state.newBudgetCost,
        quantity: this.state.newBudgetQuant,
        total: this.state.newBudgetCost * this.state.newBudgetQuant,
        projs_id: 2
      };
      console.log("Budget object is ", budget);

      this.props.addNewBudget(budget);
      this.resetNewBudgetField();
    },
    handleNewTotalChange(e) {
      this.setState({
        newBudgetTotal: e.target.value
      });
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
      return (
        <div style={{"margin-top":"20px"}}>
          {
            this.state.budgets &&
            this.state.budgets.map((row, key) =>
              <div>
                <BudgetNode key={key} idx={key} budget = {row} lock={true}
                            deleteBudgetNode={this.props.deleteBudgetNode}
                            handleBudgetChange = {this.props.handleBudgetChange}
                            handleBudgetSelect = {this.props.handleBudgetSelect}/>
               <br />
              </div>
          )
          }
          <br>
          </br>
            <br></br>
          <ControlLabel>Add New Budget Item:</ControlLabel>
          <Form inline onSubmit={this.handleSubmit}>
            <InputGroup>
                <InputGroup.Addon>Description</InputGroup.Addon>
               <FormControl type="text" value={this.state.newBudgetDescription}
                            name="newBudgetDescription" required
                           placeholder="Description" onChange={this.handleChange}/>
             </InputGroup>
            <DropdownButton bsStyle={"default"} id="catSelect"
                    title={cata[code] && cata[code].label+": "+cata[code].code || "Category"} >
              <CustomSearch id={"5"} name={"cataDropdown"}
                      data={{value: this.state.filter, onChange: this.setFilter}}/>
             {cata
               .filter((node) =>
                  node.label.toLowerCase().includes(this.state.filter))
               .map(budgetDropdownItem)
             }
            </DropdownButton>
            <Form inline>
              <InputGroup className="budgetNodeForm">
                <InputGroup.Addon>Cost:</InputGroup.Addon>
                <FormControl type="number" placeholder="Cost"
                             onChange={this.handleChange} name="newBudgetCost"
                             value={this.state.newBudgetCost} />
              </InputGroup>
              <InputGroup className="budgetNodeForm">
                <InputGroup.Addon>Quant:</InputGroup.Addon>
                <FormControl type="number" placeholder="Units"
                             onChange={this.handleChange} name="newBudgetQuant"
                             value={this.state.newBudgetQuant} />
              </InputGroup>
              <InputGroup className="budgetNodeTotal">
                <FormControl type="text" readOnly value={this.state.newBudgetTotal =
                                "Total: $" + this.state.newBudgetCost *
                                    this.state.newBudgetQuant} />
              </InputGroup>
              <Button onClick={this.handleSubmit} type="submit">
              Add
              </Button>
            </Form>
          <FormControl readOnly value={"$" + this.props.total} />
        </Form>
      </div>
    );
   }
});

export default Budget;
