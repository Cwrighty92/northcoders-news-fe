import React, { Component } from "react";
import "./Article.css";
import * as api from "../../Api";
import Comments from "../Comments/Comments";
import { Redirect } from "react-router-dom";
import Loader from "../Loader";
import JointArticleBody from "./JointArticleBody";
class Article extends Component {
  state = {
    article: {},
    invalidUrl: false
  };
  componentDidMount() {
    api
      .fetchArticle(this.props.articleId)
      .then(({ data }) => {
        this.setState({ article: data.article });
      })
      .catch(err => {
        this.setState({ invalidUrl: true });
      });
  }
  render() {
    if (this.state.invalidUrl)
      return (
        <Redirect to={{ pathname: "/error/404", state: { from: "article" } }} />
      );

    return !Object.keys(this.state.article).length ? (
      <Loader />
    ) : (
      <div className="article-page">
        <JointArticleBody
          article={this.state.article}
          handleVote={this.handleVote}
          currentUser={this.props.currentUser}
        />
        <div className="comment-pane">
          <Comments
            articleId={this.props.articleId}
            currentUser={this.props.currentUser}
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
