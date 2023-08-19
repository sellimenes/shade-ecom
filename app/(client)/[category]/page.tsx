"use client";

import React, { useState } from "react";
import Image from "next/image";

import Banner from "@/components/Banner";
import PageHead from "@/components/PageHead";
import SingleProductGrid from "@/components/SingleProductGrid";

import BannerPic from "@/public/banners/Banners-02.png";

import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import SingleProductList from "@/components/SingleProductList";

type Props = {};

const CategoryPage = (props: Props) => {
  const cards = [1, 2, 3, 4, 5, 6, 7, , 8, 9, 10, 11, 12];

  const [listType, setListType] = useState("grid");
  return (
    <>
      <PageHead title="Page Title" />
      <section className="container my-24">
        <Banner className="w-full aspect-[21/10]">
          <Image src={BannerPic} alt="" fill />
        </Banner>
      </section>
      <div className="container mb-10 flex gap-4">
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
            {cards.map((card) =>
              listType === "grid" ? (
                <SingleProductGrid key={card} isSale />
              ) : (
                <SingleProductList key={card} isSale />
              )
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
