import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../contexts/github/githubContext";

const Search = function ({ showClear }) {
  const githubContext = useContext(GithubContext);

  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    githubContext.searchUsers(query);
    setQuery("");
  };

  const handleClick = (e) => {
    e.preventDefault();
    githubContext.clearUsers();
  };

  return (
    <form className="d-grid gap-3 mt-4" onSubmit={handleSubmit}>
      <input
        className="form-control shadow rounded-0"
        type="search"
        name="query"
        placeholder="Search Users..."
        value={query}
        onChange={handleChange}
      />
      <input
        className="btn btn-block btn-dark rounded-0"
        type="submit"
        value="Search"
      />
      {showClear ? (
        <button
          className="btn btn-block btn-secondary rounded-0"
          type="button"
          onClick={handleClick}
        >
          Clear
        </button>
      ) : null}
    </form>
  );
};

Search.propTypes = {
  showClear: PropTypes.bool.isRequired,
};

export default Search;
