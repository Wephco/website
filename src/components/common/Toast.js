import React from "react";
import PropTypes from "prop-types";

import { ToastContainer, Toast } from "react-bootstrap";

const Toasts = ({ open, close, content, variant }) => {
  return (
    <ToastContainer position="top-end" className="p-3">
      <Toast show={open} onClose={close} bg={variant.toLowerCase()} autohide>
        <Toast.Header>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body
          className={variant === "light" ? "text-dark" : "text-white"}
        >
          {content}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

Toasts.defaultProps = {
  variant: "light",
};

Toasts.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  variant: PropTypes.string,
};

export default Toasts;
