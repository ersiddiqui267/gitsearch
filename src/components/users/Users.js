import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../contexts/github/githubContext";

const Users = function () {
  const githubContext = useContext(GithubContext);

  if (githubContext.loading) return <Spinner />;
  else
    return (
      <div className="p-0 pt-5 mx-auto d-flex flex-column align-items-center flex-sm-row flex-sm-wrap justify-content-sm-between justify-content-md-evenly">
        {githubContext.users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
};

export default Users;
