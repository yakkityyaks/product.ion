import React from 'react';
import NavBar from './NavBar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

// takes all the users as initial state.
// changed is the flag used to make the save button appear or disappear.
// validate array receives undefined since react-bootstrap highlights to a specific color unless set to undefined.
const UserList = React.createClass({
  getInitialState() {
    const users = this.props.organization.users,
          changed = false,
          validate = [];
    users.forEach((user) => validate.push(undefined));
    return {users, validate, changed};
  },
  onSubmit(e) {
    e.preventDefault();
    //make sure there's at least one admin in every organization.

    this.state.validate.forEach((status, idx) => {
      if (status === "error") {
        console.log("UserList: this.state.users[idx] ", this.state.users[idx]);
        this.props.updateUser(this.state.users[idx]);
      }
    });
    // this.setState({changed: false});
  },
  onChange(event) {
    console.log("EVENT.TARGET ", event.target);
    let {validate, users} = this.state;
    const values = {"Admin": 0, "Producer": 1, "User": 2};

    validate[event.target.name] = "error";
    // assign perm number to users in state.
    users[event.target.name].perm = values[event.target.value];
    this.setState({changed: true, validate, users});
    console.log('state of perm ', users[event.target.name].perm);
  },
  render() {
    const {state} = this;
    const permName = {0: "Admin", 1: "Producer", 2: "User"};

    return (
      <div className="settingsMemberNode">
        <Form onSubmit={this.onSubmit}>
          {state.changed &&
            <Button bsStyle="success" ref="changeButton"
                    type="submit">Save Changes</Button>}
          {state.users.map((user, key) =>
            <FormGroup key={key} validationState={state.validate[key]}>
              <ControlLabel>{user.username}</ControlLabel>
              <FormControl componentClass="select" className="settingsMemberNode-perm"
                onChange={this.onChange} name = {key} value={permName[user.perm]}>
                <option value="Admin">Admin</option>
                <option value="Producer">Producer</option>
                <option value="User">User</option>
              </FormControl>
            </FormGroup>
          )}
      </Form>
      </div>
    );
  }
});

export default UserList;
