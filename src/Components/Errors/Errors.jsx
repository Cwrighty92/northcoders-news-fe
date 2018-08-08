import React from "react";

const Error = ({ match: { params }, location }) => {
  if (params.statusCode === "404")
    return (
      <div>
        <img
          src="http://www.masedperu.com/images/home/404.png"
          alt="404 error sign coming out of hole in ground"
        />
        <p>
          Error 404! we couldn't find the {location.state.from} you were
          {location.state.from === "comment"
            ? "deleting or voting for"
            : " looking for"}, please try again with a valid{" "}
          {location.state.from}
        </p>
      </div>
    );
  if (params.statusCode === "500")
    return (
      <div>
        <img
          src="https://broaddrivehosting.net/wp-content/uploads/2018/06/error500.png"
          alt="500 error sign coming out of hole in ground"
        />
        <p>Something went wrong, try again!</p>
      </div>
    );
};
export default Error;
