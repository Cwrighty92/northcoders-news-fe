import React, { Component } from "react";
import "./Articles.css";
import Heading from "./Heading";
import Topics from "./Topics";
import ArticlesBody from "./ArticlesBody";
import * as api from "../../Api";
import SortButtons from "./SortButtons";
import { Redirect } from "react-router-dom";

class Articles extends Component {
  state = {
    articles: [],
    errorArticles: false
  };

  componentDidMount() {
    api
      .fetchArticles()
      .then(({ data }) => {
        this.setState({ articles: data.articles });
      })
      .catch(err => {
        this.setState({ errorArticles: true });
      });
  }
  render() {
    if (this.state.errorArticles) return <Redirect to="/error/500" />;
    else {
      let filteredArticles = this.filterArticles();
      return !filteredArticles.length ? (
        <p> Loading </p>
      ) : (
        <div className="article-window">
          {!this.props.username && (
            <div className="article-titles">
              <Heading />
              <Topics />
              <h3>Articles({filteredArticles.length})</h3>
              <SortButtons sortArticles={this.sortArticles} />
            </div>
          )}
          <div className="article-window">
            {filteredArticles.map(article => {
              return <ArticlesBody article={article} key={article._id} />;
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
  filterArticles = () => {
    let filteredArticles = [];
    if (this.props.topicId) {
      filteredArticles = this.state.articles.filter(article => {
        return article.belongs_to === this.props.topicId;
      });
    } else if (this.props.username) {
      filteredArticles = this.state.articles.filter(article => {
        return article.created_by.username === this.props.username;
      });
    } else {
      filteredArticles = [...this.state.articles];
    }
    return filteredArticles;
  };
}

export default Articles;
