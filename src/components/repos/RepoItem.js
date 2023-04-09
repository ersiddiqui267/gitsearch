import React from "react";

const RepoItem = function (props) {
  const { repo } = props;
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

export default RepoItem;
