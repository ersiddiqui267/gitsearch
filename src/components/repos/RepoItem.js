import React from "react";
import PropTypes from "prop-types";

const RepoItem = function ({ repo }) {
  return (
    <a
      className="list-group-item list-group-item-action"
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
    >
      <u>{repo.name}</u>
    </a>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
