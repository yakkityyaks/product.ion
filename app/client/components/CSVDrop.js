import React from 'react';
import Papa from 'papaparse';
import Dropzone from 'react-dropzone';
import FileDrop from 'filedrop';
// import d3 from 'd3';

// dropzone, papaparse

const CSVDrop = React.createClass({

// for server posting.
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

  //   var csvData = d3.text(file, function(datasetText) {
  //
  //     var parsedCSV = d3.csv.parseRows(datasetText);
  //
  //     var sampleHTML = d3.select("#demo")
  //     .append("table")
  //     .style("border-collapse", "collapse")
  //     .style("border", "2px black solid")
  //
  //     .selectAll("tr")
  //     .data(parsedCSV)
  //     .enter().append("tr")
  //
  //     .selectAll("td")
  //     .data(function(d){return d;})
  //     .enter().append("td")
  //     .style("border", "1px black solid")
  //     .style("padding", "5px")
  //     .on("mouseover", function(){d3.select(this).style("background-color", "aliceblue")})
  //     .on("mouseout", function(){d3.select(this).style("background-color", "white")})
  //     .text(function(d){return d;})
  //     .style("font-size", "12px");
  //   });
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
