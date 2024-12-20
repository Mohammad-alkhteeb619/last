import React, { useEffect, useState } from "react";

const ToastMessage = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timestamp, setTimestamp] = useState("");

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      setTimestamp(new Date().toLocaleTimeString());

      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 15000); // 15 seconds auto-close

      return () => clearTimeout(timer);
    }
  }, [message]);

  const toastClass =
    {
      success: "bg-success text-white",
      error: "bg-danger text-white",
      warning: "bg-warning text-dark",
      info: "bg-info text-white",
    }[type] || "bg-secondary text-white";

  return (
    <div
      className={`toast position-fixed bottom-0 end-0 m-3 ${
        isVisible ? "show" : "hide"
      }`}
      style={{ zIndex: 1055 }}
    >
      <div className={`toast-header ${toastClass}`}>
        <strong className="me-auto">Message</strong>
        <small>{timestamp}</small>
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={() => setIsVisible(false)}
        ></button>
      </div>
      <div className="toast-body">{message}</div>
    </div>
  );
};

export default ToastMessage;
