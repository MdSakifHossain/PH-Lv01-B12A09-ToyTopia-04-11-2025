import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import { TbSearch } from "react-icons/tb";

import GameCard from "../components/GameCard";
import { useTitle } from "../hooks/useTitle";

const AllGames = () => {
  const { popularGames } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  useTitle("All Games");

  const filteredArr = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return popularGames;

    return popularGames.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
  }, [searchQuery, popularGames]);

  return (
    <div className="flex-1 font-outfit pt-4 pb-8 flex flex-col items-start justify-start gap-12 lg:gap-16">
      <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="order-2 xl:order-1 flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            <span className="text-lime-400">All</span> Games:{" "}
            <span className="text-lime-400">({filteredArr.length})</span>
          </h2>
          <p>Note: All Games are Sorted From Most Popular to Least Popular.</p>
        </div>
        <form
          className="xl:col-start-3 order-1 xl:order-2 retro-shadow border-3 border-gray-500 ps-6 w-full flex items-center gap-[1.1rem] flex-row caret-lime-400"
          onSubmit={(e) => e.preventDefault()}
        >
          <TbSearch className="text-3xl text-gray-300" />
          <input
            className="
              w-full text-lg sm:text-xl py-3.5 md:py-5
              focus-visible:outline-0"
            placeholder="Search Here"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </section>

      <section className="w-full flex-1 flex flex-col gap-8">
        {filteredArr.length !== 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredArr.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-6 lg:gap-12">
            <img
              className="w-5/12 lg:w-2/12 rounded"
              src="https://i.giphy.com/WTcgPMgv07ifUiipBF.webp"
              alt="not-found"
            />
            <h2 className="font-display-mono text-2xl lg:text-4xl">
              nO gAme fouNd
            </h2>
          </div>
        )}
      </section>
    </div>
  );
};

export default AllGames;
