import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="min-h-svh bg-bg font-inter flex flex-col items-start">
      <Header />
      <section className="p-10 md:p-20 flex-1 w-full flex flex-col items-center gap-4">
        <img
          className="lg:w-[31.25rem]"
          src="/images/error-404.png"
          alt="404"
        />
        <div className="flex flex-col items-center gap-2">
          <h2 className="font-semibold text-5xl leading-16 text-heading-color">
            Oops, page not found!
          </h2>
          <p className="text-xl leading-8 text-subheading-color">
            The page you are looking for is not available.
          </p>
        </div>
        <Link
          className="font-semibold bg-gradient-to-br from-dark-purple to-light-purple px-10 py-3.5 rounded text-white"
          to={`/`}
        >
          Go Back!
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default PageNotFound;
