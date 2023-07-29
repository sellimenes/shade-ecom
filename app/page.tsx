import * as React from "react";

import { Carousel } from "@/components/Carousel";
import { Services } from "@/components/Services";
import TripleBanners from "@/components/TripleBanners";
import CollectionProductsCarousel from "@/components/CollectionProductsCarousel";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Carousel height="550px" />
      <Services />
      <TripleBanners />
      <CollectionProductsCarousel />
      <div>test</div>
    </main>
  );
}
