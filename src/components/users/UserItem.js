import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = function (props) {
  return (
    <div
      className="card shadow-sm rounded-0 p-2 my-3"
      style={{ width: "250px" }}
    >
      <img
        className="rounded-circle d-block mx-auto my-4"
        src={props.user.avatar_url}
        alt=""
        width="40%"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.user.login}</h5>
        <Link
          to={`/user/${props.user.login}`}
          className="btn btn-dark btn-sm mt-4"
        >
          More
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  // key: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

export default UserItem;
