import React from "react";
import { SITE_DATA } from "../constants";

const Hero = () => {
  return (
    <section className="p-10 pb-0 md:p-20 md:pb-0  flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-10">
        <div className="text-center flex flex-col items-center gap-4">
          <h1 className="font-bold text-6xl leading-16 md:text-7xl md:leading-[5.25rem] text-heading-color">
            We Build <br />
            <span className="font-black bg-gradient-to-br from-dark-purple to-light-purple text-transparent bg-clip-text">
              Productive
            </span>{" "}
            Apps
          </h1>
          <p className="text-subheading-color text-lg md:text-xl leading-7 md:leading-8">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. <br />
            Our goal is to turn your ideas into digital experiences that truly
            make an impact.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-col sm:flex-row">
          <a
            href={SITE_DATA.play_store_link}
            target="_blank"
            className="font-semibold text-heading-color text-xl px-6 py-3 rounded border border-border-color flex items-center justify-center gap-2.5"
          >
            <img
              className="size-8"
              src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000"
              alt="Play-Store"
            />
            <span>Google Play</span>
          </a>
          <a
            href={SITE_DATA.apple_store_link}
            target="_blank"
            className="font-semibold text-heading-color text-xl px-6 py-3 rounded border border-border-color flex items-center justify-center gap-2.5"
          >
            <img
              className="size-8"
              src="https://img.icons8.com/?size=100&id=fKXXelWgP1B6&format=png&color=000000"
              alt="Play-Store"
            />
            <span>Google Play</span>
          </a>
        </div>
      </div>

      <img src="/images/hero.png" alt="Hero-Image" />
    </section>
  );
};

export default Hero;
