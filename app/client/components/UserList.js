import React from 'react';
import NavBar from './NavBar';
import { Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

// This takes all the users as initial state.
// "Changed" is the flag for making the save button dis/appear.
// Validate array receives "undefined" since react-bootstrap defaults to specific colors unless set to undefined.
const UserList = React.createClass({
  getInitialState() {
    const users = this.props.organization.users,
          changed = false,
          validate = [],
          noAdminWarning = "",
          button = "Save Changes",
          saveButtonStyle = "primary";
    users.forEach((user) => validate.push(undefined));

    return {
      users,
      validate,
      changed,
      button,
      noAdminWarning,
      saveButtonStyle
    };
  },

  componentWillMount() {
    const users = this.props.organization.users,
          validate = [];
    this.setState({
      changed: false,
      validate: [],
      noAdminWarning: "",
      successMsg: "",
      saveButtonStyle: "primary"
    });
      users.forEach((user) => validate.push(undefined));
  },
  // Status of "error" is a feature of react-bootstrap.
  // Send the entire user object to server.
  onSubmit(e) {
    e.preventDefault();
    let usersList = this.state.users;

    this.state.validate.forEach((status, idx) => {
      if (status === "error") {
        console.log("UserList: this.state.users[idx] ", this.state.users[idx]);
        // Make sure there's at least one admin in every organization.
        for(let i = 0; i < usersList.length; i++) {
          console.log("userList Perm #: ", usersList[i].perm);
          if(usersList[i].perm === 0) {
            console.log("There's an admin at ", usersList[i]);
            this.setState({saveButtonStyle: "success", button: "Success!"});
            this.props.updateUser(this.state.users[idx]);
            return;
          } else if(i === usersList.length-1 && usersList[i].perm !== 0) {
            this.setState({
              saveButtonStyle: "danger",
              button: " Sorry! ",
              noAdminWarning: "Invalid Input: At least one Administrator required.",
            });
            return;
          }
        }
      }
    });
  },
  // Set permission levels in users state.
  onChange(event) {
    this.setState({
      saveButtonStyle: "primary",
      noAdminWarning: "",
      button: "Save Changes"
    });
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
            <Button bsStyle={this.state.saveButtonStyle} ref="changeButton"
                    type="submit">{this.state.button}</Button>
          }
          <p>{this.state.successMsg}</p>
          <p>{this.state.noAdminWarning}</p>
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
