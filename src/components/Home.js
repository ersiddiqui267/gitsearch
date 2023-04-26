import React from "react";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./layout/Alert";

const Home = function () {
  return (
    <React.Fragment>
      <Alert />
      <Search />
      <Users />
    </React.Fragment>
  );
};

export default Home;
