import React from "react";
import { useLoaderData } from "react-router";
import Divider from "../components/Divider";

const GameDetails = () => {
  const { gameData } = useLoaderData();
  console.log(gameData);

  return (
    <div className="flex-1 border-4 border-gray-500 retro-shadow rounded-2xl font-outfit px-8 py-8 min-h-svh flex flex-col gap-16">
      <section className="grid grid-cols-3 gap-8">
        <img
          className="w-full rounded-2xl border-4 border-gray-100"
          src={gameData.thumbnail}
          alt={gameData.title}
        />
        <div className="col-span-2 retro-shadow border-4 border-gray-500 px-4 py-4 rounded-2xl flex flex-col items-start gap-3">
          <h2 className="text-4xl font-semibold">{gameData.title}</h2>
          <p className="text-lg text-gray-300">{gameData.short_description}</p>

          <span className="border-2 border-violet-500 px-6 py-1 rounded-full text-lg text-gray-200">
            {gameData.genre}
          </span>
        </div>
      </section>

      <section className="flex-1 flex flex-col gap-4">
        <h3 className="text-3xl">Screenshots: </h3>
        <div className="grid grid-cols-2 gap-4">
          {gameData.screenshots.map((ss, index) => (
            <img
              key={ss.id}
              className="w-full rounded-2xl"
              src={ss.image}
              alt={gameData.title + `${index + 1}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default GameDetails;
