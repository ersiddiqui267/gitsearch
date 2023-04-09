import React from "react";
import { Link } from "react-router-dom";

const Error = function () {
  return (
    <React.Fragment>
      <div className="text-center mt-5">
        <h2 className="display-2">404</h2>
        <p className="lead">Page Not Found</p>
        <Link to="/">Go to home page</Link>
      </div>
    </React.Fragment>
  );
};

export default Error;
