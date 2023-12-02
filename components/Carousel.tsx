"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

import DemoBanner1 from "@/public/banners/demo-banner-1.jpeg";
import DemoBanner2 from "@/public/banners/demo-banner-2.jpeg";

type Props = {
  height?: string;
};

const Carousel = ({ height }: Props) => {
  return (
    <section className="relative w-full">
      <Swiper
        navigation
        loop
        autoplay={{
          delay: 500000000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full aspect-[21/9] border-b border-primary"
        // style={{ height: height }}
      >
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={DemoBanner1}
              alt="banner"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={DemoBanner2}
              alt="banner"
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <SocialIcons />
    </section>
  );
};

export default Carousel;

const SocialIcons = () => {
  return (
    <div className="z-20 flex items-center gap-2 absolute bottom-24 left-1/2 -translate-x-1/2 lg:translate-x-4 lg:left-auto lg:right-10 lg:bottom-4">
      <div className="p-2 rounded-full bg-orange-500">
        <Facebook size={14} color="white" />
      </div>
      <div className="p-2 rounded-full bg-orange-500">
        <Instagram size={14} color="white" />
      </div>
      <div className="p-2 rounded-full bg-orange-500">
        <Twitter size={14} color="white" />
      </div>
      <div className="p-2 rounded-full bg-orange-500">
        <Youtube size={14} color="white" />
      </div>
    </div>
  );
};
