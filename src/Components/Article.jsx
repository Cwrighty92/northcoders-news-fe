import React, { Component } from "react";
import "./styles/Article.css";
import * as api from "../Api";
import Comments from "./Comments";
class Article extends Component {
  state = {
    article: {}
  };

  componentDidMount() {
    api.fetchArticle(this.props.articleId).then(({ data }) => {
      this.setState({
        article: data.article
      });
    });
  }

  render() {
    return (
      <div className="article-page">
        <div className="single-article">
          <h1>{this.state.article.title}</h1>
          <p>
            Created by:
            {this.state.article.title && this.state.article.created_by.username}
          </p>
          <p>{this.state.article.body}</p>
          <p>Votes: {this.state.article.votes}</p>
          <p>Comment Count: {this.state.article.commentCount}</p>
        </div>
        <div className="comment-pane">
          <Comments articleId={this.props.articleId} />
        </div>
      </div>
    );
  }
}

export default Article;
