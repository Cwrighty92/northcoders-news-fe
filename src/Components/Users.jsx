import React, { Component } from "react";
import "./styles/Users.css";
import { Link } from "react-router-dom";
class Users extends Component {
  render() {
    return (
      <div className="article-window">
        {this.props.users.map(user => {
          return (
            <div className="user-tabs" key={user._id}>
              <div className="user-body" />
              <Link to={`/users/${user.username}`}>
                <p>
                  {user.username} - {user.name}
                </p>
              </Link>
              <img
                className="user-profile-pic"
                alt="users avatar"
                src={user.avatar_url}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Users;
