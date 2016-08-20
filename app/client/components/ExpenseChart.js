import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";
import cata from "../data/public";

const ExpenseChart = React.createClass({
	getInitialState() {
		return {
			data: [],
			data1: [],
			sortBy: "vendor",
			sortBy1: "description"
		};
	},

	componentDidMount() {
		console.log('expense chart is mounting')
		this.sortBy();
		this.sortByBudg();
	},

	sortBy() {
		var temp = {};
		for (var i = 0; i < this.props.expenses.expenses.length; i++) {
			var exp = this.props.expenses.expenses[i];
			temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] || 0;
			temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] + exp.cost;
		}
		var data = [];
		for (var key in temp) {
			data.push([key, temp[key]]);
		}
		this.setState({data: data}, this.loadChart);
	},

	sortByBudg() {
		var temp = {};
		var budgets = this.props.budgets["proj" + this.props.expenses.id];
		for (var i = 0; i < budgets.length; i++) {
			var budg = budgets[i];
			if (this.state.sortBy1 === "glCode") {
				temp[cata[budg.glCode].code] = temp[cata[budg.glCode].code] || 0;
				temp[cata[budg.glCode].code] = temp[cata[budg.glCode].code] + budg.cost;
			} else if (this.state.sortBy1 === "category") {
				temp[cata[budg.glCode].label] = temp[cata[budg.glCode].label] || 0;
				temp[cata[budg.glCode].label] = temp[cata[budg.glCode].label] + budg.cost;
			} else {
				temp[budg[this.state.sortBy1]] = temp[budg[this.state.sortBy1]] || 0;
				temp[budg[this.state.sortBy1]] = temp[budg[this.state.sortBy1]] + budg.cost;
			}
		}
		var data1 = [];
		for (var key in temp) {
			data1.push([key, temp[key]]);
		}
		this.setState({data1: data1}, this.loadChart1);
	},

	loadChart() {
		var pie = new Highcharts.Chart({
			chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        },
        renderTo: "expChartContainer"
      },
      title: {
        text: 'Breakdown of Expenses for ' + this.props.projName
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
      },
      series: [{
        type: 'pie',
        name: 'Expenses share',
        data: this.state.data
      }]
    });
  },

  loadChart1() {
    var pie1 = new Highcharts.Chart({
			chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        },
        renderTo: "budgChartContainer"
      },
      title: {
        text: 'Breakdown of Budget for ' + this.props.projName
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
      },
      series: [{
        type: 'pie',
        name: 'Expenses share',
        data: this.state.data1
      }]
    });
	},

	handleSortChange(e) {
		e.preventDefault();
		this.setState({sortBy: e.target.value}, this.sortBy);
	},

	handleSortChange1(e) {
		e.preventDefault();
		this.setState({sortBy1: e.target.value}, this.sortByBudg);
	},

	render() {
		return (
			<div style={{"dipslay":"inline-block"}}>
				<div style={{"dipslay":"inline-block","float":"left","width":"50%"}}>
					<Form inline>
				    <FormGroup controlId="formControlsSelect">
				      <ControlLabel bsClass="chartSortSelector">Sort by</ControlLabel>&nbsp;&nbsp;
				      <FormControl componentClass="select" placeholder="Description" value={this.state.sortBy1} onChange={this.handleSortChange1}>
				        <option value="description">Description</option>
				        <option value="glCode">GL Code</option>
				        <option value="category">Expense Label</option>
				      </FormControl>
				    </FormGroup>
					</Form>
					<div style={{"margin-top":"10px"}} id="budgChartContainer"></div>
				</div>
				<div style={{"dipslay":"inline-block","float":"right","width":"50%"}}>
					<Form inline>
						<FormGroup controlId="formControlsSelect">
				      <ControlLabel bsClass="chartSortSelector">Sort by</ControlLabel>&nbsp;&nbsp;
				      <FormControl componentClass="select" placeholder="Vendor" value={this.state.sortBy} onChange={this.handleSortChange}>
				        <option value="vendor">Vendor</option>
				        <option value="method">Method</option>
				        <option value="category">Expense Label</option>
				      </FormControl>
				    </FormGroup>
					</Form>
					<div style={{"margin-top":"10px"}} id="expChartContainer"></div>
				</div>
			</div>
		);
	}


});

export default ExpenseChart;
