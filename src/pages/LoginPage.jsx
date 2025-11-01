import React from "react";
import { FaGoogle } from "react-icons/fa6";

import Divider from "./../components/Divider";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="flex-1 font-outfit px-4 sm:px-8 py-12 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 my-auto">
      <section className="xl:order-2 flex items-center justify-center flex-col gap-4">
        <div className="tooltip xl:tooltip-top">
          <div className="hidden xl:block tooltip-content p-0">
            <img
              className="rounded"
              src="https://i.giphy.com/B1CrvUCoMxhy8.webp"
              alt="welcome-back"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-4">
            <h1 className="text-[2.625rem] lg:text-6xl">Welcome Back!</h1>
            <p className="hidden sm:block text-base lg:text-xl text-gray-200 text-center">
              Use any method you desire to Login. <br />
              We just want your data.. that's all.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full sm:px-12 sm:py-12 sm:pb-16 sm:border-4 sm:border-gray-500 sm:rounded-4xl flex flex-col gap-8 lg:gap-14">
        <h1 className="hidden sm:block text-4xl lg:text-5xl text-center font-medium text-gray-200">
          Login Here
        </h1>

        <form
          className="w-full 
              text-lg sm:*:text-xl 
              flex flex-col gap-5 items-start 
              caret-lime-400 
              "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-full
              retro-shadow px-5 py-3.5 md:py-4 border-3 border-gray-500 transition-all duration-200
              focus-visible:outline-0"
            placeholder="Email"
            type="email"
            name="email"
          />

          <input
            className="w-full
              retro-shadow px-5 py-3.5 md:py-4 border-3 border-gray-500 transition-all duration-200
              focus-visible:outline-0"
            placeholder="Password"
            type="password"
            name="password"
          />

          <input
            className="w-full sm:w-1/2 mx-auto sm:mx-0 sm:ms-auto px-10 py-2 md:py-3 border-3 border-gray-500 retro-shadow font-medium transition-all duration-150 ease-out active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
            type="submit"
            value="Login"
          />
        </form>

        <Divider
          className="border-0 border-b-3 border-dashed border-gray-500 mx-auto my-2"
          w="w-4/12"
          h="h-0"
        />

        <div className="w-full flex flex-col gap-8 items-center">
          <button className="w-full sm:w-10/12 text-lg lg:text-xl font-medium border-4 border-gray-500 retro-shadow px-10 py-4 flex items-center justify-center gap-4 transition-all duration-150 active:scale-95 focus-visible:outline-0 focus-visible:scale-103">
            <FaGoogle />
            Login with Google
          </button>

          <p className="text-base lg:text-lg text-gray-300">
            Don't have an account?{" "}
            <Link className="text-sky-500 lg:font-semibold" to={`/register`}>
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
