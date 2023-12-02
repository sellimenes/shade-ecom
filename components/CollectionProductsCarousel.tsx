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
import Image from "next/image";

import DemoProductTshirt1 from "@/public/products/product-demo-tshirt.jpg";
import DemoProductShoes1 from "@/public/products/product-demo-shoes-1.jpg";
import DemoProductShoes2 from "@/public/products/product-demo-shoes-2.jpg";
import DemoProductCoat1 from "@/public/products/product-demo-coat-1.jpg";
import DemoProductCoat2 from "@/public/products/product-demo-coat-2.jpg";
import DemoProductHat1 from "@/public/products/product-demo-hat-1.jpg";
import DemoProductHat2 from "@/public/products/product-demo-hat-2.jpg";
import DemoProductJacket1 from "@/public/products/product-demo-jacket-1.jpg";
import DemoProductJeans1 from "@/public/products/product-demo-jeans-1.jpg";

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
          breakpoints={{
            710: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            1400: { slidesPerView: 6 },
          }}
          spaceBetween={30}
          className="w-full"
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductTshirt1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductShoes1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductJeans1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductJacket1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductHat1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductCoat1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductShoes2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductCoat2} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex justify-center">
              <SingleProductCard image={DemoProductHat2} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default CollectionProductsCarousel;

const SingleProductCard = ({ image }: any) => {
  return (
    <div className="w-80">
      <div className=" aspect-square bg-gray-200 relative">
        <div className="uppercase absolute top-2 left-3 px-3 py-1 rounded-full bg-card text-xs">
          Bedroom
        </div>
        <Image
          src={image}
          fill
          alt="product"
          style={{
            objectFit: "cover",
          }}
        />
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
