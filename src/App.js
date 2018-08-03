import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles/Articles";
import Article from "./Components/Article/Article";
import Users from "./Components/Users/Users";
import User from "./Components/User/User";
import TopNavBar from "./Components/TopNavBar";
import LogIn from "./Components/Login/LogIn";

class App extends Component {
  state = {
    currentUser: null
  };
  componentDidMount() {}
  render() {
    return (
      <div className="app-page">
        <TopNavBar
          loggedIn={this.state.loggedIn}
          handleLogIn={this.handleLogIn}
        />
        <div className="pages">
          <Route
            exact
            path="/"
            render={() => (
              <LogIn
                handleLogIn={this.handleLogIn}
                loggedIn={this.state.loggedIn}
              />
            )}
          />
          <Route
            exact
            path="/articles"
            render={() => (
              <Articles
                articles={this.state.articles}
                sortArticlesByVotes={this.sortArticlesByVotes}
                loggedIn={this.state.loggedIn}
              />
            )}
          />
          <Route
            exact
            path="/topics/:topicid"
            render={props => (
              <Articles
                articles={this.state.articles}
                topicId={props.match.params.topicid}
                sortArticlesByVotes={this.sortArticlesByVotes}
                loggedIn={this.state.loggedIn}
              />
            )}
          />
          <Route
            exact
            path="/articles/:articleid"
            render={props => (
              <Article
                articleId={props.match.params.articleid}
                addComment={this.addComment}
                loggedIn={this.state.loggedIn}
              />
            )}
          />
          <Route
            exact
            path="/users"
            render={props => (
              <Users users={this.state.users} loggedIn={this.state.loggedIn} />
            )}
          />
          <Route
            exact
            path="/users/:username"
            render={props => (
              <User
                username={props.match.params.username}
                comments={this.state.comments}
                articles={this.state.articles}
                loggedIn={this.state.loggedIn}
              />
            )}
          />
        </div>
      </div>
    );
  }
  handleLogIn = logOutIn => {
    let logger;
    logOutIn === "out" ? (logger = null) : (logger = true);
    this.setState({
      loggedIn: logger
    });
  };
}

export default App;
