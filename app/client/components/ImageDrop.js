import React from 'react';
import Dropzone from 'react-dropzone';
import Papa from 'papaparse';

const ImageDrop = React.createClass({
  getInitialState: function () {
      return {
        files: []
      };
  },

  onDrop: function (files) {
    this.setState({
      files: files
    });
  },

  onOpenClick: function () {
    this.refs.dropzone.open();
  },

  render: function () {
    return (
      <div>
          <Dropzone ref="dropzone" onDrop={this.onDrop}>
              <div>Drop an image of your receipts here, or click to select files to upload.</div>
          </Dropzone>
          <button type="button" onClick={this.onOpenClick}>
              Open Dropzone
          </button>
          {this.state.files.length > 0 ? <div>
          <h2>Uploading {this.state.files.length} file(s)...</h2>
          <div>{this.state.files.map((file) => <img src={file.preview} /> )}</div>
          </div> : null}
      </div>
    );
  }
});
export default ImageDrop;
