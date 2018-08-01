import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/Articles.css";
class Articles extends Component {
  render() {
    let filteredArticles = [];
    if (this.props.topicId) {
      filteredArticles = this.props.articles.filter(article => {
        if (article.belongs_to === this.props.topicId) return article;
      });
    } else {
      filteredArticles = this.props.articles;
    }
    return (
      <div className="article-window">
        {filteredArticles.map(article => {
          return (
            <div className="article-tabs" key={article._id}>
              <div className="article-body">
                <Link to={`/articles/${article._id}`}>
                  <h3>{article.title}</h3>
                </Link>
                <br />
                <p>Created By: {article.created_by.username}</p>
                <p>Votes: {article.votes}</p>
                <p>Comments: {article.commentCount}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
