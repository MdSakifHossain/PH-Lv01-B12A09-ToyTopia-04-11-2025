import React from "react";
import { Link, useLocation } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PageNotFound = () => {
  const location = useLocation();

  return (
    <div className="font-display-mono min-h-svh body text-gray-100 flex flex-col gap-4 lg:gap-12">
      <Header />

      <div className="flex-1 flex items-center justify-center flex-col gap-4">
        <h3 className="text-3xl lg:text-5xl text-center font-bold">
          Page Not fOund
        </h3>
        <p className="font-outfit lg:text-lg">
          <span className="font-semibold text-violet-400">
            {location.pathname}
          </span>{" "}
          Is not a valid Link..!
        </p>
        <Link
          to={`/`}
          className="underline underline-offset-8 font-medium font-outfit text-lg lg:text-xl transition-all duration-150 ease-out hover:decoration-violet-500"
        >
          Go to Home Page
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default PageNotFound;
