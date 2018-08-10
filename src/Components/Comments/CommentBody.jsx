import React from "react";
import "./Comments.css";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const CommentBody = props => {
  return (
    <div>
      {!props.username && (
        <Link
          to={`/users/${props.comment.created_by.username}`}
          className="comment-link"
        >
          <p>
            Posted By: {props.comment.created_by.username} on{" "}
            {moment(props.comment.created_at).format("llll")}
          </p>
        </Link>
      )}
      {props.username && (
        <Link
          to={`/articles/${props.comment.belongs_to._id}`}
          className="comment-link"
        >
          Article: {props.comment.belongs_to.title}
        </Link>
      )}
      <p>{props.comment.body}</p>

      <p>Votes: {props.comment.votes}</p>
    </div>
  );
};

CommentBody.propTypes = {
  comment: PropTypes.object.isRequired,
  username: PropTypes.string
};

export default CommentBody;
