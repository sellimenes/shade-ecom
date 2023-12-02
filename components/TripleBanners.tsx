import Image from "next/image";
import React from "react";

type Props = {};

const TripleBanners = (props: Props) => {
  return (
    <section className="my-10 px-10 w-full flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="aspect-video relative w-full">
        <Image src={"/banners/test-banner-219.jpg"} fill alt="banner" />
      </div>
      <div className="aspect-video relative w-full">
        <Image src={"/banners/test-banner-219-2.jpg"} fill alt="banner" />
      </div>
      <div className="aspect-video relative w-full">
        <Image src={"/banners/test-banner-219.jpg"} fill alt="banner" />
      </div>
    </section>
  );
};

export default TripleBanners;
