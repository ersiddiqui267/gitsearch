import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = function (props) {
  return (
    <nav className="navbar bg-danger p-3 justify-content-start text-light">
      <i className={props.icon}></i>
      <h4 className="mx-3 me-auto">{props.title}</h4>
      <Link to="/" className="nav-link px-2">
        Home
      </Link>
      <Link to="/about" className="nav-link px-2">
        About
      </Link>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GitSearch",
  icon: "bi bi-github fs-1",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
