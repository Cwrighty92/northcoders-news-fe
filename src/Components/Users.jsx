import React, { Component } from "react";
import "./styles/Users.css";
import UsersBody from "./UsersBody";
class Users extends Component {
  render() {
    return (
      <div>
        {this.props.users.map(user => {
          return <UsersBody user={user} key={user._id} />;
        })}
      </div>
    );
  }
}

export default Users;
