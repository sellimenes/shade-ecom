import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Search, User, ShoppingCart } from "lucide-react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="bg-red-500 dark:bg-red-700 py-3">
      <div className="container flex justify-between items-center text-white">
        <Link href="/">
          <h1 className="italic font-bold text-2xl">Shade E-Com</h1>
        </Link>
        <nav className="">
          <ul className="w-full flex items-center gap-4 ">
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Promotions</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Shop</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Products</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Blog</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Pages</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <Search size="20" />
          <User size="20" />
          <ShoppingCart size="20" />
        </div>
      </div>
    </header>
  );
}
