"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
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
  Moon,
  Sun,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import LoginModal from "@/components/Modals/LoginModal";
import SignupModal from "@/components/Modals/SignupModal";

type Props = {};

export default function Header({}: Props) {
  const session = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSignOut = () => {
    signOut();
  };

  useEffect(() => {
    console.log(session);
    setIsDropdownOpen(false);
  }, [session]);
  const { setTheme } = useTheme();
  return (
    <header className="bg-primary py-3 text-white">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="italic font-bold text-2xl">Shade E-Com</h1>
        </Link>

        <nav className="hidden md:block">
          <ul className="w-full flex items-center gap-4 ">
            <li className="hover:-translate-y-1 transition">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/promotions">Promotions</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/products">Products</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:-translate-y-1 transition">
              <Link href="/pages">Pages</Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Search size="20" />
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger asChild className="cursor-pointer">
              <div className="flex items-center gap-1">
                <User size="20" />
                {session?.status === "authenticated" ? "Hesabım" : "Giriş Yap"}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-4">
              {session?.status === "authenticated" ? (
                <div>
                  <p>
                    Oooo welcome <br /> {session?.data?.user?.email}
                  </p>
                  <Button
                    variant={"default"}
                    size={"full"}
                    onClick={handleSignOut}
                  >
                    Çıkış Yap
                  </Button>
                </div>
              ) : (
                <div className="flex flex-col gap-1 ">
                  <LoginModal />
                  <SignupModal />
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <ShoppingCart size="20" />
          {/* Dark Mode Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size="24" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="italic">Shade E-Com</SheetTitle>
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
              <SheetFooter className="flex-row gap-2">
                <a href="https://www.facebook.com" target="_blank">
                  <Facebook className="stroke-[#868686] hover:stroke-black dark:stroke-white dark:hover:stroke-red-500 transition duration-300 max-w-max" />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Instagram className="stroke-[#868686] hover:stroke-black dark:stroke-white dark:hover:stroke-red-500 transition duration-300" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Twitter className="stroke-[#868686] hover:stroke-black dark:stroke-white dark:hover:stroke-red-500 transition duration-300" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                  <Linkedin className="stroke-[#868686] hover:stroke-black dark:stroke-white dark:hover:stroke-red-500 transition duration-300" />
                </a>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
