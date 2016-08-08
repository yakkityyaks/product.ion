import React from 'react';
import { Button, Form, FormGroup,
  DropdownButton, MenuItem, FormControl } from 'react-bootstrap';
import BudgetNode from './BudgetNode';

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
        total: this.state.total + budg.total
      });
    },
    removeBudgetNode(idx) {
      var newStore = this.state.tempStore
          .slice(0, idx).concat()
          .concat(this.state.tempStore.slice(idx + 1));

      this.setState({tempStore : newStore});
    },
    handleSubmit(e) {
        console.log('the budget is', this.state.tempStore);
    // this.props.postNewBudget(budget);
    },
    handleNewTotalChange(e) {
      this.setState({
        newBudgetTotal: e.target.value
      });
    },
    setFilter(e) {
      e.preventDefault();
      console.log(e.target.value);
      this.setState({filter: e.target.value});
    },
    selectCata(e) {
      this.setState({
        newBudgetCode: cata[e].code,
        newBudgetLabel: cata[e].label,
        lockInputs: true
      });
    },
    render: function (){
      const budgetDropdownItem = (node, idx) =>
      (
        node.cat === "header" ? <MenuItem header key={idx}>{node.label}</MenuItem>
          : <MenuItem eventKey={idx} key={idx} onSelect={this.selectCata}>{node.label}</MenuItem>
      );

      return (
        <div className="Budget2">
          {
            this.state.tempStore.map((node, key) =>
              <BudgetNode key={key} idx={key} node = {node} lock={true}
                          removeBudgetNode={this.removeBudgetNode}/>
          )
          }
          <Form inline onSubmit={this.handleSubmit}><FormGroup>
          <DropdownButton bsStyle={"default"} title={"Category"} id={`catSelect`}>
            <FormControl type="text" placeholder="Type to filter..."
                  ref={c => { this.input = c; }}
                  // onClick={(e) => {console.log(e);
                  //             e.preventDefault();
                  //             e.stopPropagation();}}
                  //
                  //             onSelect={(e) => {console.log(e);
                  //                         e.preventDefault();
                  //                         e.stopPropagation();}}

                  value={this.state.filter} onChange={this.setFilter} />
           {cata
             .filter((node) => node)
             .map(budgetDropdownItem)
           }
          </DropdownButton>
            <FormControl readOnly={this.state.lockInputs} type="text"
                         value={this.state.newBudgetCode} placeholder="GL Code"/>
            <FormControl readOnly={this.state.lockInputs} type="text"
                         value={this.state.newBudgetLabel} placeholder="Category"/>
            <FormControl type="text" placeholder="Total Estimate"
                         onChange={this.handleNewTotalChange}
                         value={this.state.newBudgetTotal} required />
          <Button onClick={this.addBudgetNode} type="submit">
            Add
          </Button>
          </FormGroup></Form>
          <FormControl readOnly value={this.state.total} />
          <Button type="submit">Submit your Budget!</Button>
        </div>
        );
    }
});

export default Budget;
