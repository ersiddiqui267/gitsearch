import React from "react";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./layout/Alert";

const Home = function (props) {
  return (
    <React.Fragment>
      <Alert showAlert={props.showAlert} />
      <Search
        searchUsers={props.searchUsers}
        clearUsers={props.clearUsers}
        showClear={props.users.length > 0 ? true : false}
      />
      <Users loading={props.loading} users={props.users} />
    </React.Fragment>
  );
};

export default Home;
