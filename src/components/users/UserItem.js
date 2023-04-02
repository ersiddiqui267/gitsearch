import React from "react";
import PropTypes from "prop-types";

const UserItem = function (props) {
  return (
    <div className="card shadow p-2 my-3" style={{ width: "250px" }}>
      <img
        className="rounded-circle d-block mx-auto my-4"
        src={props.user.avatar_url}
        alt=""
        width="40%"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.user.login}</h5>
        <a
          className="btn btn-dark btn-sm mt-4"
          href={props.user.html_url}
          target="_blank"
          rel="noreferrer"
        >
          Go to Profile
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  // key: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserItem;
