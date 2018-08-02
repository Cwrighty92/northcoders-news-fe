import React, { Component } from "react";
import "./styles/User.css";
import * as api from "../Api";
import Comments from "./Comments";
class User extends Component {
  state = {
    user: {}
  };

  componentDidMount = async () => {
    try {
      const { data } = await api.fetchUser(this.props.username);
      this.setState({
        user: data.user
      });
    } catch (err) {}
  };
  render() {
    return (
      <div className="user-page">
        <div className="user-pane">
          <p>{this.state.user.username}</p>
          <img
            className="user-profile-pic"
            src={this.state.user.avatar_url}
            alt="user avatar"
          />
        </div>

        <div className="user-comments">
          <Comments username={this.props.username} />
        </div>
      </div>
    );
  }
}

export default User;
