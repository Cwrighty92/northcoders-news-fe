import React, { Component } from "react";
import "./styles/Users.css";
import UsersBody from "./UsersBody";
class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return <UsersBody user={user} />;
        })}
      </div>
    );
  }
}

export default Users;
