import React from "react";
import PropTypes from "prop-types";

const Alert = function ({ showAlert, icon, message, type }) {
  if (!showAlert) return;

  return (
    <div className={`alert rounded-0 mt-4 p-2 ${type}`}>
      <i className={icon}></i> {message}
    </div>
  );
};

Alert.defaultProps = {
  showAlert: false,
  icon: "bi bi-exclamation-circle",
  message: "Please enter something",
  type: "alert-danger",
};

Alert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Alert;
