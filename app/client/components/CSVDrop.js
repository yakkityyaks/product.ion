import React from 'react';
import Papa from 'papaparse';
import { ControlLabel, FormControl, FormGroup, Panel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import NavBar from './NavBar.js';


const CSVDrop = React.createClass({

  getInitialState() {
    return {
      projs_id: undefined
    };
  },
  // Papaparse takes a blob file as its first argument.
  // Its second argument is a customizable configuration object. Here, we set the download to true or else the blob file will not be fully downloaded.
  onDrop (file) {
    let that = this;
    let id = this.props.expenses.projId;
    console.log('file', file);
    Papa.parse(file[0].preview, {
      header: true,
      download: true,
      complete: function(res) {
        if(res.length !== 0) {
          console.log(res);
          if (JSON.stringify(res.meta.fields) !== JSON.stringify(["type","vertical","glCode","dateSpent","dateTracked","vendor","method","description","cost"])) {
            alert("Your CSV has an invalid column structure. The first line of your CSV should be 'type,vertical,glCode,dateSpent,dateTracked,vendor,method,description,cost'");
          } else {
            var valid = true;
            res.data.forEach(function(row) {
              if (Object.keys(row).length !== 9) valid = false;
            })
            if (valid) {
              that.props.parseCSV(res.data, id)
            } else {
              alert("Invalid row(s)");
            }
          }
        } else {
          reject('Nothing parsed');
        }
      }
    });
  },
  // we can easily obtain the project name to render by cycling through the list of projects in this.props.
  // we match the project id to the id we have in order to obtain the project name.
  render () {
    let projName="";

    this.props.projects.forEach((project) => {
      if (project.projId === this.props.expenses.projId) {
        projName = project.name;
        return;
      }
    });

    return (
      <div>
        <h3>{"Add Expenses to " + projName + " with a CSV"}</h3>
        <Dropzone type="file" ref="file" onDrop={this.onDrop}>
          <div>Try dropping some CSV files here, or click to select files to upload.</div>
        </Dropzone>
        <h4>The first line of your CSV should be 'type,vertical,glCode,</h4>
        <h4>dateSpent,dateTracked,vendor,method,description,cost'</h4>
      </div>
    );
  }
});

export default CSVDrop;
