import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex-1 flex items-center justify-center flex-col gap-4">
      <h3 className="text-3xl lg:text-5xl text-center font-bold">
        Page Not fOund
      </h3>
      <Link
        to={`/`}
        className="underline underline-offset-8 font-semibold font-outfit lg:text-2xl transition-all duration-150 ease-out hover:decoration-violet-500"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default PageNotFound;
