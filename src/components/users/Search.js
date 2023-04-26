import React, { useContext } from "react";
import GithubContext from "../../contexts/github/githubContext";

const Search = function () {
  const githubContext = useContext(GithubContext);

  return (
    <form className="d-grid gap-3 mt-4" onSubmit={githubContext.handleSubmit}>
      <input
        className="form-control shadow rounded-0"
        type="search"
        name="query"
        placeholder="Search Users..."
        value={githubContext.query}
        onChange={githubContext.handleChange}
      />
      <input
        className="btn btn-block btn-dark rounded-0"
        type="submit"
        value="Search"
      />
      {githubContext.showClear ? (
        <button
          className="btn btn-block btn-secondary rounded-0"
          type="button"
          onClick={githubContext.handleClick}
        >
          Clear
        </button>
      ) : null}
    </form>
  );
};

export default Search;
