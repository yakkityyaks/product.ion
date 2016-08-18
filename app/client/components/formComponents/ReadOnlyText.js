import React from 'react';
import { FormControl } from 'react-bootstrap';

const ReadOnlyText = React.createClass({

  render() {
    return (
      <FormControl
        name={this.props.name}
        readOnly
        value={this.props.value} />
    );
  }
});

export default ReadOnlyText;
