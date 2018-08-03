import React, { Component } from "react";
import "./styles/Users.css";
import UsersBody from "./UsersBody";
import * as api from "../Api";
class Users extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    api.fetchUsers().then(({ data }) => {
      this.setState({ users: data.users });
    });
  }
  render() {
    return (
      <div>
        {this.state.users.map(user => {
          return <UsersBody user={user} key={user._id} />;
        })}
      </div>
    );
  }
}

export default Users;
