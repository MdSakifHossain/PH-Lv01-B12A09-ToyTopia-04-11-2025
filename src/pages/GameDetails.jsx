import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toast } from "sonner";

import { HiOutlineCpuChip } from "react-icons/hi2";
import { TbCalendar, TbCode, TbTriangleFilled } from "react-icons/tb";
import { IoMdInformationCircle } from "react-icons/io";
import { FaArrowLeft, FaCircleCheck } from "react-icons/fa6";
import { MdOutlineGamepad, MdOutlineCategory } from "react-icons/md";

import ChillPill from "../components/ChillPill";

const GameDetails = () => {
  const { gameData } = useLoaderData();
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() && !name.trim()) return;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) return;

    toast.custom(() => (
      <div className="bg-[rgb(32,39,55)] text-gray-100 retro-shadow border-4 border-zinc-600 px-6 lg:px-8 py-6 font-outfit rounded-lg flex items-center justify-start gap-4 select-none">
        <FaCircleCheck className="text-xl lg:text-2xl text-gray-300" />
        <p className="text-lg font-medium lg:text-xl">Check your email.</p>
      </div>
    ));

    setEmail("");
    setIsSubmitted(true);
  };

  if (!gameData || gameData.error)
    return (
      <>
        <div className="flex-1 font-outfit text-gray-200 py-12 grid grid-cols-1 lg:grid-cols-2 gap-6 *:flex *:flex-col *:items-center *:justify-center">
          <section>
            <img
              className="rounded"
              src="https://i.giphy.com/LkO4Dov673u80qEjz3.webp"
              alt="Fully Prepared"
            />
          </section>
          <section className="flex flex-col items-center gap-6 lg:gap-12">
            <div className="flex flex-col items-center lg:items-start gap-2 lg:gap-3">
              <h2 className="text-3xl lg:text-4xl font-medium">Pathetic!!</h2>
              <p className="border-l-4 border-violet-500 ps-3 italic lg:text-lg">
                You really thought i wouldn't Look for this kinda Error!!
              </p>
            </div>

            <Link
              to={`/`}
              className="px-8 py-3.5 lg:py-4 text-base lg:text-lg font-semibold border-3 border-gray-500 retro-shadow rounded-md transition-all duration-100 hover:scale-105 flex items-center justify-center gap-4"
            >
              Goto Homepage
            </Link>
          </section>
        </div>
      </>
    );

  const noDataText = (
    <span className="text-gray-300">"No data provided 😶‍🌫️"</span>
  );

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
      // month: "short", "long"
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

        <div className="flex-1 w-full border-4 border-gray-500 retro-shadow rounded-2xl font-outfit px-6 lg:px-8 py-6 lg:py-8 md:pt-8 lg:pb-12 min-h-svh flex flex-col gap-12 lg:gap-16">
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
                <ChillPill>
                  <MdOutlineCategory />
                  {genre}
                </ChillPill>
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
                      <span className="font-medium text-gray-100">
                        {os === null ? noDataText : os}
                      </span>
                    </p>
                    <p>
                      <span className="">Processor: </span>
                      <span className="font-medium text-gray-100">
                        {processor === null ? noDataText : processor}
                      </span>
                    </p>
                    <p>
                      <span className="">Memory: </span>
                      <span className="font-medium text-gray-100">
                        {memory === null ? noDataText : memory}
                      </span>
                    </p>
                    <p>
                      <span className="">Graphics: </span>
                      <span className="font-medium text-gray-100">
                        {graphics === null ? noDataText : graphics}
                      </span>
                    </p>
                    <p>
                      <span className="">Storage: </span>
                      <span className="font-medium text-gray-100">
                        {storage === null ? noDataText : storage}
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

        <section className="w-full mx-auto mt-16 flex flex-col gap-6">
          {isSubmitted ? (
            <div className="relative w-full sm:w-10/12 mx-auto rounded-2xl px-4 lg:px-24 py-8 lg:pb-12 retro-shadow border-4 border-gray-500 flex flex-col gap-8">
              {!isSubmitted && (
                <>
                  <span className="hidden lg:inline size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%] bg-lime-600 animate-ping rounded-full"></span>
                  <img
                    className="size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%]"
                    src="/vite.svg"
                    alt="logo"
                  />
                </>
              )}
              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-[1.35rem] lg:text-3xl font-medium text-gray-100 flex items-center gap-4">
                  Subscribed Successfully!
                </h2>
                <p className="text-center text-sm lg:text-lg text-gray-400 font-normal">
                  Now, We will bloat your Inbox for no reason and will do it for
                  eternity!
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="relative w-full sm:w-10/12 mx-auto rounded-2xl px-4 lg:px-24 py-8 lg:pb-12 retro-shadow border-4 border-gray-500 flex flex-col gap-8">
                <span className="hidden lg:inline size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%] bg-lime-600 animate-ping rounded-full"></span>
                <img
                  className="size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%]"
                  src="/vite.svg"
                  alt="logo"
                />
                <div className="flex flex-col gap-2 items-center">
                  <h2 className="text-2xl lg:text-4xl font-medium text-gray-100 w-full text-left lg:text-center">
                    Wanna try this Game?
                  </h2>
                  <p className="font-normal text-sm lg:text-lg">
                    Fill out this form to get an Exclusive Link to try this
                    game.
                  </p>
                </div>
              </div>

              <form
                onSubmit={(e) => handleFormSubmit(e)}
                className="w-full sm:w-10/12 mx-auto flex items-center gap-[1.1rem] flex-col md:flex-row *:py-3.5 md:*:py-5 text-lg sm:*:text-xl caret-lime-400"
              >
                <input
                  className="
              retro-shadow px-6 w-full border-3 border-gray-500 transition-all duration-200
              active:scale-95 
              focus-visible:outline-0"
                  placeholder="Your Name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="
              retro-shadow px-6 w-full border-3 border-gray-500 transition-all duration-200
              active:scale-95 
              focus-visible:outline-0"
                  placeholder="Your Email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="px-12 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
                  type="submit"
                  value="Try Now"
                />
              </form>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default GameDetails;
