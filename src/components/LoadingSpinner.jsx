import React from "react";
import { LuLoaderCircle } from "react-icons/lu";

const LoadingSpinner = () => {
  return (
    <div className="flex-1 text-gray-300 font-outfit flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 items-center justify-center">
        <LuLoaderCircle className="text-5xl lg:text-8xl animate-spin" />
        <h3 className="text-4xl lg:text-6xl">Loading... </h3>
      </div>
    </div>
  );
};

export default LoadingSpinner;
