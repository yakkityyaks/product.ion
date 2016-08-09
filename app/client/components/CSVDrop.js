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

  onDrop (event) {
    let file = event.target.files[0];
    var fileInputElement = document.getElementById("data");
    // fr.readAsText(fileInputElement.files[0]);
    console.log("ONDROP ", fileInputElement.files[0]);
    this.parseData(file, this.doStuff);
    // let config = {
    //  delimiter: "",	// auto-detect
    //  newline: "",	// auto-detect
    //  header: true,
    //  dynamicTyping: false,
    //  preview: 0,
    //  encoding: "",
    //  worker: false,
    //  comments: false,
    //  step: undefined,
    //  complete: function(data) { data = data; console.log("DATA ", data) },
    //  error: "SORRY!",
    //  download: true,
    //  skipEmptyLines: false,
    //  chunk: undefined,
    //  fastMode: undefined,
    //  beforeFirstChunk: undefined,
    //  withCredentials: undefined
    //  };
    // console.log(files);
    // let x = document.getElementsByName("datafile");
    // Papa.parse(files, config);
    //   .then(function(data) {
    //     console.   log(data);
    //   })
    //   .catch(function(err) {
    //     console.log(err);
    //   })
    // document.getElementById("demo").innerHTML = myfile;
    //
    // Papa.parse(files).forEach(function(file) {
    //   console.log(file);
    // });
  },


  doStuff(data) {
    console.log(data);
  },

  parseData(file, callback) {
    // console.log(file);
    // var file = document.getElementById('data');
    Papa.parse(file, {
      complete: function(data) {
      // callback(data);
      console.log("DATA ", data);
      }
    });
  },


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
