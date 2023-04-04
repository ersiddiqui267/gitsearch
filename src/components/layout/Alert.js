import React from "react";
import PropTypes from "prop-types";

const Alert = function (props) {
  if (!props.showAlert) return;

  return (
    <div className={`alert mt-4 p-2 ${props.type}`}>
      <i className={props.icon}></i> {props.message}
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
