import React from "react";
import PropTypes from "prop-types";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./layout/Alert";

const Home = function ({ searchUsers, clearUsers, showAlert, users, loading }) {
  return (
    <React.Fragment>
      <Alert showAlert={showAlert} />
      <Search
        searchUsers={searchUsers}
        clearUsers={clearUsers}
        showClear={users.length > 0 ? true : false}
      />
      <Users loading={loading} users={users} />
    </React.Fragment>
  );
};

Home.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showAlert: PropTypes.bool.isRequired,
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Home;
