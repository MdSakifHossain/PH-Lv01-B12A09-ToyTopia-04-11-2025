import { useMemo, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { TbSearch } from "react-icons/tb";
import { FaArrowLeft } from "react-icons/fa6";

import GameCard from "../components/GameCard";
import { useTitle } from "../hooks/useTitle";

const SingleCategory = () => {
  const { games, category } = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");

  useTitle(category);

  const filteredArr = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return games;

    return games.filter((game) => game.title.toLowerCase().includes(query));
  }, [searchQuery, games]);

  return (
    <div className="flex-1 font-outfit pt-4 pb-8 flex flex-col items-start justify-start gap-8">
      <Link
        className="text-lg font-medium border border-violet-600 bg-violet-600 rounded-full px-4 py-1 flex items-center justify-center gap-2 transition-all duration-150 hover:scale-110 active:scale-98"
        to={`/categories`}
      >
        <FaArrowLeft />
        Categories
      </Link>
      <div className="flex flex-col items-start justify-start gap-16">
        <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="order-2 xl:order-1 flex flex-col items-start gap-4">
            <h2 className="text-3xl lg:text-4xl font-semibold">
              <span className="uppercase">{category}</span>:{" "}
              <span className="text-lime-400">({filteredArr.length})</span>
            </h2>
            <p>
              Note: All Games are Sorted From Most Popular to Least Popular.
            </p>
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
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              <h1 className="text-7xl">(⌣_⌣”)</h1>
              <h2 className="font-display-mono text-5xl">nO gAme fOuNd</h2>
              <p className="text-2xl font-light text-gray-400">
                Are you searching for{" "}
                <span className="text-gray-200 text-4xl font-semibold underline underline-offset-8 decoration-2 decoration-violet-500">
                  {searchQuery}
                </span>
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default SingleCategory;
