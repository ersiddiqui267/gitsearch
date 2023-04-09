import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component {
  state = {
    query: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.query);
    this.setState({
      query: "",
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    this.props.clearUsers();
  };

  render() {
    return (
      <form className="d-grid gap-3 mt-4" onSubmit={this.handleSubmit}>
        <input
          className="form-control shadow rounded-0"
          type="search"
          name="query"
          placeholder="Search Users..."
          value={this.state.query}
          onChange={this.handleChange}
        />
        <input
          className="btn btn-block btn-dark rounded-0"
          type="submit"
          value="Search"
        />
        {this.props.showClear ? (
          <button
            className="btn btn-block btn-secondary rounded-0"
            type="button"
            onClick={this.handleClick}
          >
            Clear
          </button>
        ) : null}
      </form>
    );
  }
}

export default Search;
