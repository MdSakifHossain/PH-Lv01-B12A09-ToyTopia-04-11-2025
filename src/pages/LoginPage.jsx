import React from "react";
import { FaGoogle } from "react-icons/fa6";

import Divider from "./../components/Divider";
import { Link } from "react-router";

const LoginPage = () => {
  return (
    <div className="flex-1 font-outfit flex flex-col gap-16">
      <section className="grid grid-cols-2 gap-12 my-auto">
        <div className="flex items-center justify-center flex-col gap-4">
          <div className="tooltip">
            <div className="tooltip-content p-0">
              <img
                className="rounded"
                src="https://i.giphy.com/B1CrvUCoMxhy8.webp"
                alt="welcome-back"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <h1 className="text-6xl">Welcome Back!</h1>
              <p className="text-xl text-gray-200">
                Use any method you desire to Login. <br />
                We just want your data.. that's all. 😇
              </p>
            </div>
          </div>
        </div>
        <div className="border-4 border-gray-500 rounded-tl-4xl retro-shadow px-16 py-28 flex flex-col gap-14">
          <h1 className="text-5xl text-center font-medium text-gray-200">
            Login Here
          </h1>
          <form
            className="
              text-lg sm:*:text-xl 
              flex flex-col gap-4 items-end 
              caret-lime-400 
              "
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              className="
              retro-shadow px-5 py-2 md:py-3 w-full border-3 border-gray-500 transition-all duration-200
              focus-visible:outline-0"
              placeholder="Your Email"
              type="email"
              name="email"
            />

            <input
              className="
              retro-shadow px-5 py-2 md:py-3 w-full border-3 border-gray-500 transition-all duration-200
              focus-visible:outline-0"
              placeholder="Your Password"
              type="password"
              name="password"
            />

            <div className="tooltip tooltip-top flex items-center justify-end">
              <div className="tooltip-content p-0">
                <img
                  className="rounded"
                  src="https://i.giphy.com/w7CP59oLYw6PK.webp"
                  alt="do-it"
                />
              </div>
              <input
                className="px-16 py-2 md:py-3 border-3 border-gray-500 retro-shadow w-full md:w-auto font-medium transition-all duration-150 ease-out active:scale-99 focus-visible:outline-0 focus-visible:scale-103"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <Divider
            className="border-0 border-b-3 border-dashed border-gray-500 mx-auto"
            w="w-4/12"
            h="h-0"
          />
          <div className="flex flex-col gap-8 items-center">
            <button className="text-xl font-medium border-4 border-gray-500 retro-shadow px-10 py-4 flex items-center justify-center gap-4 transition-all duration-150 active:scale-95">
              <FaGoogle />
              Login with Google
            </button>

            <p className="text-lg text-gray-300">
              Don't have an account?{" "}
              <Link className="text-sky-500 lg:font-semibold" to={`/register`}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
