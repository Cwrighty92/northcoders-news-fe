import React from "react";
import "./styles/Comments.css";
import moment from "moment";
import { Link } from "react-router-dom";

const CommentBody = props => {
  return (
    <div>
      {!props.username && (
        <Link to={`/users/${props.comment.created_by.username}`}>
          <p>Posted By: {props.comment.created_by.username}</p>
        </Link>
      )}
      {props.username && (
        <Link to={`/articles/${props.comment.belongs_to._id}`}>
          Belongs To: {props.comment.belongs_to.title}
        </Link>
      )}
      <p>{props.comment.body}</p>
      <p>{moment(props.comment.created_at).format("llll")}</p>
      <p>Votes: {props.comment.votes}</p>
    </div>
  );
};

export default CommentBody;
