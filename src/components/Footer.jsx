import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Divider from "./Divider";

const Footer = () => {
  return (
    <footer className="font-outfit text-sm lg:text-base font-semibold lg:font-normal text-gray-400 pb-8 px-4 flex flex-col items-center justify-center gap-12">
      <section className="rounded-2xl px-4 lg:px-24 py-8 lg:pb-12 retro-shadow border-4 border-gray-500 flex flex-col gap-8">
        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-2xl lg:text-4xl lg:font-medium text-gray-100">
            Join the Battle for Daily Gaming Updates
          </h2>
          <p className="font-normal lg:text-lg">
            Get the latest news, tournaments & exclusive drops straight to your
            inbox.
          </p>
        </div>
        <form className="w-full lg:w-11/12 mx-auto border-2 border-violet-500 rounded-lg flex items-start justify-start">
          <input
            className="flex-1 ps-4 py-2 lg:py-3 focus-visible:outline-0"
            placeholder="Your Email"
            type="email"
            name="email"
          />
          <input
            type="submit"
            value="join"
            className="text-white bg-violet-500 border border-violet-500 px-8 lg:px-12 py-2 lg:py-3 rounded-e-sm"
          />
        </form>
      </section>

      <Divider className="bg-linear-to-l from-gray-400 to-gray-600" />

      <div className="flex flex-col gap-2.5">
        <p>
          Find an issue with this page?{" "}
          <a
            href="https://github.com/mdsakifhossain"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 lg:font-semibold"
          >
            Fix it on GitHub
          </a>
        </p>

        <p className="text-center">
          Need help? Email{" "}
          <a
            href="mailto:sakif015sakif@gmail.com"
            target="_blank"
            className="text-white lg:font-semibold"
          >
            <span>sakif015sakif@gmail.com</span>
          </a>
        </p>

        <div className="text-xl lg:text-2xl flex items-center justify-center gap-5 *:transition-all *:duration-150 *:hover:scale-125 *:hover:text-white">
          <a href="https://www.youtube.com/@playingwithSAKIF" target="_blank">
            <FaYoutube />
          </a>
          <a href="https://x.com/HoossainSakif" target="_blank">
            <FaXTwitter />
          </a>
          <a href="https://github.com/mdsakifhossain" target="_blank">
            <FaGithub />
          </a>
        </div>

        <div className="flex justify-center gap-3 *:transition-all *:duration-200 *:hover:text-white">
          <a to="#top">Terms and Conditions</a>
          <a to="#top">privacy policy</a>
        </div>

        <p className="text-center text-xs">
          Copyright © {new Date().getFullYear()} ToyTopia LLC
        </p>
      </div>
    </footer>
  );
};

export default Footer;
