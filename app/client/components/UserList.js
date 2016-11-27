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

  // Make the save button and input field higlighting invisible before mounting component.
  componentWillMount() {
    const users = this.props.organization.users,
          validate = [];
    this.setState({
      changed: false,
      validate,
      noAdminWarning: "",
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
        // Ensure that there's at least one admin in the organization.
        for(let i = 0; i < usersList.length; i++) {
          if(usersList[i].perm === 0) {
            this.props.updateUser(this.state.users[idx]);
            return;
          } else if(i === usersList.length-1 && usersList[i].perm !== 0) {
            this.setState({
              noAdminWarning: "Invalid Input: At least one Administrator required."
            });
          }
        }
      }
    });
    // As in componentWillMount, make the save button and input field higlighting invisible on successful submission.
      const users = this.props.organization.users,
            validate = [];
      this.setState({
        validate,
        changed: false
      });
        users.forEach((user) => validate.push(undefined));
  },
  // Set permission levels in users state.
  onChange(e) {
    e.preventDefault();
    let usersList = this.state.users;

    console.log("EVENT.TARGET ", e.target);
    let {validate, users} = this.state;
    const values = {"Admin": 0, "Producer": 1, "User": 2};
    validate[e.target.name] = "error";
    // Assign perm numbers to users in state.
    users[e.target.name].perm = values[e.target.value];
    // Ensure that there's at least one admin in the organization.
    for(let i = 0; i < usersList.length; i++) {
      if(usersList[i].perm === 0) {
        this.setState({
          saveButtonStyle: "primary",
          button: "Save Changes",
          noAdminWarning: "",
          changed: true
        });
        return;
      } else if(i === usersList.length-1 && usersList[i].perm !== 0) {
        this.setState({
          noAdminWarning: "Invalid Input: At least one Administrator required.",
          button: "Sorry!",
          saveButtonStyle: "warning"
        });
      }
    }
    this.setState({changed: true, validate, users});
    console.log('state of perm ', users[e.target.name].perm);
  },
  render() {
    const {state} = this;
    const permName = {0: "Admin", 1: "Producer", 2: "User"};

    return (
      <div className="settingsMemberNode">
      <div>
        <Button bsStyle="primary" style={{"float":"right","margin":"20px 0 15px 0"}} id="modalButton" onClick={this.props.switchModal}>
        Add a User to Organization
        </Button>
      </div>
        <Form bsClass="usersSettings" onSubmit={this.onSubmit}>
          {state.changed &&
            <Button bsStyle={this.state.saveButtonStyle} style={{"float":"right","margin-bottom":"15px"}}
                    ref="changeButton" type="submit">{this.state.button}</Button>
          }
          <p>{this.state.noAdminWarning}</p>
          <div className="userListContainer">
          {state.users.map((user, key) =>
              <FormGroup bsClass="userList" key={key} validationState={state.validate[key]}>
                <ControlLabel bsClass="chartSortSelector">{user.username}</ControlLabel>&nbsp;&nbsp;
                <FormControl componentClass="select" className="settingsMemberNode-perm"
                  onChange={this.onChange} name = {key} value={permName[user.perm]}>
                  <option value="Admin">Admin</option>
                  <option value="Producer">Producer</option>
                  <option value="User">User</option>
                </FormControl>
              </FormGroup>
          )}
          </div>
      </Form>
      </div>
    );
  }
});

export default UserList;
