import React from 'react';
import { Button, Form, FormGroup, InputGroup,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';
import BudgetNode from './BudgetNode';
import CustomSearch from './CustomSearch';

import cata from "../data/public";

//lockInputs: are they still needed?
const Budget = React.createClass({
    getInitialState: function() {
      const { data } = this.props;
      console.log("data is ", data);
      return {
        newBudgetCode: "", newBudgetLabel: "", newBudgetTotal: "",
        newBudgetCost: "", newBudgetQuant: "", filter: "",

        tempStore: []
      };
    },
    resetNewBudgetField() {
      this.setState({
              newBudgetCode: "",
              newBudgetLabel: "",
              newBudgetTotal: ""
      });
    },
    addBudgetNode: function(e) {
      e.preventDefault();

      //create a budget object, push it to the temp budget storage array
      var budg = {
        glCode: this.state.newBudgetCode,
        cost: this.state.newBudgetTotal,
        category: this.state.newBudgetLabel
      },
      newList = this.state.tempStore;
      newList.push(budg);

      //set the new total budget
      const newTotal = this.props.total/1 + this.state.newBudgetTotal/1;
      this.props.updateBudget(newTotal);

      //updates the temp store
      this.setState({
        tempStore : newList
      });
      this.resetNewBudgetField();
    },
    removeBudgetNode(idx) {
      var newStore = this.state.tempStore
          .slice(0, idx).concat()
          .concat(this.state.tempStore.slice(idx + 1));

      this.setState({tempStore : newStore});
    },
    handleSubmit(e) {
      e.preventDefault();
      var budget = this.state.tempStore;
      var string = JSON.stringify(budget);
      console.log('the budget is', string);
      console.log("The length is ", string.length);
      console.log("This.state.id ", this.state.projId);
      console.log("The object is ", JSON.parse(string));
      let budgetObj = this.state.tempStore;
      let id = this.state.projId;

      console.log("budget object: ", budget);
      this.props.postProjectBudgets(budget, id);
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
    render: function (){
      const budgetDropdownItem = (node, idx) =>
      (
        node.cat === "header" ? <MenuItem header key={idx}>{node.label}</MenuItem>
          : <MenuItem eventKey={node.id} key={idx} onSelect={this.selectCata}>{node.label}</MenuItem>
      );

      return (
        <div>
          {
            this.state.tempStore.map((node, key) =>
              <BudgetNode key={key} idx={key} node = {node} lock={true}
                          removeBudgetNode={this.removeBudgetNode}/>
          )
          }
          <Form inline onSubmit={this.handleSubmit}><FormGroup>
            <DropdownButton bsStyle={"default"} title={"Category"} id="catSelect">
              <CustomSearch id={"5"} name={"testing"}
                      data={{value: this.state.filter, onChange: this.setFilter}}/>
             {cata
               .filter((node) =>
                  node.label.toLowerCase().includes(this.state.filter))
               .map(budgetDropdownItem)
             }
            <br></br>
            </DropdownButton>
            <FormGroup>
              <FormControl readOnly type="text"
                           value={this.state.newBudgetCode} placeholder="GL Code"/>
              <FormControl readOnly type="text" className="budgetFormCata1"
                           value={this.state.newBudgetLabel} placeholder="Category"/>
            </FormGroup>
            <InputGroup className="testing2">
              <InputGroup.Addon>Cost: $</InputGroup.Addon>
              <FormControl type="number" placeholder="Cost"
                           onChange={this.handleChange} name="newBudgetCost"
                           value={this.state.newBudgetCost} />
            </InputGroup>
            <InputGroup className="testing2">
              <InputGroup.Addon>Quant: $</InputGroup.Addon>
              <FormControl type="number" placeholder="Units"
                           onChange={this.handleChange} name="newBudgetQuant"
                           value={this.state.newBudgetQuant} />
            </InputGroup>
            <InputGroup className="testing2">
              <InputGroup.Addon>Total: $</InputGroup.Addon>
              <FormControl type="number" placeholder="Total Estimate"
                           onChange={this.handleChange} name="newBudgetTotal"
                           value={this.state.newBudgetTotal} />
            </InputGroup>
          <Button onClick={this.addBudgetNode} type="submit">
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
