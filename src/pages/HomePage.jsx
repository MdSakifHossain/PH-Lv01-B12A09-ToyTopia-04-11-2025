import React from "react";
import { Link, useLoaderData } from "react-router";
import { RxArrowTopRight } from "react-icons/rx";
import Slider from "../components/Slider";

import { Utils } from "../utils/utils";

const HomePage = () => {
  const data = useLoaderData();

  return (
    <div className="flex-1 font-outfit flex flex-col items-start justify-start gap-16">
      <Slider data={data} />

      {/* Categories Section */}
      <section className="w-full flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">Categories: </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
          {Utils.ALL_CATEGORIES.slice(0, 6).map((cat) => (
            <span
              // className="bg-zinc-700 px-6 py-6 text-base lg:text-xl font-medium rounded-md select-none transition-all duration-200 ease-out hover:scale-110 hover:-translate-y-0.5 hover:shadow-2xl hover:rounded-lg hover:retro-shadow"
              className="bg-zinc-700 px-6 py-6 text-base lg:text-xl font-medium rounded-md select-none"
              key={cat.id}
            >
              {cat.display}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/all-categories`}
            className="px-8 py-4 text-lg font-semibold border-3 border-gray-500 retro-shadow rounded-md transition-all duration-150 hover:scale-110 flex items-center justify-center gap-4"
          >
            _ _ More
            <RxArrowTopRight className="size-7" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
