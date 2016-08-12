import React from 'react';
import { Button, Form, FormGroup,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';
import BudgetNode from './BudgetNode';
import CustomSearch from './CustomSearch';

import cata from "../data/public";

const Budget = React.createClass({
    getInitialState: function() {
      return {
        newBudgetCode: "", newBudgetLabel: "", newBudgetTotal: "",
        lockInputs: false, total: 0, filter: "",

        tempStore: []
      };
    },
    resetNewBudgetField() {
      this.setState({
              newBudgetCode: "",
              newBudgetLabel: "",
              newBudgetTotal: "",
              lockInputs: false
      });
    },
    addBudgetNode: function(e) {
      e.preventDefault();
      var budg = {
        code: this.state.newBudgetCode,
        total: this.state.newBudgetTotal,
        label: this.state.newBudgetLabel
      },
      newList = this.state.tempStore;
      newList.push(budg);

      this.resetNewBudgetField();
      this.setState({
        tempStore : newList,
        total: this.state.total/1 + budg.total/1
      });
    },
    removeBudgetNode(idx) {
      var newStore = this.state.tempStore
          .slice(0, idx).concat()
          .concat(this.state.tempStore.slice(idx + 1));

      this.setState({tempStore : newStore});
    },
    handleSubmit(e) {
      e.preventDefault();
      var budget = {total: this.state.total, list: this.state.tempStore};
      var string = JSON.stringify(budget);
    // this.props.postNewBudget(budget);
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
    selectCata(e) {
      this.setState({
        newBudgetCode: cata[e].code,
        newBudgetLabel: cata[e].label,
        filter: "",
        lockInputs: true
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
            </DropdownButton>
            <FormControl readOnly={this.state.lockInputs} type="text"
                         value={this.state.newBudgetCode} placeholder="GL Code"/>
            <FormControl readOnly={this.state.lockInputs} type="text"
                         value={this.state.newBudgetLabel} placeholder="Category"/>
            <FormControl type="text" placeholder="Total Estimate"
                         onChange={this.handleNewTotalChange}
                         value={this.state.newBudgetTotal} />
          <Button onClick={this.addBudgetNode} type="submit">
            Add
          </Button>
          </FormGroup>
          <FormControl readOnly value={this.props.total || this.state.total} />
          <Button type="submit">Submit your Budget!</Button>
        </Form>
      </div>
    );
   }
});

export default Budget;
