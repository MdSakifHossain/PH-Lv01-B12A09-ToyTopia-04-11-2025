import React from "react";

const Banner = () => {
  return (
    <section className="p-10 md:p-20 text-white flex flex-col gap-10 bg-gradient-to-br from-dark-purple to-light-purple">
      <h2 className="font-bold text-3xl md:text-5xl text-center">
        Trusted by Millions, Built for You
      </h2>
      <div className="w-full flex items-center justify-center gap-6 flex-col lg:flex-row">
        <div className="w-full md:w-auto md:px-[4.375rem] flex flex-col gap-4 items-center">
          <p className="text-base leading-6 text-white/80">Total Downloads</p>
          <h3 className="font-black text-4xl md:text-[4rem]">29.6M</h3>
          <p className="text-base leading-6 text-white/80">
            21% more than last month
          </p>
        </div>
        <div className="w-full md:w-auto md:px-[4.375rem] flex flex-col gap-4 items-center">
          <p className="text-base leading-6 text-white/80">Total Reviews</p>
          <h3 className="font-black text-4xl md:text-[4rem]">906K</h3>
          <p className="text-base leading-6 text-white/80">
            46% more than last month
          </p>
        </div>
        <div className="w-full md:w-auto md:px-[4.375rem] flex flex-col gap-4 items-center">
          <p className="text-base leading-6 text-white/80">Active Apps</p>
          <h3 className="font-black text-4xl md:text-[4rem]">132+</h3>
          <p className="text-base leading-6 text-white/80">
            31 more will Launch
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
