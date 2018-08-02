import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import * as api from "./Api";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Users from "./Components/Users";
import User from "./Components/User";
import TopNavBar from "./Components/TopNavBar";
import Heading from "./Components/Heading";
import Topics from "./Components/Topics";

class App extends Component {
  state = {
    articles: [],
    users: []
  };

  componentDidMount() {
    return Promise.all([api.fetchArticles(), api.fetchUsers()]).then(
      ([articles, users]) => {
        this.setState({
          articles: articles.data.articles,
          users: users.data.users
        });
      }
    );
  }

  render() {
    return (
      <div className="app-page">
        <TopNavBar />
        <Heading />
        <Topics />

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
  sortArticlesByVotes = sortOption => {
    let sortedArticles = [];
    if (sortOption === "pop") {
      sortedArticles = [...this.state.articles].sort((articleA, articleB) => {
        return articleB.votes - articleA.votes;
      });
      this.setState({ articles: sortedArticles });
    } else if (sortOption === "time") {
      sortedArticles = [...this.state.articles].sort((articleA, articleB) => {
        return articleB.created_at - articleA.created_at;
      });
      this.setState({ articles: sortedArticles });
    }
  };
}

export default App;
