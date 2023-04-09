import React from "react";
import RepoItem from "./RepoItem";

const Repos = function (props) {
  if (!props.repos.length)
    return (
      <div className="border">
        <p>No Repos Yet!</p>
      </div>
    );

  return (
    <div className="border p-0 m-0 list-group list-group-flush">
      {props.repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default Repos;
