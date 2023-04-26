import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../contexts/github/githubContext";

const Repos = function () {
  const githubContext = useContext(GithubContext);

  if (!githubContext.repos.length)
    return (
      <div className="border">
        <p>No Repos Yet!</p>
      </div>
    );

  return (
    <div className="border p-0 m-0 list-group list-group-flush">
      {githubContext.repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
