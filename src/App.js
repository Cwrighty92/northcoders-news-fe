import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "./App.css";
import * as api from "./Api";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Users from "./Components/Users";
import User from "./Components/User";
// import LogIn from "./Components/LogIn";
class App extends Component {
  state = {
    articles: [],
    topics: [],
    users: []
  };

  componentDidMount() {
    return Promise.all([
      api.fetchArticles(),
      api.fetchTopics(),
      api.fetchUsers()
    ]).then(([articles, topics, users]) => {
      this.setState({
        articles: articles.data.articles,
        topics: topics.data.topics,
        users: users.data.users
      });
    });
  }

  render() {
    return (
      <div className="app-page">
        <nav className="nav-bar-header">
          <NavLink to={"/"} className="nav-item">
            Articles
          </NavLink>
          <NavLink to={"/users"} className="nav-item">
            Members
          </NavLink>
        </nav>
        <header>
          <h1>NorthCoders News</h1>
        </header>
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

        <div className="pages">
          <Route
            exact
            path="/"
            render={() => <Articles articles={this.state.articles} />}
          />
        </div>
        <div className="pages">
          <Route
            exact
            path="/topics/:topicid"
            render={props => (
              <Articles
                articles={this.state.articles}
                topicId={props.match.params.topicid}
              />
            )}
          />
        </div>
        <div className="pages">
          <Route
            exact
            path="/articles/:articleid"
            render={props => (
              <Article articleId={props.match.params.articleid} />
            )}
          />
        </div>
        <div className="pages">
          <Route
            exact
            path="/users"
            render={props => <Users users={this.state.users} />}
          />
        </div>
        <div className="pages">
          <Route
            exact
            path="/users/:username"
            render={props => <User username={props.match.params.username} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
