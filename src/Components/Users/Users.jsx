import React, { Component } from "react";
import "./Users.css";
import UsersBody from "./UsersBody";
import * as api from "../../Api";
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
        <div className="users-page">
          <header>
            <h1 className="user-title">Our Members</h1>
          </header>
        </div>
        <div className="users-section">
          {this.state.users.map(user => {
            return <UsersBody user={user} key={user._id} />;
          })}
        </div>
      </div>
    );
  }
}

export default Users;
