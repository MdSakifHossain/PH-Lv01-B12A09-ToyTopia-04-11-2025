import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { HiOutlineCpuChip } from "react-icons/hi2";
import { TbCalendar, TbCode, TbTriangleFilled } from "react-icons/tb";
import { IoMdInformationCircle } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";

const GameDetails = () => {
  const { gameData } = useLoaderData();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

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
    minimum_system_requirements,
  } = gameData;

  const { os, processor, memory, graphics, storage } =
    minimum_system_requirements || {};

  const prettyDate = (raw_format) => {
    const [y, m, d] = raw_format.split("-");
    const month = new Date(y, m - 1).toLocaleString("en-US", {
      // month - "short", "long"
      month: "long",
    });
    return `${month} ${Number(d)}, ${y}`;
  };

  return (
    <>
      <div className="flex-1 font-outfit pt-4 pb-8 flex flex-col items-start justify-start gap-8">
        <Link
          className="text-lg font-medium border border-violet-600 bg-violet-600 rounded-full px-4 py-1 flex items-center justify-center gap-2 transition-all duration-150 hover:scale-110 active:scale-98"
          to={`/games`}
        >
          <FaArrowLeft />
          All Games
        </Link>

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
                <div className="text-lg">
                  <div className="flex items-center justify-start gap-3.5">
                    <div className="tooltip tooltip-left">
                      <div className="tooltip-content text-xl font-medium px-8 py-1.5 bg-[rgb(32,39,55)] border-2 border-gray-500 rounded-none retro-shadow ">
                        Platform / OS
                      </div>
                      <HiOutlineCpuChip className="text-2xl" />
                    </div>
                    <span>{platform}</span>
                  </div>

                  <div className="flex items-center justify-start gap-3.5">
                    <div className="tooltip tooltip-left">
                      <div className="tooltip-content text-xl font-medium px-8 py-1.5 bg-[rgb(32,39,55)] border-2 border-gray-500 rounded-none retro-shadow ">
                        Developer
                      </div>
                      <TbCode className="text-2xl" />
                    </div>
                    <span>{developer}</span>
                  </div>
                  <div className="flex items-center justify-start gap-3.5">
                    <div className="tooltip tooltip-left">
                      <div className="tooltip-content text-xl font-medium px-8 py-1.5 bg-[rgb(32,39,55)] border-2 border-gray-500 rounded-none retro-shadow ">
                        Release Date
                      </div>
                      <TbCalendar className="text-2xl" />
                    </div>
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

          <section className="flex-1 flex flex-col items-center gap-4">
            <details className="dropdown dropdown-start select-none w-full">
              {/* the trigger */}
              <summary
                onClick={() => setIsDetailsOpen((prev) => !prev)}
                className="text-lg px-8 py-3 lg:py-4 border-3 border-gray-500 retro-shadow font-medium flex items-center gap-4 transition-all duration-150 ease-out focus-visible:outline-0 focus-visible:scale-103"
              >
                {isDetailsOpen ? (
                  <TbTriangleFilled className="text-xl transition-all duration-150 rotate-180" />
                ) : (
                  <TbTriangleFilled className="text-xl transition-all duration-150 rotate-90" />
                )}
                <span className="flex items-center gap-2">
                  Minimum Requirements{" "}
                  <IoMdInformationCircle className="text-lg" />
                </span>
              </summary>

              {/* the details container */}
              <div className="flex-1 flex flex-col items-start gap-8 retro-shadow border-4 border-gray-500 px-8 py-8 pb-12">
                {gameData.minimum_system_requirements && (
                  <h3 className="text-4xl">Minimum Requirements: </h3>
                )}

                {gameData.minimum_system_requirements ? (
                  <div
                    className="text-xl text-gray-300 font-medium w-full grid grid-cols-2 gap-2 
                *:border-2 *:border-gray-500 *:px-4 *:py-6 *:rounded-lg
                *:transition-all *:duration-300
                *:hover:bg-violet-700 *:hover:border-violet-700"
                  >
                    <p>
                      <span className="">OS: </span>
                      <span className="font-medium text-gray-100">{os}</span>
                    </p>
                    <p>
                      <span className="">Processor: </span>
                      <span className="font-medium text-gray-100">
                        {processor}
                      </span>
                    </p>
                    <p>
                      <span className="">Memory: </span>
                      <span className="font-medium text-gray-100">
                        {memory}
                      </span>
                    </p>
                    <p>
                      <span className="">Graphics: </span>
                      <span className="font-medium text-gray-100">
                        {graphics}
                      </span>
                    </p>
                    <p>
                      <span className="">Storage: </span>
                      <span className="font-medium text-gray-100">
                        {storage}
                      </span>
                    </p>
                  </div>
                ) : (
                  <div className="text-gray-200 font-medium w-full pt-12 flex flex-col gap-2">
                    <h4 className="text-4xl font-medium">
                      🥲 Oopsie... We don't have enough data on this.
                    </h4>
                    <p className="text-2xl ms-auto">~~ Just Google it bro!!</p>
                  </div>
                )}

                {gameData.minimum_system_requirements && (
                  <a
                    target="_blank"
                    href={freetogame_profile_url}
                    className="ms-auto text-sm px-8 py-2 lg:py-3 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
                  >
                    Read More
                  </a>
                )}
              </div>
            </details>
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
      </div>
    </>
  );
};

export default GameDetails;
