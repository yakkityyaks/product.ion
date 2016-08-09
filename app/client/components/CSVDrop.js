import React from 'react';
import Papa from 'papaparse';
import Dropzone from 'react-dropzone';

// dropzone, papaparse

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
        // csvData(data, callback);
      console.log("DATA ", data);
      }
    });

  },

  render () {

    return (
      <div>
        <h3>Drop your CSV here</h3>

        <div>
          {/* <Dropzone ref="dropzone" onChange={this.onDrop}> */}
            <input type="file" name="file" onChange={this.onDrop} />
              <label htmlFor="file">Drop some CSV files here, or click to select files to upload.</label>
          {/* </Dropzone> */}
        </div>
        <div id="demo"></div>

      </div>
    )
  }
});

export default CSVDrop;
