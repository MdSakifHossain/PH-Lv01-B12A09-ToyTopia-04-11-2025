import React, { useState } from "react";
import { useLoaderData } from "react-router";
import { FiSearch } from "react-icons/fi";

import AppCard from "../../components/AppCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import AppNotFound from "../../components/AppNotFound";

const AllAppsPage = () => {
  const { data } = useLoaderData();

  const [allApps, setAllApps] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isSearchEmpty = searchQuery.trim() === "";

  const appsToDisplayedOnThyCanvas = isSearchEmpty
    ? allApps
    : allApps.filter((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const handleQueryChange = (e) => {
    setIsLoading(true);

    setSearchQuery(e.target.value);
    setTimeout(() => {
      setIsLoading(false);
    }, 150);
  };

  return (
    <section className="p-10 md:p-20 flex-1 w-full flex flex-col gap-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold text-3xl md:text-5xl text-center text-heading-color">
          Our All Applications
        </h1>
        <p className="text-base md:text-xl leading-6 md:leading-8 text-center text-subheading-color">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between flex-col md:flex-row gap-4">
          <h4 className="font-semibold text-2xl leading-8 text-heading-color">
            ({isLoading ? "?" : appsToDisplayedOnThyCanvas.length}) Apps Found
          </h4>

          <label className="input bg-transparent focus:outline-0 focus-within:outline-0">
            <FiSearch className="text-subheading-color" />
            <input
              type="search"
              className="grow focus:outline-0 focus-within:outline-0"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleQueryChange(e)}
            />
          </label>
        </div>

        <div className="w-full">
          {isLoading ? (
            <LoadingSpinner />
          ) : appsToDisplayedOnThyCanvas.length > 0 ? (
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {appsToDisplayedOnThyCanvas.map((app) => (
                <AppCard key={app.id} app={app} />
              ))}
            </div>
          ) : (
            <AppNotFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllAppsPage;
