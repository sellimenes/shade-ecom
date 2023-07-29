import * as React from "react";

import { Carousel } from "@/components/Carousel";
import { Services } from "@/components/Services";
import TripleBanners from "@/components/TripleBanners";

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Carousel height="550px" />
      <Services />
      <TripleBanners />
    </main>
  );
}
