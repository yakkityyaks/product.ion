import React from 'react';
import NavBar from './NavBar';
import { Panel, Form, FormControl, Button } from 'react-bootstrap';

const UserList = React.createClass({

  render() {
    const { orgName, user, users } = this.props.organization;
    const permName = {0: "Admin", 1: "Producer", 2: "User"};
    const namePerm = {"Admin": 0, "Producer": 1, "User": 2};
    return (
      <div>
        {users.map((member) =>
          <div>
            <p>{member.username}</p>
            <FormControl componentClass="select" placeholder="Vertical">
              <option value="Admin">Admin</option>
              <option value="select">Producer</option>
              <option value="select">User</option>
            </FormControl>
          </div>
      )}
      </div>
    );
  }
});

export default UserList;
