import React from "react";

const ChillPill = ({ children }) => {
  return (
    <span className="border-2 border-violet-500 px-4 py-0.5 rounded-full text-sm lg:text-base text-gray-200 flex items-center justify-center gap-2">
      {children}
    </span>
  );
};

export default ChillPill;
