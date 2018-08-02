import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import * as api from "../Api";

class Topics extends Component {
  state = {
    topics: []
  };
  componentDidMount() {
    api.fetchTopics().then(({ data }) => {
      this.setState({
        topics: data.topics
      });
    });
  }
  render() {
    return (
      <nav className="nav-bar">
        {this.state.topics.map((topic, index) => {
          return (
            <NavLink
              to={`/topics/${topic._id}`}
              className="nav-item"
              key={index}
            >
              {topic.title}
            </NavLink>
          );
        })}
      </nav>
    );
  }
}

export default Topics;
