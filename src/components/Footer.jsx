import React from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="font-outfit text-sm lg:text-base font-semibold lg:font-normal text-gray-400 py-8 flex flex-col items-center justify-center gap-10">
      <span className="w-6/12 max-w-4/12 h-2 rounded-full bg-linear-to-l from-gray-400 to-gray-600"></span>
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

        <div className="flex justify-center gap-3">
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
