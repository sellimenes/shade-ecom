"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
import Image from "next/image";

import BurgerKing from "@/public/partners/burger-king.png";
import CocaCola from "@/public/partners/coca-cola.png";
import Google from "@/public/partners/google.png";
import Macdonalds from "@/public/partners/mac-donalds.png";
import Microsoft from "@/public/partners/microsoft.png";
import Shell from "@/public/partners/shell.png";

type Props = {};

const Partners = (props: Props) => {
  const partneImages = [
    BurgerKing,
    CocaCola,
    Google,
    Macdonalds,
    Microsoft,
    Shell,
  ];

  return (
    <section className="mx-10 my-10">
      <Swiper loop slidesPerView={6} freeMode={true} modules={[FreeMode]}>
        {partneImages.map((image) => {
          return (
            <SwiperSlide key={Math.random()}>
              <div className="h-14">
                <Image src={image} fill alt="" objectFit="contain" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Partners;
