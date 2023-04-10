import React from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";

class User extends React.Component {
  componentDidMount() {
    const path = window.location.pathname;
    const login = path.slice(path.lastIndexOf(`/`) + 1);

    this.props.getUser(login);
    this.props.getRepos(login);
  }

  render() {
    if (this.props.loading) return <Spinner />;
    // if (!this.props.user) return;

    const {
      avatar_url,
      bio,
      blog,
      company,
      followers,
      following,
      hireable,
      html_url,
      location,
      login,
      name,
      public_gists,
      public_repos,
    } = this.props.user;

    const { repos } = this.props;

    return (
      <React.Fragment>
        <div className="d-flex justify-content-between align-items-center">
          <Link to="/" className="btn btn-dark btn-sm rounded-0 my-3">
            Back to Search
          </Link>
          <span>
            Hireable:{" "}
            {hireable ? (
              <i className="bi bi-check-circle-fill text-success"></i>
            ) : (
              <i className="bi bi-x-circle-fill text-danger"></i>
            )}
          </span>
        </div>
        <div className="row mx-0 border">
          <div className="col-sm-5 text-center p-4">
            <img
              src={avatar_url}
              className="rounded-circle mb-2"
              alt=""
              style={{ width: "150px" }}
            />
            {name && <h1>{name}</h1>}
            {location && <p>Location: {location}</p>}
          </div>
          <div className="col-sm-7 p-4">
            {bio && (
              <React.Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </React.Fragment>
            )}
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline-dark rounded-0 my-1"
            >
              Visit Github Profile
            </a>
            <ul className="list-unstyled my-3">
              <li>
                {login && (
                  <React.Fragment>
                    <strong>Username: </strong>
                    {login}
                  </React.Fragment>
                )}
              </li>
              <li>
                {company && (
                  <React.Fragment>
                    <strong>Company: </strong>
                    {company}
                  </React.Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <React.Fragment>
                    <strong>Website: </strong>
                    {blog}
                  </React.Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="row mx-0 border my-2 p-3">
          <div className="col-6 col-sm-3 text-center my-1">
            <span className="badge rounded-0 text-bg-success">
              Followers: {followers}
            </span>
          </div>
          <div className="col-6 col-sm-3 text-center my-1">
            <span className="badge rounded-0 text-bg-primary">
              Following: {following}
            </span>
          </div>
          <div className="col-6 col-sm-3 text-center my-1">
            <span className="badge rounded-0 text-bg-dark">
              Public Repos: {public_repos}
            </span>
          </div>
          <div className="col-6 col-sm-3 text-center my-1">
            <span className="badge rounded-0 text-bg-danger">
              Public Gists: {public_gists}
            </span>
          </div>
        </div>

        <Repos repos={repos} />
      </React.Fragment>
    );
  }
}

export default User;
