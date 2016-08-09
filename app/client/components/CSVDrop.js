import React from 'react';
import Papa from 'papaparse';
import Dropzone from 'react-dropzone';

const CSVDrop = React.createClass({

// onDrop: function(files){
//     var req = request.post('/upload');
//     files.forEach((file)=> {
//         req.attach(file.name, file);
//     });
//     req.end(callback);
// }

  onDrop (event) {
    let csvObj;
    let file = event.target.files[0];
    console.log("FILEEE ", file);
    let that = this;
    Papa.parse(file, {
      complete: function(data) {
        csvObj = data;
        console.log("DATA ", csvObj.data);
        console.log("this is ", this);
        console.log("Props are ", that.props);
        that.props.parseCSV(csvObj.data);

        // call server to post/create data based on json.
        // render data
      }
    });
  },

  render () {
    return (
      <div>
        <h3>Drop your CSV here</h3>
        <div>
          <input type="file" name="file" onChange={this.onDrop} />
            <label htmlFor="file">Drop some CSV files here, or click to select files to upload.</label>
        </div>
        <div id="demo"></div>
      </div>
    )
  }
});

export default CSVDrop;
