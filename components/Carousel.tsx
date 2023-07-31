"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper/modules";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import BannerCopyWrite from "@/public/banners/copywriting.png";
import BannerConversions from "@/public/banners/conversions.png";
import BannerManageReviews from "@/public/banners/managing-reviews.png";
import BannerMobileSearch from "@/public/banners/mobile-search.png";
import BannerPurchasingConversions from "@/public/banners/purchasing-conversions.png";
import BannerTimeSpent from "@/public/banners/time-spent.png";
import Image from "next/image";

type Props = {
  height?: string;
};

const Carousel = ({ height }: Props) => {
  return (
    <section className="relative">
      <Swiper
        navigation
        loop
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full bg-gray-300"
        style={{ height: height }}
      >
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={BannerCopyWrite}
              alt="banner"
              fill
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={BannerConversions}
              alt="banner"
              fill
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={BannerManageReviews}
              alt="banner"
              fill
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={BannerMobileSearch}
              alt="banner"
              fill
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={BannerPurchasingConversions}
              alt="banner"
              fill
              objectFit="contain"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full">
            <Image
              src={BannerTimeSpent}
              alt="banner"
              fill
              objectFit="contain"
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
    <div className="z-20 flex items-center gap-2 absolute bottom-24 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto lg:right-10 lg:bottom-4">
      <Facebook size={18} />
      <Instagram size={18} />
      <Twitter size={18} />
      <Youtube size={18} />
    </div>
  );
};
