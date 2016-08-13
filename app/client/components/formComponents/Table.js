import React from 'react';
import { Table } from 'react-bootstrap';

const FormTable = React.createClass({

  handleInputChange: function(e) {
    e.preventDefault();
    this.props.onChange(e.target.name, e.target.value);
  },

  render() {
    return (
      <Table striped bordered condensed hover style={{width: "90%"}}>
          <thead>
            <tr>
              {this.props.headings.map((heading, index) => (
                  <th key={index} value={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
            <tbody>
              <p>Got it</p>
            </tbody>
      </Table>
    );
  }
});

export default FormTable;
