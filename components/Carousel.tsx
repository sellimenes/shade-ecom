"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

type Props = {
  height?: string;
};

export const Carousel = ({ height }: Props) => {
  return (
    <>
      <Swiper
        navigation
        loop
        modules={[Navigation]}
        className="w-full bg-gray-300"
        style={{ height: height }}
      >
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 3
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 4
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 5
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 6
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 7
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 8
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full flex items-center justify-center">
            Slide 9
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
