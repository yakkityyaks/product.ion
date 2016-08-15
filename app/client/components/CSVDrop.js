import React from 'react';
import Papa from 'papaparse';
import { FormGroup, FormControl, ControlLabel, Panel } from 'react-bootstrap';
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
    Papa.parse(file[0].preview, {
      header: true,
      download: true,
      complete: function(res) {
        if(res.length !== 0) {
          that.props.parseCSV(res.data, id);
        } else {
          reject('Nothing parsed');
        }
      }
    });
  },
  // we can easily obtain the project name to render by cycling through the list of projects in this.props.
  // we match the project id to the id we have in order to obtain the project name.
  render () {
    let projName="THIS AINT RIGHT";

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
      </div>
    );
  }
});

export default CSVDrop;
