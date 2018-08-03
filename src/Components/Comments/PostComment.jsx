import React, { Component } from "react";
import "./Comments.css";
import PropTypes from "prop-types";
class PostComment extends Component {
  state = {
    commentBody: ""
  };
  render() {
    return (
      <div>
        <div>
          <textarea
            className="post-comment-box"
            value={this.state.commentBody}
            onChange={this.addCommentText}
          />
        </div>
        <button
          className="post-comment-button"
          onClick={() => {
            this.props.addComment(this.props.articleid, this.state.commentBody);
          }}
        >
          Submit
        </button>
      </div>
    );
  }

  addCommentText = event => {
    this.setState({ commentBody: event.target.value });
  };
}

PostComment.propTypes = {
  articleid: PropTypes.string.isRequired,
  addComment: PropTypes.func.isRequired
};
export default PostComment;
