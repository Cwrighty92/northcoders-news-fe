import React, { Component } from "react";
import "./Comments.css";
import * as api from "../../Api";
import VoteCommentButtons from "./VoteCommentButtons";
import PostComment from "./PostComment";
import CommentBody from "./CommentBody";
import SortCommentButtons from "./SortCommentButtons";
import DeleteButton from "./DeleteButton";
import PropTypes from "prop-types";

class Comments extends Component {
  state = {
    comments: []
  };

  componentDidMount() {
    if (!this.props.username) {
      api
        .fetchArticleComments(this.props.articleId)
        .then(({ data }) => {
          this.setState({ comments: data.comments });
        })
        .catch(console.log);
    } else {
      api.fetchUserComments(this.props.username).then(({ data }) => {
        const userComments = data.comments.filter(comment => {
          return comment.created_by.username === this.props.username;
        });
        this.setState({ comments: userComments });
      });
    }
  }

  render() {
    return (
      <div className="comments section">
        <SortCommentButtons sortComments={this.sortComments} />
        {this.state.comments &&
          this.state.comments.map(comment => {
            return (
              <div className="individual-comment-window" key={comment._id}>
                <CommentBody comment={comment} username={this.props.username} />
                {this.props.articleId &&
                  this.props.currentUser && (
                    <VoteCommentButtons
                      comment={comment}
                      handleVote={this.handleVote}
                    />
                  )}
                {comment.created_by.username === "tickle122" &&
                  this.props.currentUser && (
                    <DeleteButton
                      deleteComment={this.deleteComment}
                      comment={comment}
                    />
                  )}
              </div>
            );
          })}
        {this.props.articleId &&
          this.props.currentUser && (
            <PostComment
              articleid={this.props.articleId}
              addComment={this.addComment}
            />
          )}
      </div>
    );
  }
  sortComments = sortOption => {
    let sortedComments = [];
    if (sortOption === "pop") {
      sortedComments = [...this.state.comments].sort((commentA, commentB) => {
        return commentB.votes - commentA.votes;
      });
      this.setState({ comments: sortedComments });
    } else if (sortOption === "time") {
      sortedComments = [...this.state.comments].sort((commentA, commentB) => {
        return commentB.created_at - commentA.created_at;
      });
      this.setState({ comments: sortedComments });
    }
  };

  handleVote = (commentToVote, voteOption) => {
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
  };
  addComment = (articleid, data) => {
    data = {
      body: data,
      belongs_to: articleid,
      created_by: "5b5efa1381b62f331a19c653"
    };
    api
      .postComment(articleid, data)
      .then(({ data: { comment } }) => {
        this.setState({ comments: [...this.state.comments, comment] });
      })
      .then(() => {
        api
          .fetchArticleComments(this.props.articleId)
          .then(({ data }) => {
            this.setState({ comments: data.comments });
          })
          .catch(console.log);
      });
  };
  deleteComment = commentToDelete => {
    const updatedComments = this.state.comments.filter(comment => {
      return comment !== commentToDelete;
    });
    this.setState({ comments: updatedComments });

    api.deleteComment(commentToDelete._id).catch(err => {
      this.setState({ invalidComment: true });
    });
  };
}

Comments.propTypes = {
  articleId: PropTypes.string,
  currentUser: PropTypes.object
};

export default Comments;
