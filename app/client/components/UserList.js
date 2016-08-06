import React from 'react';
import NavBar from './NavBar';
import { Panel, Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import {findDOMNode } from 'react-dom';

const UserList = React.createClass({
  getInitialState() {
    const users = this.props.organization.users,
          changed = false;
    return {users, changed};
  },
  componentDidMount() {
    const permName = {0: "Admin", 1: "Producer", 2: "User"};

    this.props.organization.users.forEach((user, idx) => {
      var $userNode = findDOMNode(this.refs["user" + idx]);
      $userNode.value = permName[user.perm];
    });
  },
  onChange(event) {
    console.log(event.target);
    console.log(event.target.value);
  },
  render() {
    const { users } = this.props.organization;
    const permName = {0: "Admin", 1: "Producer", 2: "User"};
    const namePerm = {"Admin": 0, "Producer": 1, "User": 2};
    return (
      <div className="settingsMemberNode">
        <Button bsStyle="success" ref="changeButton">Save Changes</Button>
        {users.map((member, key) =>
          <FormGroup key={key}>
            <p className="settingsMemberNode-username">{member.username}</p>
            <FormControl componentClass="select" className="settingsMemberNode-perm"
              ref={"user" + key} onChange={this.onChange}>
              <option value="Admin">Admin</option>
              <option value="Producer">Producer</option>
              <option value="User">User</option>
            </FormControl>
          </FormGroup>
      )}
      </div>
    );
  }
});

export default UserList;
