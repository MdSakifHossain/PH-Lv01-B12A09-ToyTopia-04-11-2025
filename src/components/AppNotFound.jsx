import React from "react";
import { Link } from "react-router";

const AppNotFound = () => {
  return (
    <div className="py-10 mx-auto flex flex-col items-center justify-between gap-4">
      <img src="/images/App-Error.png" alt="App Not Found" />
      <div className="flex flex-col items-center gap-2">
        <h2 className="font-semibold text-5xl leading-16 tracking-tight text-heading-color">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-xl leading-8 text-subheading-color">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
      </div>
      <Link
        to={`/apps`}
        className="px-11 py-3.5 rounded bg-gradient-to-br from-dark-purple to-light-purple font-semibold text-white"
      >
        Go Back!
      </Link>
    </div>
  );
};

export default AppNotFound;
