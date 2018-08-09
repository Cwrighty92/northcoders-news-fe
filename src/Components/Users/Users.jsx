import React, { Component } from "react";
import "./Users.css";
import UsersBody from "./UsersBody";
import * as api from "../../Api";
import { Redirect } from "react-router-dom";
import Loader from "../Loader";
class Users extends Component {
  state = {
    users: [],
    errorUsers: false
  };

  componentDidMount() {
    api
      .fetchUsers()
      .then(({ data }) => {
        this.setState({ users: data.users });
      })
      .catch(err => {
        this.setState({ errorUsers: true });
      });
  }
  render() {
    if (this.state.errorUsers) return <Redirect to="/error/500" />;
    else
      return !this.state.users.length ? (
        <Loader />
      ) : (
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
