import React from "react";
import { Button } from "./ui/button";

type Props = {
  isSale?: boolean;
};

const SingleProductList = ({ isSale }: Props) => {
  return (
    <div className="flex items-center gap-10">
      {/* TODO: Div image olacak */}
      <div className="bg-muted aspect-square h-full min-h-[300px] shadow-lg relative">
        {isSale && (
          <div className="absolute left-2 top-2 px-3 py-1 bg-green-600 text-xs rounded-full text-white">
            Sale
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl">
          White Short Checkered T-Shirt & Skirt
        </h2>
        {isSale ? (
          <div className="flex gap-2">
            <p className="text-gray-300 line-through text-lg">$89.99</p>
            <p className="text-lg">$69.99</p>
          </div>
        ) : (
          <p>$89.99</p>
        )}
        <p className="text-lg text-gray-400 max-w-[95%]">
          Because we have many types of elements we created Live Editor for you
          so you can see live changes. I ordered on Friday evening and on Monday
          at 12:30 the package was with me.{" "}
        </p>
        <Button className="max-w-max">Add to Cart</Button>
      </div>
    </div>
  );
};

export default SingleProductList;
