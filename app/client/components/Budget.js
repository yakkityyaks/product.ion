import React from 'react';
import { Button, DropdownButton, Form, FormGroup, InputGroup, MenuItem, FormControl } from 'react-bootstrap';
import BudgetNode from './BudgetNode';
import CustomSearch from './CustomSearch';

import cata from "../data/public";

const Budget = React.createClass({
    getInitialState: function() {
      return {
        newBudgetCode: "", newBudgetLabel: "", newBudgetTotal: "",
        newBudgetCost: "", newBudgetQuant: "", newBudgetDescription: "",
        filter: "",

      };
    },
    resetNewBudgetField() {
      this.setState({
              newBudgetCode: "",
              newBudgetLabel: "",
              newBudgetTotal: ""
      });
    },
    removeBudgetNode(idx) {
      var newStore = this.state.tempStore
          .slice(0, idx).concat()
          .concat(this.state.tempStore.slice(idx + 1));

      this.setState({tempStore : newStore});
    },
    handleSubmit(e) {
      //create a budget object, push it to the temp budget storage array
      var budget = {
        description: this.state.newBudgetDescription,
        glCode: this.state.newBudgetCode,
        category: this.state.newBudgetLabel,
        cost: this.state.newBudgetTotal,
        quant: this.state.newBudgetQuant,
        total: this.state.newBudgetTotal * this.state.newBudgetQuant,
        projs_id: 2
      };
      console.log("Budget object is ", budget);

      // newList = this.state.tempStore;
      // newList.push(budget);

      //set the new total budget
      const newTotal = this.props.total/1 + this.state.newBudgetTotal/1;
      this.props.updateBudget(newTotal);

      //updates the temp store
      // this.setState({
      //   tempStore : newList
      // });
      this.resetNewBudgetField();
      this.props.postNewBudget(budget);
    },
    handleClick(e) {
      e.preventDefault();
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

      return (
        <div>
          {
            this.props.budget && this.props.budget.map((row, key) =>
              <BudgetNode key={key} idx={key} budget = {row} lock={true}
                          removeBudgetNode={this.removeBudgetNode}
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
          <Button onClick={this.onSubmit} type="submit">
            Add
          </Button>
          </FormGroup>
          <FormControl readOnly value={"$" + this.props.total} />
          <Button type="submit">Submit your Budget!</Button>
        </Form>
      </div>
    );
   }
});

export default Budget;
