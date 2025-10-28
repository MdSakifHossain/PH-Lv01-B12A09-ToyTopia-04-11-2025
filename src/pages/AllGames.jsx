import React, { useMemo, useState } from "react";
import { useLoaderData } from "react-router";
import { TbSearch } from "react-icons/tb";

import GameCard from "../components/GameCard";

const AllGames = () => {
  const { popularGames } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArr = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return popularGames;

    return popularGames.filter((game) =>
      game.title.toLowerCase().includes(query)
    );
  }, [searchQuery, popularGames]);

  return (
    <div className="flex-1 font-outfit pt-4 pb-8 flex flex-col items-start justify-start gap-16">
      <section className="w-full grid grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl lg:text-4xl font-semibold">
            <span className="text-lime-400">All</span> Games:{" "}
            <span className="text-lime-400">({filteredArr.length})</span>
          </h2>
          <p>Note: All Games are Sorted in Most Popular to Least Popular.</p>
        </div>
        <form
          className="col-start-3 retro-shadow border-3 border-gray-500 px-6 py-3.5 md:py-5 w-full flex items-center gap-[1.1rem] flex-col md:flex-row caret-lime-400"
          onSubmit={(e) => e.preventDefault()}
        >
          <TbSearch className="text-3xl text-gray-300" />
          <input
            className="
              w-full text-lg sm:text-xl
              focus-visible:outline-0"
            placeholder="Search Here"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
      </section>

      <section className="w-full flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredArr.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllGames;
