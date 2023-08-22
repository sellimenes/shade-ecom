import React from "react";

import ProductDetailCarousel from "@/components/ProductDetailCarousel";
import ProductDetailInfo from "@/components/ProductDetailInfo";
import ProductDetailTabs from "@/components/ProductDetailTabs";
import RelatedProducts from "@/components/RelatedProducts";

type Props = {};

const ProductDetails = (props: Props) => {
  return (
    <div className="container my-4">
      <section className="flex items-center gap-10 mb-10">
        <ProductDetailCarousel />
        <ProductDetailInfo />
      </section>
      <ProductDetailTabs />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;