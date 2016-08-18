import React from 'react';
import { Button, ControlLabel, Form, FormControl, FormGroup } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";

const ExpenseChart = React.createClass({
	getInitialState() {
		return {
			data: [],
			sortBy: "vendor"
		};
	},

	componentDidMount() {
		console.log('expense chart is mounting')
		this.sortBy();
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
        text: ''
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

	handleSortChange(e) {
		e.preventDefault();
		this.setState({sortBy: e.target.value}, this.sortBy);
	},

	render() {
		return (
			<div style={{"padding-top":"10px"}}>
				<Form inline>
					<FormGroup controlId="formControlsSelect">
			      <ControlLabel>Sort by</ControlLabel>&nbsp;
			      <FormControl componentClass="select" placeholder="Vendor" value={this.state.sortBy} onChange={this.handleSortChange}>
			        <option value="vendor">Vendor</option>
			        <option value="method">Method</option>
			        <option value="category">Category</option>
			      </FormControl>
			    </FormGroup>
				</Form>
				<div id="expChartContainer"></div>
			</div>
		);
	}


});

export default ExpenseChart;
