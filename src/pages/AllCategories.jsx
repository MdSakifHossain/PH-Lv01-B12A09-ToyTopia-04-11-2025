import React from "react";
import { Utils } from "../utils/utils";
import { Link } from "react-router";
import { FaArrowUpLong } from "react-icons/fa6";

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
          {Utils.ALL_CATEGORIES.map((cat) => (
            <Link
              to={cat.href}
              className="border-4 border-zinc-600 px-6 py-6 text-base lg:text-xl font-medium select-none truncate
                transition-all duration-150 
                hover:scale-105 hover:border-violet-500
                active:scale-95 
                flex items-center justify-between gap-3 
                group"
              key={cat.id}
            >
              {cat.display}
              <FaArrowUpLong
                stroke={2}
                className="text-xl text-violet-400 hidden rotate-45 transition-all duration-150 group-hover:block"
              />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCategories;
