import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toast } from "sonner";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";

import Slider from "../components/Slider";
import { Utils } from "../utils/utils";
import GameCard from "../components/GameCard";
import CategoryCard from "../components/CategoryCard";
import CustomToast from "../components/CustomToast";

const HomePage = () => {
  const { allGames, popularGames } = useLoaderData();
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.custom(() => (
        <CustomToast>
          <FaCircleXmark className="text-xl lg:text-2xl text-gray-300" />
          <p className="text-lg font-medium lg:text-xl">
            write your email first!!
          </p>
        </CustomToast>
      ));
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailPattern.test(email)) return;

    toast.custom(() => (
      <CustomToast>
        <FaCircleCheck className="text-xl lg:text-2xl text-gray-300" />
        <p className="text-lg font-medium lg:text-xl">
          Thank You for Subscribing.
        </p>
      </CustomToast>
    ));

    setEmail("");
    setIsSubmitted(true);
  };

  return (
    <div className="flex-1 font-outfit pt-4 pb-8 flex flex-col items-start justify-start gap-16">
      <Slider data={allGames} />

      {/* Categories Section */}
      <section className="w-full flex flex-col gap-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          <span className="text-lime-400">Categories: </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {Utils.ALL_CATEGORIES.slice(0, 18).map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/categories`}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {popularGames.slice(0, 19).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <Link
            to={`/games`}
            className="px-8 py-4 text-lg font-semibold border-3 border-gray-500 retro-shadow rounded-md transition-all duration-100 hover:scale-105 flex items-center justify-center gap-4"
          >
            Explore More
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="w-11/12 sm:w-full mx-auto flex flex-col gap-6">
        {isSubmitted ? (
          <div className="relative w-full sm:w-10/12 mx-auto rounded-2xl px-4 lg:px-24 py-8 lg:pb-12 retro-shadow border-4 border-gray-500 flex flex-col gap-8">
            <span className="size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%] bg-lime-600 animate-ping rounded-full"></span>
            <img
              className="size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%]"
              src="/vite.svg"
              alt="logo"
            />
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
              <span className="size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%] bg-lime-600 animate-ping rounded-full"></span>
              <img
                className="size-7 md:size-10 absolute -top-3.5 -right-3.5 translate-[-50%,-50%]"
                src="/vite.svg"
                alt="logo"
              />
              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-2xl lg:text-4xl font-medium text-gray-100">
                  Join the Battle for Daily Gaming Updates
                </h2>
                <p className="font-normal text-sm lg:text-lg">
                  Get the latest news, tournaments & exclusive drops straight to
                  your inbox.
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
                placeholder="Your Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="px-12 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out hover:scale-103 active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
                type="submit"
                value="Subscribe *"
              />
            </form>
          </>
        )}
      </section>
    </div>
  );
};

export default HomePage;
