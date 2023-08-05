import { Heart, Search } from "lucide-react";
import React from "react";

type Props = {};

const RelatedProducts = (props: Props) => {
  const data = [1, 2, 3, 4];
  return (
    <section className="mt-16">
      <h3 className="uppercase text-destructive font-light text-xs">
        Jacket & Coats
      </h3>
      <p className="text-2xl text-primary font-semibold">Related Products</p>
      <div className="grid grid-cols-4 gap-4 mt-3">
        {data.map((item) => (
          <SingleProduct />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

const SingleProduct = () => {
  return (
    <div className="cursor-pointer hover:scale-110 transition-all">
      <div className="relative w-full aspect-square bg-gray-200 rounded-lg">
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          <p className="bg-orange-500 text-white py-1 px-3 text-xs">45%</p>
          <p className="bg-primary text-secondary py-1 px-3 text-xs">HOT</p>
        </div>
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Search className="w-8 h-8 p-2 rounded-full bg-white text-gray-500" />
          <Heart className="w-8 h-8 p-2 rounded-full bg-white text-gray-500" />
        </div>
      </div>
      <h3 className="text-lg font-normal text-primary">
        Textured Vegan Leather
      </h3>
      <p className="text-primary">$99.99</p>
    </div>
  );
};
