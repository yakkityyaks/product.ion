import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";
// import Highcharts from 'highcharts';
// import Highcharts3D from 'highcharts-3d';

const ExpenseChart = React.createClass({
	getInitialState() {
		return {
			data: [],
			sortBy: "type"
		}
	},
	componentDidMount() {
		this.sortBy();
	},
	sortBy() {
		var temp = {};
		for (var i = 0; i < this.props.expenses.expenses.length; i++) {
			var exp = this.props.expenses.expenses[i];
			temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] || 0;
			temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] + exp.cost;
		};
		var data = [];
		for (var key in temp) {
			data.push([key, temp[key]])
		}
		this.setState({data: data}, this.loadChart);
	},
	loadChart() {
		var data = this.state.data;
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
        data: data
      }]
    });  
	},
	handleSortChange(e) {
		e.preventDefault()
		this.setState({sortBy: e.target.value}, this.sortBy);
	},
	render() {
		return (
			<div>
				<Form inline>
					<FormGroup controlId="formControlsSelect">
			      <ControlLabel>Sort by</ControlLabel>
			      <FormControl componentClass="select" placeholder="Type" value={this.state.sortBy} onChange={this.handleSortChange}>
			        <option value="type">Type</option>
			        <option value="vertical">Vertical</option>
			        <option value="vendor">Vendor</option>
			        <option value="method">Method</option>
			        <option value="category">Category</option>
			      </FormControl>
			    </FormGroup>
				</Form>
				<div id="expChartContainer"></div>
			</div>
		)
	}


});

export default ExpenseChart;