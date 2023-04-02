import React from "react";
import PropTypes from "prop-types";

const Navbar = function (props) {
  return (
    <nav className="navbar bg-danger p-3 justify-content-start text-light">
      <i className={props.icon}></i>
      <h4 className="mx-3">{props.title}</h4>
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
