import React from "react";
import "../LogIn/LogIn.css";
const Error404 = ({ match: { params }, location }) => {
  if (params.statusCode === "404")
    return (
      <div className="log-in-page">
        <img
          src="http://www.masedperu.com/images/home/404.png"
          alt="404 error sign coming out of hole in ground"
        />
        <p>
          We couldn't find the {location.state.from} you were
          {location.state.from === "comment"
            ? "deleting or voting for"
            : " looking for"}, please try again with a valid{" "}
          {location.state.from}
        </p>
      </div>
    );
  if (params.statusCode === "500")
    return (
      <div className="log-in-page">
        <img
          src="https://broaddrivehosting.net/wp-content/uploads/2018/06/error500.png"
          alt="500 error sign coming out of hole in ground"
        />
        <p>Something went wrong, try again!</p>
      </div>
    );
  else
    return (
      <div className="log-in-page">
        <img
          src="http://www.masedperu.com/images/home/404.png"
          alt="500 error sign coming out of hole in ground"
        />
        <p>The URL does not exist</p>
      </div>
    );
};
export default Error404;
