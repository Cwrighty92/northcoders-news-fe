import React, { Component } from "react";
import "./Users.css";
import * as api from "../../Api";
import Comments from "../Comments/Comments";
import Articles from "../Articles/Articles";
import { Redirect } from "react-router-dom";
import Loader from "../Loader";
import UsersBody from "../Users/UsersBody";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    user: {},
    invalidUrl: false
  };

  componentDidMount = async () => {
    try {
      const { data } = await api.fetchUser(this.props.username);
      this.setState({
        user: data.user
      });
    } catch (err) {
      this.setState({ invalidUrl: true });
    }
  };
  render() {
    if (this.state.invalidUrl)
      return (
        <Redirect to={{ pathname: "/error/404", state: { from: "user" } }} />
      );
    else
      return !Object.keys(this.state.user).length ? (
        <Loader />
      ) : (
        <div className="user-page">
          <UsersBody user={this.state.user} />
          <div className="user-articles">
            <Articles username={this.props.username} />
          </div>
          <div className="comment-pane">
            <Comments username={this.props.username} />
          </div>
        </div>
      );
  }
}

User.propTypes = {
  username: PropTypes.string.isRequired
};

export default User;
