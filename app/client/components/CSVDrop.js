

const CSVDrop = React.createClass({
  
  handleDrop (event) {
    let options = { input: false },
    dropZone = new FileDrop("dropCSV", options),
    jsonZone = document.getElementById("jsonOutput"),
    cbHeaders = document.getElementById("headers");

    dropZone.event("send", function(files) {
      files.forEach(function (file) {
        file.readData(
          createJSON,
          function(event) {
            alert("error")
          }
        )
      })
    });
  },

  createJSON (str) {
    dropZone.el.value = str;
    let config = {
      header:cbHeaders.checked
    };
    let jsonObject = Papa.parse(str, config).data,
    jsonString = JSON.stringify(jsonObject),
    jsonStringFormatted = jsonString.replace(/{/g,"\n\t{").replace("]", "\n]"),
    jsonZone.value = jsonString;
  },


  render () {
    return (
      <div>
        <h3>Drop your CSV here</h3>
        <label for="headers" >This CSV has headers: </label>
        <textarea type="text" id="headers" onDrop={ this.handleDrop } readOnly>
          Drag & Drop CSV File Here
        </textarea>
        <textarea id="jsonOutput">
          JSON will show up here
        </textarea>

      </div>
    )
  }
});
