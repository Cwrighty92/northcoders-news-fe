import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Articles from "./Components/Articles/Articles";
import Article from "./Components/Article/Article";
import Users from "./Components/Users/Users";
import User from "./Components/User/User";
import TopNavBar from "./Components/TopNavBar";
import LogIn from "./Components/Login/LogIn";
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
    const { Provider } = React.createContext();
    return (
      <div className="app-page">
        <TopNavBar
          currentUser={this.state.currentUser}
          handleLogIn={this.handleLogIn}
        />
        <div className="pages">
          <Provider value={this.state.currentUser}>
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
              render={() => <Articles currentUser={this.state.currentUser} />}
            />
            <Route
              exact
              path="/topics/:topicid"
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
            <Route
              exact
              path="/users"
              render={props => (
                <Users
                  users={this.state.users}
                  currentUser={this.state.currentUser}
                />
              )}
            />
            <Route
              exact
              path="/users/:username"
              render={props => (
                <User
                  username={props.match.params.username}
                  currentUser={this.state.currentUser}
                />
              )}
            />
          </Provider>
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
