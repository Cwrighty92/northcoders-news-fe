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
          currentUser={this.props.currentUser}
        />
        <div className="comment-pane">
          <Comments
            articleId={this.props.articleId}
            currentUser={this.props.currentUser}
            handleVote={this.handleVote}
          />
        </div>
      </div>
    );
  }
  handleVote = (voteOption, commentToVote) => {
    if (!commentToVote) {
      let voteNum = 0;
      voteOption === "up" ? (voteNum = 1) : (voteNum = -1);
      let votedArticle = { ...this.state.article };
      votedArticle.votes = votedArticle.votes + voteNum;
      this.setState({
        article: votedArticle
      });
      api.voteOnArticle(this.state.article._id, voteOption);
    } else {
      let voteNum = 0;
      voteOption === "up" ? (voteNum = 1) : (voteNum = -1);
      const updatedComments = this.state.comments.map(comment => {
        if (comment === commentToVote) {
          return {
            ...comment,
            votes: comment.votes + voteNum
          };
        }
        return comment;
      });
      this.setState({
        comments: updatedComments
      });

      api.voteOnComment(commentToVote._id, voteOption);
    }
  };
}

export default Article;
