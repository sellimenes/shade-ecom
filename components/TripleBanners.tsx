import Image from "next/image";
import React from "react";

import Banner1 from "@/public/banners/Banners-01.png";
import Banner2 from "@/public/banners/Banners-02.png";
import Banner3 from "@/public/banners/Banners-03.png";

type Props = {};

const TripleBanners = (props: Props) => {
  return (
    <section className="my-10 px-10 w-full flex items-center justify-between gap-6">
      <div className="flex-1 aspect-video relative">
        <Image src={Banner1} fill alt="banner" />
      </div>
      <div className="flex-1 aspect-video relative">
        <Image src={Banner2} fill alt="banner" />
      </div>
      <div className="flex-1 aspect-video relative">
        <Image src={Banner3} fill alt="banner" />
      </div>
    </section>
  );
};

export default TripleBanners;
