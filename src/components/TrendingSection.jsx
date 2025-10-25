import React from "react";

import AppCard from "./AppCard";
import { Link } from "react-router";

const TrendingSection = ({ mockData }) => {
  const trendingApps = mockData.slice(24, 32);

  return (
    <section className="p-10 md:p-20 flex flex-col gap-10 items-center">
      <div className="w-full text-center flex flex-col items-center gap-4">
        <h3 className="font-bold text-3xl md:text-5xl text-heading-color">
          Trending Apps
        </h3>
        <p className="text-lg leading-6 md:text-xl md:leading-8 text-subheading-color">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {trendingApps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      <Link
        to={`/apps`}
        className="font-semibold text-white px-10 py-3.5 rounded bg-gradient-to-br from-dark-purple to-light-purple"
      >
        Show All
      </Link>
    </section>
  );
};

export default TrendingSection;
