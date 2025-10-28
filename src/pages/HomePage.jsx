import React from "react";
import { Link, useLoaderData } from "react-router";

import Slider from "../components/Slider";
import { Utils } from "../utils/utils";
import GameCard from "../components/GameCard";

const HomePage = () => {
  const { allGames, popularGames } = useLoaderData();

  return (
    <div className="flex-1 font-outfit pt-4 pb-16 flex flex-col items-start justify-start gap-16">
      <Slider data={allGames} />

      {/* Categories Section */}
      <section className="w-full flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          <span className="text-lime-400">Categories: </span>
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {Utils.ALL_CATEGORIES.slice(0, 18).map((cat) => (
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
            className="px-8 py-4 text-lg font-semibold border-3 border-gray-500 retro-shadow rounded-md transition-all duration-100 hover:scale-105 flex items-center justify-center gap-4"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="w-full flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          <span className="text-lime-400">Popular</span> Games:{" "}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularGames.slice(0, 19).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/all-games`}
            className="px-8 py-4 text-lg font-semibold border-3 border-gray-500 retro-shadow rounded-md transition-all duration-100 hover:scale-105 flex items-center justify-center gap-4"
          >
            Explore More
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
