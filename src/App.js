import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles/Articles";
import Article from "./Components/Articles/Article";
import Users from "./Components/Users/Users";
import User from "./Components/Users/User";
import TopNavBar from "./Components/TopNavBar";
import LogIn from "./Components/LogIn/LogIn";
import Error404 from "./Components/Errors/Errors";
import * as api from "./Api";

class App extends Component {
  state = {
    currentUser: null
  };
  componentDidUpdate(prevprops, prevState) {
    if (this.state.currentUser !== prevState.currentUser) {
      if (this.state.currentUser) {
        sessionStorage.setItem(
          "currentUser",
          JSON.stringify(this.state.currentUser)
        );
      } else {
        sessionStorage.removeItem("currentUser");
      }
    }
  }
  componentDidMount() {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if (currentUser) {
      this.setState({ currentUser });
    }
  }
  render() {
    return (
      <div className="app-page">
        <TopNavBar
          currentUser={this.state.currentUser}
          handleLogIn={this.handleLogIn}
        />
        <div className="pages">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <LogIn
                  handleLogIn={this.handleLogIn}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              exact
              path="/articles"
              render={() => (
                <Articles currentUser={this.state.currentUser} topicId={null} />
              )}
            />
            <Route
              exact
              path="/topics/:topicid/articles"
              render={props => (
                <Articles
                  topicId={props.match.params.topicid}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              exact
              path="/articles/:articleid"
              render={props => (
                <Article
                  articleId={props.match.params.articleid}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route exact path="/users" component={Users} />
            <Route
              exact
              path="/users/:username"
              render={props => <User username={props.match.params.username} />}
            />
            <Route path="/error/:statusCode" component={Error404} />
            <Route exact path="*" component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }
  handleLogIn = logOutIn => {
    if (logOutIn === "in") {
      api.fetchUser("tickle122").then(({ data }) => {
        this.setState({ currentUser: data.user });
      });
    } else if (logOutIn === "out") {
      sessionStorage.user = null;
      this.setState({ currentUser: null });
    }
  };
}

export default App;
