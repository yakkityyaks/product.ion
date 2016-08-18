import React from 'react';
import { Button, DropdownButton, Form, FormGroup,
  InputGroup, MenuItem, FormControl } from 'react-bootstrap';
import BudgetNode from './BudgetNode';
import CustomSearch from './CustomSearch';

import cata from "../data/public";

const Budget = React.createClass({
    getInitialState: function() {
      return {
        newBudgetCode: "", newBudgetLabel: "", newBudgetTotal: "",
        newBudgetCost: "", newBudgetQuant: "", newBudgetDescription: "",
        filter: "", budgets: this.props.budgets
      };
    },
    componentWillReceiveProps: function(newProps){
      console.log("ding ding ding");
      console.log('in the budget recieve props', newProps.budgets);
      this.setState({trigger: true});
    },

    shouldComponentUpdate: function(nextProps, nextState) {
      console.log('in the should update ', nextProps, nextState);
      this.setState({budgets: nextProps.budgets});
      return this.state.trigger || false;
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
    handleSubmit(e) {
      e.preventDefault();
      //create a budget object, push it to the temp budget storage array
      var budget = {
        description: this.state.newBudgetDescription,
        glCode: this.state.newBudgetCode,
        cost: this.state.newBudgetCost,
        quantity: this.state.newBudgetQuant,
        total: this.state.newBudgetTotal * this.state.newBudgetQuant,
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
        newBudgetCode: cata[e].code,
        newBudgetLabel: cata[e].label,
        filter: ""
      });
    },
    render: function () {
      const budgetDropdownItem = (node, idx) =>
      (
        node.cat === "header" ? <MenuItem header key={idx}>{node.label}</MenuItem>
          : <MenuItem eventKey={node.id} key={idx} onSelect={this.selectCata}>{node.label}</MenuItem>
      );
      // const projBudget = "proj" + this.props.id;
      return (
        <div style={{"margin-top":"20px"}}>
          {
            this.state.budgets &&
            this.state.budgets.map((row, key) =>
              <BudgetNode key={key} idx={key} budget = {row} lock={true}
                          deleteBudgetNode={this.props.deleteBudgetNode}
                          handleBudgetChange = {this.props.handleBudgetChange}
                          handleBudgetSelect = {this.props.handleBudgetSelect}/>
          )
          }
          <br>
          </br>
            <br></br>
          <Form inline onSubmit={this.handleSubmit}><FormGroup>
            <InputGroup>
                <InputGroup.Addon>Description</InputGroup.Addon>
               <FormControl type="text" value={this.state.newBudgetDescription}
                            name="newBudgetDescription" required
                           placeholder="Description" onChange={this.handleChange}/>
             </InputGroup>
            <DropdownButton bsStyle={"default"} title={"Category"} id="catSelect">
              <CustomSearch id={"5"} name={"testing"}
                      data={{value: this.state.filter, onChange: this.setFilter}}/>
             {cata
               .filter((node) =>
                  node.label.toLowerCase().includes(this.state.filter))
               .map(budgetDropdownItem)
             }
            </DropdownButton>
            <FormGroup>
              <FormControl readOnly type="text"
                           value={this.state.newBudgetCode} placeholder="GL Code"/>
              <FormControl readOnly type="text" className="budgetFormCata1"
                           value={this.state.newBudgetLabel} placeholder="Category"/>
            </FormGroup>
            <InputGroup className="testing2">
              <InputGroup.Addon>Cost:</InputGroup.Addon>
              <FormControl type="number" placeholder="Cost"
                           onChange={this.handleChange} name="newBudgetCost"
                           value={this.state.newBudgetCost} />
            </InputGroup>
            <InputGroup className="testing2">
              <InputGroup.Addon>Quant:</InputGroup.Addon>
              <FormControl type="number" placeholder="Units"
                           onChange={this.handleChange} name="newBudgetQuant"
                           value={this.state.newBudgetQuant} />
            </InputGroup>
            <InputGroup className="testing2">
              <InputGroup.Addon>Total:</InputGroup.Addon>
              <FormControl type="text" readOnly value={this.state.newBudgetTotal =
                              "$" + this.state.newBudgetCost *
                                  this.state.newBudgetQuant} />
            </InputGroup>
          <Button onClick={this.handleSubmit} type="submit">
            Add
          </Button>
          </FormGroup>
          <FormControl readOnly value={"$" + this.props.total} />
        </Form>
      </div>
    );
   }
});

export default Budget;
