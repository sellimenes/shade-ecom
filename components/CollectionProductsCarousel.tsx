"use client";

import Link from "next/link";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

type Props = {};

const CollectionProductsCarousel = (props: Props) => {
  return (
    <section className="px-10 w-full pt-6">
      <h3 className="uppercase text-primary text-sm text-center my-2">
        Browse Our Items
      </h3>
      <h4 className="text-4xl font-semibold text-center">
        Ideal for Your Home <br />
        2023 Collection
      </h4>
      <div className="flex flex-col gap-2">
        <Link href="/products" className="underline text-sm block ml-auto">
          <span>View All</span>
        </Link>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode]}
          className="w-full"
        >
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <SingleProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionProductsCarousel;

const SingleProductCard = () => {
  return (
    <div className="w-80">
      <div className=" aspect-square bg-gray-200 relative">
        <div className="uppercase absolute top-2 left-3 px-3 py-1 rounded-full bg-card text-xs">
          Bedroom
        </div>
        {/* <img src="" alt=""/> */}
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-light opacity-70">
          Small Table Decorations
        </h3>
        <p className="text-sm font-medium">3250 TL</p>
      </div>
    </div>
  );
};
