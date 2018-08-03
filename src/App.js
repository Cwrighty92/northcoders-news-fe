import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as api from "./Api";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Users from "./Components/Users";
import User from "./Components/User";
import TopNavBar from "./Components/TopNavBar";
import LogIn from "./Components/LogIn";

class App extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    api.fetchUsers().then(({ data }) => {
      this.setState({ users: data.users });
    });
  }
  render() {
    return (
      <div className="app-page">
        <TopNavBar />

        <div className="pages">
          <Route exact path="/" render={() => <LogIn />} />
        </div>
        <div className="pages">
          <Route
            exact
            path="/articles"
            render={() => (
              <Articles
                articles={this.state.articles}
                sortArticlesByVotes={this.sortArticlesByVotes}
              />
            )}
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
                sortArticlesByVotes={this.sortArticlesByVotes}
              />
            )}
          />
        </div>
        <div className="pages">
          <Route
            exact
            path="/articles/:articleid"
            render={props => (
              <Article
                articleId={props.match.params.articleid}
                addComment={this.addComment}
              />
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
            render={props => (
              <User
                username={props.match.params.username}
                comments={this.state.comments}
                articles={this.state.articles}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
