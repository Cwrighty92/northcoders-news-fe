import React, { Component } from "react";
import "./Articles.css";
import Heading from "./Heading";
import Topics from "./Topics";
import * as api from "../../Api";
import SortButtons from "./SortButtons";
import { Redirect } from "react-router-dom";
import Loader from "../Loader";
import JointArticleBody from "./JointArticleBody";
import PropTypes from "prop-types";

class Articles extends Component {
  state = {
    articles: [],
    errorArticles500: false,
    errorArticles404: false
  };
  componentDidUpdate(prevProps) {
    if (prevProps.topicId !== this.props.topicId) {
      if (this.props.topicId === null) {
        api
          .fetchArticles()
          .then(({ data }) => {
            this.setState({ articles: data.articles });
          })
          .catch(err => {
            this.setState({ errorArticles500: true });
          });
      }
      if (this.props.topicId !== null) {
        api
          .fetchArticlesByTopic(this.props.topicId)
          .then(({ data }) => {
            this.setState({ articles: data.articles });
          })
          .catch(err => {
            this.setState({ errorArticles404: true });
          });
      }
    }
  }
  componentDidMount() {
    !this.props.topicId
      ? api
          .fetchArticles()
          .then(({ data }) => {
            this.setState({ articles: data.articles });
          })
          .catch(err => {
            this.setState({ errorArticles500: true });
          })
      : api
          .fetchArticlesByTopic(this.props.topicId)
          .then(({ data }) => {
            this.setState({ articles: data.articles });
          })
          .catch(err => {
            this.setState({ errorArticles404: true });
          });
  }
  render() {
    if (this.state.errorArticles500) return <Redirect to="/error/500" />;
    else if (this.state.errorArticles404)
      return (
        <Redirect to={{ pathname: "/error/404", state: { from: "Topic" } }} />
      );
    else {
      return !this.state.articles.length ? (
        <Loader />
      ) : (
        <div className="article-window">
          {!this.props.username && (
            <div className="article-titles">
              <Heading />
              <Topics />
              <h3>Articles({this.state.articles.length})</h3>
              <SortButtons sortArticles={this.sortArticles} />
            </div>
          )}
          <div className="article-window">
            {this.state.articles.map(article => {
              return (
                <JointArticleBody
                  article={article}
                  key={article._id}
                  articles="true"
                />
              );
            })}
          </div>
        </div>
      );
    }
  }
  sortArticles = sortOption => {
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

Articles.propTypes = {
  currentUser: PropTypes.object,
  topicId: PropTypes.string,
  username: PropTypes.string
};

export default Articles;
