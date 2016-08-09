import React from 'react';
import Papa from 'papaparse';
import Dropzone from 'react-dropzone';

const CSVDrop = React.createClass({
  // Papaparse takes a blob file as its first argument.
  // Its second argument is a customizable configuration object. Here, we set the download to true or else the blob file will not be fully downloaded.
  onDrop (file) {
    console.log("EVENTS FROM DROPZONE ", file);
    console.log("THIS IS ", this);
    console.log("THIS.REFS IS ", this.refs);
    let that = this;
    Papa.parse(file[0].preview, {
      header: true,
      download: true,
      complete: function(res) {
        if(res.length !== 0) {
          console.log("COMPLETE DATA ", res);
          console.log("Props are ", that.props);
          that.props.parseCSV(res.data);
        } else {
          reject('Nothing parsed')
        }
      }
    });
  },

  render () {
    return (
      <div>
        <h3>Drop your CSV here</h3>
        <Dropzone type="file" ref="file" onDrop={this.onDrop}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }
});

export default CSVDrop;
