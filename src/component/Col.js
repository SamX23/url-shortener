import React from "react";

function Col({ children, className }) {
  return <div className={`col ${className}`}>{children}</div>;
}

export default Col;
