import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

type Props = {
  isSale?: boolean;
  data: any;
};

const SingleProductList = ({ isSale, data }: Props) => {
  return (
    <Link href={`category/${data.id}`}>
      <div className="flex items-center gap-10">
        <div className="bg-muted aspect-square h-full min-h-[300px] shadow-lg relative">
          <Image src={data.coverImage} fill alt="deneme" />
          {isSale && (
            <div className="absolute left-2 top-2 px-3 py-1 bg-green-600 text-xs rounded-full text-white">
              Sale
            </div>
          )}
        </div>
        <div className="flex flex-col gap-3 flex-1">
          <h2 className="font-bold text-3xl line2">{data.name}</h2>
          {isSale ? (
            <div className="flex gap-2">
              <p className="text-gray-300 line-through text-lg">$89.99</p>
              <p className="text-lg">${data.price}</p>
            </div>
          ) : (
            <p>${data.price}</p>
          )}
          <p className="text-lg text-gray-400 max-w-[95%] line-clamp-3">
            {data.description}
          </p>
          <Button className="max-w-max">Add to Cart</Button>
        </div>
      </div>
    </Link>
  );
};

export default SingleProductList;
