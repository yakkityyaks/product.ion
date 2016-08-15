import React from 'react';
import { Button, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";

const DashCharts = React.createClass({
	getInitialState() {
		return {
			expenses: undefined,
			data: [],
			sortBy: "type"
		}
	},

	componentDidMount() {
		this.getExpenses();
	},

	getExpenses() {
		if (!this.state.expenses) {
			var ids = [];
	    for (var i = 0; i < this.props.projects.length; i++) {
	      ids.push(this.props.projects[i].projId);
	    }
	    
	    var temp = [Promise.resolve([this.setState.bind(this), this.sortBy]), ApiCall.getExpenses(ids)];
	    Promise.all(temp).then(function(vals) {
	    	var exps = vals[1].data.reduce(function(a,b) {
	    		return a.concat(b);
	    	}, []);
	    	vals[0][0]({expenses: exps}, vals[0][1]);
	    });

	  } else {
	  	this.sortBy();
	  }
	},

	sortBy() {
		var temp = {};
		
		if (this.state.sortBy !== "project") {
			for (var i = 0; i < this.state.expenses.length; i++) {
				var exp = this.state.expenses[i];
				temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] || 0;
				temp[exp[this.state.sortBy]] = temp[exp[this.state.sortBy]] + exp.cost;
			};
		} else {
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
        data: this.state.data
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
		return 'proj not found';
	},

	render() {
		return (
			<div>
				<Form inline>
					<FormGroup controlId="formControlsSelect">
			      <ControlLabel>Sort by</ControlLabel>&nbsp;
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