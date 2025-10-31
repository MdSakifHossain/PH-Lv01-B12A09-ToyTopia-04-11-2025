import React from "react";
import { TiAdjustContrast } from "react-icons/ti";

const LoadingSpinner = () => {
  return (
    <div className="body text-gray-300 font-outfit min-h-svh flex flex-col items-center justify-center gap-4">
      <div className="flex flex-col gap-4 items-center justify-center animate-pulse">
        <TiAdjustContrast className="text-9xl animate-spin" />
        <h3 className="text-8xl">Loading... </h3>
      </div>
    </div>
  );
};

export default LoadingSpinner;
