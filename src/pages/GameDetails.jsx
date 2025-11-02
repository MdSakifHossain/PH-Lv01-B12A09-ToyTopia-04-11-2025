import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";

import { HiOutlineCpuChip } from "react-icons/hi2";
import { TbCalendar, TbCode, TbTriangleFilled } from "react-icons/tb";
import { IoMdInformationCircle } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { MdOutlineGamepad } from "react-icons/md";

import ChillPill from "../components/ChillPill";

const GameDetails = () => {
  const { gameData } = useLoaderData();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const {
    id,
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
      <div className="flex-1 font-outfit lg:pt-4 pb-8 flex flex-col items-start justify-start gap-8">
        <Link
          className="hidden text-sm lg:text-lg font-medium border border-violet-600 bg-violet-600 rounded-full px-4 py-2 md:flex items-center justify-center gap-2 transition-all duration-150 hover:scale-110 active:scale-98"
          to={`/games`}
        >
          <FaArrowLeft />
          All Games
        </Link>

        <div className="flex-1 w-full border-4 border-gray-500 retro-shadow rounded-2xl font-outfit px-6 lg:px-8 py-6 lg:py-8 md:pt-8 min-h-svh flex flex-col gap-12 lg:gap-16">
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
            <img
              className="w-full mx-auto rounded-2xl"
              src={thumbnail}
              alt={title}
            />
            <div className="lg:col-span-2 flex flex-col items-start gap-4">
              <div className="flex flex-col gap-0.5 items-start">
                <h2 className="text-3xl lg:text-4xl font-semibold">{title}</h2>
                <p className="text-sm font-medium text-gray-300">{publisher}</p>
              </div>

              <p className="text-base lg:text-lg text-gray-200">
                {short_description}
              </p>

              <div className="flex items-center gap-3">
                <ChillPill>{genre}</ChillPill>
                <ChillPill>
                  <MdOutlineGamepad />
                  {id}
                </ChillPill>
              </div>

              <div className="w-full lg:pe-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8">
                <div className="text-gray-300 text-sm lg:text-lg flex flex-col gap-1">
                  <div className="flex items-center justify-start gap-3.5">
                    <div className="tooltip tooltip-left">
                      <div className="tooltip-content text-xl font-medium px-8 py-1.5 bg-[rgb(32,39,55)] border-2 border-gray-500 rounded-none retro-shadow ">
                        Platform / OS
                      </div>
                      <HiOutlineCpuChip className="text-lg lg:text-2xl" />
                    </div>
                    <span>{platform}</span>
                  </div>

                  <div className="flex items-center justify-start gap-3.5">
                    <div className="tooltip tooltip-left">
                      <div className="tooltip-content text-xl font-medium px-8 py-1.5 bg-[rgb(32,39,55)] border-2 border-gray-500 rounded-none retro-shadow ">
                        Developer
                      </div>
                      <TbCode className="text-lg lg:text-2xl" />
                    </div>
                    <span>{developer}</span>
                  </div>
                  <div className="flex items-center justify-start gap-3.5">
                    <div className="tooltip tooltip-left">
                      <div className="tooltip-content text-xl font-medium px-8 py-1.5 bg-[rgb(32,39,55)] border-2 border-gray-500 rounded-none retro-shadow ">
                        Release Date
                      </div>
                      <TbCalendar className="text-lg lg:text-2xl" />
                    </div>
                    <span>{prettyDate(release_date)}</span>
                  </div>
                </div>

                <a
                  target="_blank"
                  href={freetogame_profile_url}
                  className="text-lg lg:text-xl text-center px-12 py-3 lg:py-4 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
                >
                  Install
                </a>
              </div>
            </div>
          </section>

          {/* Screenshot Section */}
          <section className="flex-1 flex flex-col gap-4">
            <h3 className="text-2xl lg:text-3xl">Screenshots: </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {gameData.screenshots.map((ss, index) => (
                <img
                  key={ss.id}
                  className="w-full rounded lg:rounded-2xl"
                  src={ss.image}
                  alt={gameData.title + `${index + 1}`}
                />
              ))}
            </div>
          </section>

          {/* Minimum Requirements Section */}
          <section className="flex-1 flex flex-col items-center gap-4">
            <details className="dropdown dropdown-start select-none w-full">
              {/* the trigger */}
              <summary
                onClick={() => setIsDetailsOpen((prev) => !prev)}
                className="border-3 border-gray-500 retro-shadow font-medium px-4 lg:px-8 py-3.5 lg:py-4 flex items-center gap-2.5 lg:gap-4 transition-all duration-150 ease-out focus-visible:outline-0 focus-visible:scale-103"
              >
                {isDetailsOpen ? (
                  <TbTriangleFilled className="text-lg lg:text-xl transition-all duration-150 rotate-180" />
                ) : (
                  <TbTriangleFilled className="text-lg lg:text-xl transition-all duration-150 rotate-90" />
                )}
                <span className="text-sm lg:text-lg flex items-center gap-1.5 lg:gap-2">
                  Minimum Requirements{" "}
                  <IoMdInformationCircle className="text-sm lg:text-lg" />
                </span>
              </summary>

              {/* the details container */}
              <div className="flex-1 flex flex-col items-start gap-5 lg:gap-8 retro-shadow border-4 border-gray-500 px-4 lg:px-8 py-4 lg:py-8 pb-6 lg:pb-12">
                {gameData.minimum_system_requirements && (
                  <h3 className="text-lg lg:text-4xl">Minimum Requirements:</h3>
                )}

                {gameData.minimum_system_requirements ? (
                  <div
                    className="text-xs lg:text-xl text-gray-300 font-medium w-full mb-2
                    grid grid-cols-1 lg:grid-cols-2 gap-2 

                    *:border lg:*:border-2 *:border-gray-500 *:px-3 lg:*:px-4 *:py-2 lg:*:py-6 *:rounded-lg 
                    *:flex *:flex-col *:items-start *:justify-center *:gap-1 lg:*:gap-2 
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
                  <div className="text-gray-200 w-full lg:pt-12 flex flex-col gap-1.5">
                    <h4 className="text-lg lg:text-4xl font-medium">
                      Oopsie... We don't have enough data on this. 😶‍🌫️
                    </h4>
                    <p className="text-sm lg:text-2xl ms-auto">
                      ~~ Just Google it bro!!
                    </p>
                  </div>
                )}
              </div>
            </details>
          </section>

          {/* Description Section */}
          <section className="flex-1 flex flex-col items-start gap-3.5 lg:gap-4">
            <h3 className="text-2xl lg:text-3xl">Description: </h3>
            <p className="text-sm lg:text-lg text-gray-300 line-clamp-8">
              {description}
            </p>
            <a
              target="_blank"
              href={freetogame_profile_url}
              className="group ms-auto mt-1 text-sm px-8 py-2 lg:py-3 border-3 border-gray-500 retro-shadow font-medium flex items-center justify-center gap-3 transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
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
