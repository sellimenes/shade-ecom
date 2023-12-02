import { Heart, Search } from "lucide-react";
import React from "react";
import Image from "next/image";

type Props = {};

const RelatedProducts = (props: Props) => {
  const data = [
    {
      id: 1,
      name: "Textured Vegan Leather",
      price: 99.99,
      image: "/products/product-demo-coat-1.jpg",
    },
    {
      id: 2,
      name: "Textured Vegan Leather",
      price: 99.99,
      image: "/products/product-demo-jeans-2.jpg",
    },
    {
      id: 3,
      name: "Textured Vegan Leather",
      price: 99.99,
      image: "/products/product-demo-jacket-3.jpg",
    },
    {
      id: 4,
      name: "Textured Vegan Leather",
      price: 99.99,
      image: "/products/product-demo-hat-1.jpg",
    },
  ];
  return (
    <section className="mt-16">
      <h3 className="uppercase text-destructive font-light text-xs">
        Jacket & Coats
      </h3>
      <p className="text-2xl text-primary font-semibold">Related Products</p>
      <div className="grid grid-cols-4 gap-4 mt-3">
        {data.map((item) => (
          <SingleProduct key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default RelatedProducts;

const SingleProduct = ({ data }: any) => {
  console.log(data);
  return (
    <div className="cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="relative w-full aspect-square bg-gray-200 rounded-lg">
        <Image src={data.image} fill alt="deneme" />
        <div className="absolute left-2 top-2 flex flex-col gap-1">
          <p className="bg-orange-500 text-white py-1 px-3 text-xs">45%</p>
          <p className="bg-primary text-secondary py-1 px-3 text-xs">HOT</p>
        </div>
        <div className="absolute right-2 top-2 flex flex-col gap-2">
          <Search className="w-8 h-8 p-2 rounded-full bg-white text-gray-500" />
          <Heart className="w-8 h-8 p-2 rounded-full bg-white text-gray-500" />
        </div>
      </div>
      <h3 className="text-lg font-normal text-primary">{data.name}</h3>
      <p className="text-primary">${data.price}</p>
    </div>
  );
};
