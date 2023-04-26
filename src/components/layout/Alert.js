import React, { useContext } from "react";
import PropTypes from "prop-types";
import GithubContext from "../../contexts/github/githubContext";

const Alert = function ({ icon, message, type }) {
  const githubContext = useContext(GithubContext);

  if (!githubContext.showAlert) return;

  return (
    <div className={`alert rounded-0 mt-4 p-2 ${type}`}>
      <i className={icon}></i> {message}
    </div>
  );
};

Alert.defaultProps = {
  icon: "bi bi-exclamation-circle",
  message: "Please enter something",
  type: "alert-danger",
};

Alert.propTypes = {
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
