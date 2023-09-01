import React from "react";
import Link from "next/link";

type Props = {
  isSale?: boolean;
  data: any;
};

const SingleProductGrid = ({ isSale, data }: Props) => {
  return (
    <Link href={`category/${data.id}`}>
      {/* TODO: Div will be turn to Image */}
      <div className="bg-muted w-full aspect-square mb-4 relative shadow-lg rounded-lg">
        {isSale && (
          <div className="absolute left-2 top-2 px-3 py-1 bg-green-600 text-xs rounded-full text-white">
            Sale
          </div>
        )}
      </div>
      <h3 className="font-light text-xl">{data.name}</h3>
      {isSale ? (
        <div className="flex gap-2">
          <p className="text-gray-300 line-through">$89.99</p>
          <p>${data.price}</p>
        </div>
      ) : (
        <p>${data.price}</p>
      )}
    </Link>
  );
};

export default SingleProductGrid;
