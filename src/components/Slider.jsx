import React from "react";
import { Link } from "react-router";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = ({ data }) => {
  // Fisher–Yates (Knuth) shuffle algorithm
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <Swiper
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
        dynamicBullets: false,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className="w-full"
    >
      {shuffleArray(data)
        .slice(0, 11)
        .map((data) => (
          <SwiperSlide>
            <Link
              to={`/games/${data.id}`}
              className="font-outfit lg:grid lg:grid-cols-2 select-none"
            >
              <div className="hidden px-8 lg:flex items-start justify-center flex-col gap-4">
                <h2 className="text-5xl font-bold border-l-8 border-violet-500 ps-4 ">
                  {data.title}
                </h2>
                <p className="text-lg font-medium text-gray-300">
                  {data.short_description}
                </p>
              </div>
              <img
                className="w-full rounded-3xl"
                src={data.thumbnail}
                alt={data.title}
              />
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default Slider;
