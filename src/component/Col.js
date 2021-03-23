import React from "react";

function Col({ children, className }) {
  return <div className={`row ${className}`}>{children}</div>;
}

export default Col;
