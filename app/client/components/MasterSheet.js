import React from 'react';
import { Panel, Table, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import NavBar from './NavBar';
import ApiCall from "../utils/serverCalls";

const MasterSheet = React.createClass({
	getInitialState() {
		return {
			expenses: [],
			data: {},
			sortBy: '',
			projNames: [],
			table: []
		}
	},
	componentDidMount() {
		var ids = [];
		console.log(this.props.projects);
    for (var i = 0; i < this.props.projects.length; i++) {
      ids.push(this.props.projects[i].projId);
    }
    var temp = [Promise.resolve([this.setState.bind(this), this.parseData])];
    for (var i = 0; i < ids.length; i++) {
      // console.log(p
      temp.push(ApiCall.getExpensesByProjectId(ids[i]));
    }
    Promise.all(temp).then(function(vals) {
    	console.log(vals);
    	var exps = [];
    	vals.forEach(function(val, idx) {
    		if (idx !== 0) val.data.expenses.forEach(function(exp) { exps.push(exp)})
    	})
    	console.log('exps', exps)
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
		};
		console.log('temp', temp);

		var table = [];
		var data = {Total: [0,0,0,0,0,0,0,0,0,0,0,0]};
		for (var key in temp) {
			var row = [0,0,0,0,0,0,0,0,0,0,0,0,key];
			data[key] = [];
			for (var i = 0; i < 12; i++) {
				data[key][i] = 0;
			}
			temp[key].forEach(function(exp) {
				data[key][exp.dateSpent.slice(5,7) - 1] = data[key][exp.dateSpent.slice(5,7) - 1] + exp.cost;
				data.Total[exp.dateSpent.slice(5,7) - 1] = data.Total[exp.dateSpent.slice(5,7) - 1] + exp.cost;
				row[exp.dateSpent.slice(5,7) - 1] = row[exp.dateSpent.slice(5,7) - 1] + exp.cost;
			})
			table.push(row);
		}
		this.setState({data: data, table: table, sortBy: Object.keys(temp)[0], projNames: Object.keys(temp)}, this.loadChart);
	},
	loadChart() {
		console.log(this.state.sortBy, this.state.data[this.state.sortBy]);
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
        name: 'Expenses share',
        data: this.state.data[this.state.sortBy]
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
			  <Panel>
	        <NavBar {...this.props}/>
	      </Panel>
				<Panel>
					<Form inline>
						<FormGroup controlId="formControlsSelect">
				      <ControlLabel>Choose Project   </ControlLabel>
				      <FormControl componentClass="select" value={this.state.sortBy} onChange={this.handleSortChange}>
				        {this.state.projNames.map(function(name, idx) {
				        	return <option key={idx} value={name}>{name}</option>
				        })}
				        <option value="Total">Total</option>
				      </FormControl>
				    </FormGroup>
					</Form>
	      	<div id="chartContainer"></div>
				</Panel>
				<Panel>
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
        						<td>{row[12]}</td>
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
        					</tr>
        				)
        			})}
        		</tbody>
        	</Table>
				</Panel>
			</div>
		)
	}
});

export default MasterSheet;
// {Object.entries(this.state.data).map(function(proj) {
//         				return (
//         					<tr>
//         						<td>proj[1][0]</td>
//         						<td>proj[1][1]</td>
//         						<td>proj[1][2]</td>
//         						<td>proj[1][3]</td>
//         						<td>proj[1][4]</td>
//         						<td>proj[1][5]</td>
//         						<td>proj[1][6]</td>
//         						<td>proj[1][7]</td>
//         						<td>proj[1][8]</td>
//         						<td>proj[1][9]</td>
//         						<td>proj[1][10]</td>
//         						<td>proj[1][11]</td>
//         					</tr>
//         				)
//         			})}