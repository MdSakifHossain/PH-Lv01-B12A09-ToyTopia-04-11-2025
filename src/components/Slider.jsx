import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = ({ data }) => {
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
      {data.slice(0, 11).map((data) => (
        <SwiperSlide>
          <div className="font-outfit lg:grid lg:grid-cols-2">
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
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
