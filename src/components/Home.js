import React, { useContext } from "react";
import Users from "./users/Users";
import Search from "./users/Search";
import Alert from "./layout/Alert";
import GithubContext from "../contexts/github/githubContext";

const Home = function () {
  const githubContext = useContext(GithubContext);

  return (
    <React.Fragment>
      <Alert />
      <Search showClear={githubContext.users.length > 0 ? true : false} />
      <Users />
    </React.Fragment>
  );
};

export default Home;
