import React from "react";

import { Star } from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { Button } from "./ui/button";

type Props = {
  data: any;
};

const ProductDetailInfo = ({ data }: Props) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <p className="text-primary/60">Adidas</p>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Star fill="#ffc400" strokeWidth={1} />
            <Star fill="#ffc400" strokeWidth={1} />
            <Star fill="#ffc400" strokeWidth={1} />
            <Star fill="#ffc400" strokeWidth={1} />
            <Star fill="white" strokeWidth={1} />
          </div>
          <p className="text-primary/60">4 review(s)</p>
        </div>
      </div>
      <h2 className="text-4xl">{data.name}</h2>
      <p className="mt-2 text-2xl font-light text-primary/70">
        ${data.price} <span>(In stock)</span>
      </p>
      <Separator className="my-8" />
      <div className=" max-w-[90%]">
        <p className="text-primary/60 text-lg">{data.description}</p>
      </div>
      <Separator className="my-8" />
      <Button className="max-w-max px-16 mb-4">Add to Cart</Button>
      <div className="max-w-[75%] flex items-center gap-6 flex-wrap">
        <p className="text-primary/70">
          <span className="font-bold text-primary">SKU:</span> U2023
        </p>
        <p className="text-primary/70">
          <span className="font-bold text-primary">Tags:</span> How, T-Shirt,
          Sale
        </p>
        <p className="text-primary/70">
          <span className="font-bold text-primary">Categories:</span> Dress,
          T-Shirt, Handbag
        </p>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
