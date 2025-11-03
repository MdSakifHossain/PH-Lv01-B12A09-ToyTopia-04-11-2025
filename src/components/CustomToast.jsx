import React from "react";

const CustomToast = ({ children }) => {
  return (
    <div className="bg-[rgb(32,39,55)] text-gray-100 retro-shadow border-4 border-zinc-600 px-6 lg:px-8 py-6 font-outfit rounded-lg flex items-center justify-start gap-4 select-none">
      {children}
    </div>
  );
};

export default CustomToast;
