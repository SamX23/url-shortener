import React from "react";

function Row({ children, className }) {
  return <div className={`row ${className}`}>{children}</div>;
}

export default Row;
