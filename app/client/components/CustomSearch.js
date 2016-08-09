import  React  from 'react';
import { MenuItem, FormControl } from 'react-bootstrap';

const CustomSearch = React.createClass({
  render: function() {
    return (
      <MenuItem>
        <FormControl type="text" placeholder="Type to filter..."
          value={this.props.data.value} onChange={this.props.data.onChange}/>
      </MenuItem>
    );}
});

export default CustomSearch;
