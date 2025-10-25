import React from "react";
import { useLoaderData } from "react-router";

import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import TrendingSection from "../../components/TrendingSection";

const HomePage = () => {
  const appsData = useLoaderData();

  return (
    <div className="w-full flex-1">
      <Hero />
      <Banner />
      <TrendingSection mockData={appsData.data} />
    </div>
  );
};

export default HomePage;
