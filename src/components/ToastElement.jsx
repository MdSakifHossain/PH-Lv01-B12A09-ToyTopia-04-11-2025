import React from "react";

const ToastElement = ({ message }) => {
  return (
    <div className="font-inter px-2 flex items-center justify-between gap-4 select-none">
      <h1 className="text-lg font-medium">
        {message || "Provide the Message"}
      </h1>
    </div>
  );
};

export default ToastElement;
