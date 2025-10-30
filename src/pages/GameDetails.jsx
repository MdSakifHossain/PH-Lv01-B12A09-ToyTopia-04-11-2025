import React from "react";
import { Link, useLoaderData } from "react-router";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { TbCalendar, TbCode } from "react-icons/tb";

const GameDetails = () => {
  const { gameData } = useLoaderData();
  const {
    thumbnail,
    title,
    short_description,
    genre,
    platform,
    publisher,
    developer,
    release_date,
    freetogame_profile_url,
    description,
  } = gameData;

  const prettyDate = (raw_format) => {
    const [y, m, d] = raw_format.split("-");
    const month = new Date(y, m - 1).toLocaleString("en-US", {
      // month - "short", "long"
      month: "long",
    });
    return `${month} ${Number(d)}, ${y}`;
  };

  return (
    <div className="flex-1 border-4 border-gray-500 retro-shadow rounded-2xl font-outfit px-8 py-8 min-h-svh flex flex-col gap-16">
      <section className="grid grid-cols-3 gap-20">
        <img className="w-full rounded-2xl" src={thumbnail} alt={title} />
        <div className="col-span-2 flex flex-col items-start gap-3">
          <div className="flex flex-col gap-0.5 items-start">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <p className="text-sm">{publisher}</p>
          </div>

          <p className="text-lg text-gray-300">{short_description}</p>

          <div className="border-2 border-violet-500 px-6 py-1 rounded-full text-base text-gray-200">
            {genre}
          </div>

          <div className="w-full pe-12 flex items-center justify-between gap-8">
            <div>
              <div className="flex items-center justify-start gap-3.5">
                <HiOutlineCpuChip className="text-xl" />
                <span>{platform}</span>
              </div>

              <div className="flex items-center justify-start gap-3.5">
                <TbCode className="text-xl" />
                <span>{developer}</span>
              </div>
              <div className="flex items-center justify-start gap-3.5">
                <TbCalendar className="text-xl" />
                <span>{prettyDate(release_date)}</span>
              </div>
            </div>

            <a
              target="_blank"
              href={freetogame_profile_url}
              className="text-xl px-12 py-2 lg:py-4 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
            >
              Install
            </a>
          </div>
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

      <section className="flex-1 flex flex-col items-start gap-4">
        <h3 className="text-3xl">Description: </h3>
        <p className="text-lg">{description}</p>
        <a
          target="_blank"
          href={freetogame_profile_url}
          className="text-sm px-8 py-2 lg:py-3 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
        >
          Read More
        </a>
      </section>
    </div>
  );
};

export default GameDetails;
