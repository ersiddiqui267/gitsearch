import React from "react";
import PropTypes from "prop-types";
import RepoItem from "./RepoItem";

const Repos = function ({ repos }) {
  if (!repos.length)
    return (
      <div className="border">
        <p>No Repos Yet!</p>
      </div>
    );

  return (
    <div className="border p-0 m-0 list-group list-group-flush">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
