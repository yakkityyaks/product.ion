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
    let data;
    let file = event.target.files[0];
    console.log("FILEEE ", file);
    Papa.parse(file, {
      complete: function(data) {
        data = data;
        console.log("DATA ", data);
        // create action
        // create reducer
        // call server to post/create data based on json.
        // render data via graph, spreadsheet...
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
