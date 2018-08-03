import React, { Component } from "react";
import "./User.css";
import * as api from "../../Api";
import Comments from "../Comments/Comments";
import Articles from "../Articles/Articles";
import UserBody from "./UserBody";
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
        <UserBody user={this.state.user} />
        <div className="user-articles">
          <Articles username={this.props.username} />
        </div>
        <div className="user-comments">
          <Comments username={this.props.username} />
        </div>
      </div>
    );
  }
}

export default User;
