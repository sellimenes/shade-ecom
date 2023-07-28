import Link from "next/link";
import {
  Search,
  User,
  ShoppingCart,
  Menu,
  Home,
  BadgePercent,
  Shapes,
  Layout,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <header className="bg-red-500 dark:bg-red-700 py-3">
      <div className="container flex justify-between items-center text-white">
        <Link href="/">
          <h1 className="italic font-bold text-2xl">Shade E-Com</h1>
        </Link>
        <nav className="hidden md:block">
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
        <div className="hidden md:flex items-center gap-4">
          <Search size="20" />
          <User size="20" />
          <ShoppingCart size="20" />
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size="24" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="italic">Shade E-Com</SheetTitle>
                {/* <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription> */}
              </SheetHeader>
              <div className="mt-10 flex-1">
                <ul className="w-full flex flex-col gap-4 ">
                  <li className="hover:-translate-y-1 transition">
                    <Link href="/" className="flex items-center gap-1">
                      <Home size={16} className="mb-1" /> Home
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 transition">
                    <Link href="/" className="flex items-center gap-1">
                      <BadgePercent size={16} className="mb-[0.1rem]" />{" "}
                      Promotions
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 transition">
                    <Link href="/" className="flex items-center gap-1">
                      <Home size={16} className="mb-1" /> Shop
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 transition">
                    <Link href="/" className="flex items-center gap-1">
                      <Home size={16} className="mb-1" /> Products
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 transition">
                    <Link href="/" className="flex items-center gap-1">
                      <Shapes size={16} className="mb-1" /> Blog
                    </Link>
                  </li>
                  <li className="hover:-translate-y-1 transition">
                    <Link href="/" className="flex items-center gap-1">
                      <Layout size={16} className="mb-[0.1rem]" /> Pages
                    </Link>
                  </li>
                </ul>
              </div>
              <Separator />
              <SheetFooter>
                <a href="https://www.facebook.com" target="_blank">
                  <Facebook
                    color="#868686"
                    className="hover:stroke-black transition duration-300"
                  />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Instagram
                    color="#868686"
                    className="hover:stroke-black transition duration-300"
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Twitter
                    color="#868686"
                    className="hover:stroke-black transition duration-300"
                  />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <Linkedin
                    color="#868686"
                    className="hover:stroke-black transition duration-300"
                  />
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
