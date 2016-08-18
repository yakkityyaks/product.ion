import React from 'react';
import { ControlLabel, Form, FormControl, FormGroup, Panel, Table } from 'react-bootstrap';
import ApiCall from "../utils/serverCalls";
import NavBar from './NavBar';

const MasterSheet = React.createClass({
	getInitialState() {
		return {
			expenses: [],
			chartData: {},
			sortBy: '',
			projNames: [],
			table: []
		}
	},

	componentDidMount() {
		var ids = [];
    for (var i = 0; i < this.props.projects.length; i++) {
      ids.push(this.props.projects[i].projId);
    }

    var temp = [Promise.resolve([this.setState.bind(this), this.parseData]), ApiCall.getExpenses(ids)];
    Promise.all(temp).then(function(vals) {
      var exps = vals[1].data.reduce(function(a,b) {
        return a.concat(b);
      }, []);
      vals[0][0]({expenses: exps}, vals[0][1]);
    });
	},

	parseData() {
		var temp = {};

		for (var i = 0; i < this.state.expenses.length; i++) {
			var exp = this.state.expenses[i];
			var name = this.getProjName(exp.projs_id);
			temp[name] = temp[name] || [];
			temp[name].push(exp);
		}

		var table = [];
		var chartData = {Total: [0,0,0,0,0,0,0,0,0,0,0,0]};
		for (var key in temp) {
			var row = [0,0,0,0,0,0,0,0,0,0,0,0,0,key];
			chartData[key] = [];
			for (var i = 0; i < 12; i++) {
				chartData[key][i] = 0;
			}
			temp[key].forEach(function(exp) {
				chartData[key][exp.dateSpent.slice(5,7) - 1] = chartData[key][exp.dateSpent.slice(5,7) - 1] + exp.cost;
				chartData.Total[exp.dateSpent.slice(5,7) - 1] = chartData.Total[exp.dateSpent.slice(5,7) - 1] + exp.cost;
				row[exp.dateSpent.slice(5,7) - 1] = row[exp.dateSpent.slice(5,7) - 1] + exp.cost;
        row[12] = row[12] + exp.cost;
			});
			table.push(row);
		}
		this.setState({chartData: chartData, table: table, sortBy: Object.keys(temp)[0], projNames: Object.keys(temp)}, this.loadChart);
	},

	loadChart() {
		var line = new Highcharts.Chart({
			chart: {
        type: 'line',
        renderTo: "chartContainer"
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      title: {
        text: ''
      },
      plotOptions: {
        line: {
          allowPointSelect: true,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        type: 'line',
        name: 'Expenses this Month',
        data: this.state.chartData[this.state.sortBy]
      }]
    });
	},

	handleSortChange(e) {
		e.preventDefault();
		this.setState({sortBy: e.target.value}, this.loadChart);
	},

	getProjName(id) {
		for (var i = 0; i < this.props.projects.length; i++) {
			if (this.props.projects[i].id === id) return this.props.projects[i].name;
		}
		return 'proj not found';
	},

	render() {
		return (
			<div>
	        
        <NavBar {...this.props}/>

        <Panel>
					<Form inline>
						<FormGroup controlId="formControlsSelect">
				      <ControlLabel bsClass="chartSortSelector">Choose Project</ControlLabel>&nbsp;&nbsp;
				      <FormControl componentClass="select" value={this.state.sortBy} onChange={this.handleSortChange}>
				        {this.state.projNames.map(function(name, idx) {
				        	return <option key={idx} value={name}>{name}</option>
				        })}
				        <option value="Total">Total</option>
				      </FormControl>
				    </FormGroup>
					</Form>

          <div style={{"margin-top":"10px"}} id="chartContainer"></div>

          <Table striped bordered>
        		<thead>
        			<tr>
        				<th>Project</th>
        				<th>Jan</th>
        				<th>Feb</th>
        				<th>Mar</th>
        				<th>Apr</th>
        				<th>May</th>
        				<th>Jun</th>
        				<th>Jul</th>
        				<th>Aug</th>
        				<th>Sep</th>
        				<th>Oct</th>
        				<th>Nov</th>
        				<th>Dec</th>
        				<th>Total</th>
        			</tr>
        		</thead>
        		<tbody>
        			{this.state.table.map(function(row) {
        				return (
        					<tr>
        						<td>{row[13]}</td>
        						<td>{row[0]}</td>
        						<td>{row[1]}</td>
        						<td>{row[2]}</td>
        						<td>{row[3]}</td>
        						<td>{row[4]}</td>
        						<td>{row[5]}</td>
        						<td>{row[6]}</td>
        						<td>{row[7]}</td>
        						<td>{row[8]}</td>
        						<td>{row[9]}</td>
        						<td>{row[10]}</td>
        						<td>{row[11]}</td>
                    <td>{row[12]}</td>
        					</tr>
        				);
        			})}
        		</tbody>
        	</Table>
				</Panel>
			</div>
		);
	}
});

export default MasterSheet;
