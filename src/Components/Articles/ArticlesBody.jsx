import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "./Articles.css";

const ArticlesBody = props => {
  return (
    <div className="article-tabs" >
      <div className="article-body">
        <Link to={`/articles/${props.article._id}`}>
          <h3>{props.article.title}</h3>
        </Link>
        <br />
        <p>Created By: {props.article.created_by.username}</p>
        <p>{moment(props.article.created_at).format("llll")}</p>
        <p>Votes: {props.article.votes}</p>
        <p>Comments: {props.article.commentCount}</p>
      </div>
    </div>
  );
};

export default ArticlesBody;
