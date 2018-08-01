import React, { Component } from "react";
import "./styles/User.css";
import * as api from "../Api";
class User extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    api.fetchUser(this.props.username).then(({ data }) => {
      this.setState({
        user: data.user
      });
    });
  }
  render() {
    return (
      <div className="user-pane">
        <p>{this.state.user.username}</p>
        <img className="user-profile-pic" src={this.state.user.avatar_url} />
      </div>
    );
  }
}

export default User;
