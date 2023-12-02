"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import LoadingSpinner from "./LoadingSpinner";

type Props = {};

const ProductDetailCarousel = (props: Props) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <LoadingSpinner className="w-[620px] h-[500px] flex justify-center items-center" />
    );
  }
  return (
    <div className="flex flex-col gap-2 max-w-[400px]">
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full"
      >
        <SwiperSlide className="cursor-crosshair">
          <img alt="demogorsel" src="/products/product-demo-coat-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="cursor-crosshair">
          <img alt="demogorsel" src="/products/product-demo-coat-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="cursor-crosshair">
          <img alt="demogorsel" src="/products/product-demo-coat-3.jpg" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        // onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full"
      >
        <SwiperSlide>
          <img src="/products/product-demo-hat-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/products/product-demo-hat-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/products/product-demo-hat-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/products/product-demo-jacket-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/products/product-demo-jacket-2.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductDetailCarousel;
