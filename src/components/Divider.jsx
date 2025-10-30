import React from "react";

const Divider = ({ className, w, h }) => {
  return (
    <span
      className={`
        ${w ? w : "w-full max-w-4/12 lg:max-w-1/12"} 
        ${h ? h : "h-2"}
        ${className}
        rounded-full
        `}
    ></span>
  );
};

export default Divider;
