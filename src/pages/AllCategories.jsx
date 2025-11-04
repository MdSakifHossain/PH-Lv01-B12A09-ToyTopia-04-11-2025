import React from "react";
import { Constants } from "../constants";

import CategoryCard from "../components/CategoryCard";

const AllCategories = () => {
  return (
    <div className="flex-1 font-outfit pt-4 pb-8 flex flex-col items-start justify-start gap-16">
      <section className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            <span className="text-lime-400">Categories: </span>
          </h2>
          <h3 className="text-lg lg:text-xl">
            Click on a Category to see it's list.
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {Constants.ALL_CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCategories;
