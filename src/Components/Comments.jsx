import React, { Component } from "react";
import "./styles/Comments.css";
import * as api from "../Api";

class Comments extends Component {
  state = {
    commments: []
  };

  componentDidMount() {
    api.fetchArticleComments(this.props.articleId).then(({ data }) => {
      this.setState({ comments: data.comments });
    });
  }

  render() {
    return (
      <div className="comments section">
        {this.state.comments &&
          this.state.comments.map(comment => {
            return (
              <div className="individual-comment-window" key={comment._id}>
                <p>{comment.body}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Comments;
