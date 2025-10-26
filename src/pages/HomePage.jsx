import React from "react";
import { useLoaderData } from "react-router";
import Slider from "../components/Slider";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div className="flex-1">
      <Slider data={data} />
    </div>
  );
};

export default HomePage;
