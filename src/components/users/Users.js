import React from "react";
import PropTypes from "prop-types";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";

const Users = function (props) {
  if (props.loading) return <Spinner />;
  else
    return (
      <div className="p-0 pt-5 mx-auto d-flex flex-column align-items-center flex-sm-row flex-sm-wrap justify-content-sm-between justify-content-md-evenly">
        {props.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
};

export default Users;
