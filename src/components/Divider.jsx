import React from "react";

const Divider = ({ className }) => {
  return (
    <span
      className={`w-full max-w-4/12 lg:max-w-1/12 h-2 rounded-full ${className}`}
    ></span>
  );
};

export default Divider;
