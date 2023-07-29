"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

type Props = {
  height?: string;
};

export const Carousel = ({ height }: Props) => {
  return (
    <section className="relative">
      <Swiper
        navigation
        loop
        autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
        modules={[Navigation, Autoplay]}
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
      <SocialIcons />
    </section>
  );
};

const SocialIcons = () => {
  return (
    <div className="z-20 flex items-center gap-2 absolute bottom-24 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-10 lg:bottom-4">
      <Facebook size={18} />
      <Instagram size={18} />
      <Twitter size={18} />
      <Youtube size={18} />
    </div>
  );
};
