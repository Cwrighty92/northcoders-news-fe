import React, { Component } from "react";
import "./Article.css";
import * as api from "../../Api";
import ArticleBody from "./ArticleBody";
import Comments from "../Comments/Comments";

class Article extends Component {
  state = {
    article: {}
  };
  componentDidMount = async () => {
    try {
      const { data } = await api.fetchArticle(this.props.articleId);
      this.setState({
        article: data.article
      });
    } catch (err) {}
  };
  render() {
    return (
      <div className="article-page">
        <ArticleBody
          article={this.state.article}
          handleVote={this.handleVote}
          loggedIn={this.props.loggedIn}
        />
        <div className="comment-pane">
          <Comments
            articleId={this.props.articleId}
            loggedIn={this.props.loggedIn}
          />
        </div>
      </div>
    );
  }
  handleVote = voteOption => {
    let voteNum = 0;
    voteOption === "up" ? (voteNum = 1) : (voteNum = -1);
    let votedArticle = { ...this.state.article };
    votedArticle.votes = votedArticle.votes + voteNum;
    this.setState({
      article: votedArticle
    });
    api.voteOnArticle(this.state.article._id, voteOption);
  };
}

export default Article;