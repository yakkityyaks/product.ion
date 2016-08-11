import React from 'react';
import NavBar from './NavBar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import {findDOMNode } from 'react-dom';

const UserList = React.createClass({
  getInitialState() {
    const users = this.props.organization.users,
          changed = false,
          validate = [];
    users.forEach((user) => validate.push(undefined));
    return {users, validate, changed};
  },
  componentDidMount() {
    const permName = {0: "Admin", 1: "Producer", 2: "User"};

    this.props.organization.users.forEach((user, idx) => {
      var $userNode = findDOMNode(this.refs["user" + idx]);
      $userNode.value = permName[user.perm];
    });
  },
  onSubmit(e) {
    e.preventDefault();
    this.state.validate.forEach((status, idx) => {
      if (status === "error") {
        this.props.updateUser(this.state.users[idx]);
      }
    });
  },
  onChange(event) {
    console.log(event.target);
    let {validate} = this.state;
    validate[event.target.name] = "error";
    this.setState({changed: true, validate});
  },
  render() {
    const {state} = this;
    // const permName = {0: "Admin", 1: "Producer", 2: "User"};
    // const namePerm = {"Admin": 0, "Producer": 1, "User": 2};
    return (
      <div className="settingsMemberNode">
        <Form onSubmit={this.onSubmit}>
          {this.state.changed &&
            <Button bsStyle="success" ref="changeButton"
                    type="submit">Save Changes</Button>}
          {state.users.map((user, key) =>
            <FormGroup key={key} validationState={state.validate[key]}>
              <ControlLabel>{user.username}</ControlLabel>
              <FormControl componentClass="select" className="settingsMemberNode-perm"
                ref={"user" + key} onChange={this.onChange} name = {key}>
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
