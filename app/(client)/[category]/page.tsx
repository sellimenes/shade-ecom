"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { LayoutGrid, List, Loader } from "lucide-react";

import PageHead from "@/components/PageHead";
import SingleProductGrid from "@/components/SingleProductGrid";
import SingleProductList from "@/components/SingleProductList";
import { cn } from "@/lib/utils";
import getProducts from "@/actions/getProducts";

import { Product } from "@prisma/client";

type Props = {};

const CategoryPage = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [listType, setListType] = useState("grid");

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  if (products.length < 1) return <Loader size={48} className="animate-spin" />;

  return (
    <>
      <PageHead title="Page Title" />
      {/* <section className="container my-24">
        <Banner className="w-full aspect-[21/10]">
          <Image src={BannerPic} alt="" fill />
        </Banner>
      </section> */}
      <div className="container mb-10 flex gap-4 mt-4">
        <aside className="w-1/4 bg-orange-500"></aside>
        <div className="w-full flex flex-col gap-3">
          <div className="ml-auto flex items-center border border-black shadow-lg">
            <LayoutGrid
              onClick={() => setListType("grid")}
              size={32}
              className={cn(
                "p-2 cursor-pointer",
                listType === "grid" && "bg-red-600 text-white"
              )}
            />
            <List
              onClick={() => setListType("list")}
              size={32}
              className={cn(
                "p-2 cursor-pointer",
                listType === "list" && "bg-red-600 text-white"
              )}
            />
          </div>
          <section
            className={cn(
              "flex-1 grid gap-6",
              listType === "grid" ? "grid-cols-3" : "grid-cols-1"
            )}
          >
            {products.map((product: Product) =>
              listType === "grid" ? (
                <SingleProductGrid key={product?.id} data={product} isSale />
              ) : (
                <SingleProductList key={product?.id} data={product} isSale />
              )
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
