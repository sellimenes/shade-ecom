import React from "react";
import Link from "next/link";

type Props = {
  isSale?: boolean;
};

const SingleProductGrid = ({ isSale }: Props) => {
  return (
    <Link href={`category/product`}>
      {/* TODO: Div will be turn to Image */}
      <div className="bg-muted w-full aspect-square mb-4 relative shadow-lg rounded-lg">
        {isSale && (
          <div className="absolute left-2 top-2 px-3 py-1 bg-green-600 text-xs rounded-full text-white">
            Sale
          </div>
        )}
      </div>
      <h3 className="font-light text-xl">Örnek Product</h3>
      {isSale ? (
        <div className="flex gap-2">
          <p className="text-gray-300 line-through">$89.99</p>
          <p>$69.99</p>
        </div>
      ) : (
        <p>$89.99</p>
      )}
    </Link>
  );
};

export default SingleProductGrid;
