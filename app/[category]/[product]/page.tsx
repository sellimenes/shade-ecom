import React from "react";

import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import ProductDetailInfo from "@/components/ProductDetailInfo";
import SubscribeNewsletter from "@/components/SubscribeNewsletter";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <div className="container my-4">
      <section className="flex items-center gap-10">
        <ProductDetailCarousel />
        <ProductDetailInfo />
      </section>
    </div>
  );
};

export default ProductDetails;
