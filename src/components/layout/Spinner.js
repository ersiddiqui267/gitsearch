import React from "react";
import spinner from "../../img/spinner.gif";

const Spinner = function () {
  return (
    <React.Fragment>
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: "200px",
          display: "block",
          margin: "auto",
        }}
      />
    </React.Fragment>
  );
};

export default Spinner;
