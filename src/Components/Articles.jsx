import React, { Component } from "react";
import "./styles/Articles.css";
import Heading from "./Heading";
import Topics from "./Topics";
import ArticleSortButtons from "./ArticleSortButtons";
import ArticlesBody from "./ArticlesBody";
import * as api from "../Api";
class Articles extends Component {
  state = {
    articles: []
  };
  componentDidMount() {
    api.fetchArticles().then(({ data }) => {
      this.setState({ articles: data.articles });
    });
  }
  render() {
    let filteredArticles = this.filterArticles();

    return (
      <div className="article-window">
        <Heading />
        <Topics />
        <h3>Articles({filteredArticles.length})</h3>
        <ArticleSortButtons sortArticles={this.sortArticles} />
        {filteredArticles.map(article => {
          return <ArticlesBody article={article} key={article._id} />;
        })}
      </div>
    );
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
