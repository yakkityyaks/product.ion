import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";
// import Highcharts from 'highcharts';
// import Highcharts3D from 'highcharts-3d';

const DashCharts = React.createClass({
	getInitialState() {
		return {
			expenses: undefined,
			data: [],
			sortBy: "type"
		}
	},
	componentDidMount() {
		console.log('mounted', this.state.expenses, this.props.projects);
		this.getExpenses();
	},
	getExpenses() {
		if (!this.state.expenses) {
			var ids = [];
	    for (var i = 0; i < this.props.projects.length; i++) {
	      ids.push(this.props.projects[i].projId);
	    }
	    var temp = [Promise.resolve([this.setState.bind(this), this.sortBy])];
	    for (var i = 0; i < ids.length; i++) {
	      // console.log(p
	      temp.push(ApiCall.getExpensesByProjectId(ids[i]));
	    }
	    Promise.all(temp).then(function(vals) {
	    	var exps = [];
	    	vals.forEach(function(val, idx) {
	    		if (idx !== 0) val.data.expenses.forEach(function(exp) { exps.push(exp)})
	    	})
	    	console.log('exps', exps)
	    	vals[0][0]({expenses: exps}, vals[0][1]);
	    });
	  } else {
	  	this.sortBy();
	  }
	},
	sortBy() {
		var temp = {};
		console.log(this.state.type);
		if (this.state.sortBy !== "project") {
			console.log('sorting by not project');
			for (var i = 0; i < this.state.expenses.length; i++) {
				var exp = this.state.expenses[i];
				temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] || 0;
				temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] + exp.cost;
			};
		} else {
			console.log('sorting by project');
			for (var i = 0; i < this.state.expenses.length; i++) {
				var exp = this.state.expenses[i];
				var projName = this.getProjName(exp.projs_id);
				temp[projName] = temp[projName] || 0;
				temp[projName] = temp[projName] + exp.cost;
			};
		}
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
        renderTo: "dashChartContainer"
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
		this.setState({sortBy: e.target.value}, this.getExpenses);
	},
	getProjName(id) {
		for (var i = 0; i < this.props.projects.length; i++) {
			if (this.props.projects[i].id === id) { console.log(this.props.projects[i]); return this.props.projects[i].name;};
		}
		console.log('not found');
		return 'proj not found';
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
			        <option value="project">Project</option>
			      </FormControl>
			    </FormGroup>
				</Form>
				<div id="dashChartContainer"></div>
			</div>
		)
	}


});

export default DashCharts;