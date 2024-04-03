"use client";
import Link from "next/link";
import Mobilemenu from "./MobileMenu";
import Image from "next/image";
import { Links } from "../constants/links";
import Logo from "@/images/cancer-logo.png";
import useMenuActive from "@/hooks/useMenuActive";
import { useState, useEffect } from "react";
import { RiArrowUpLine } from "react-icons/ri";
const Navbar = () => {
  const [scrollToTop, setScrollToTop] = useState(false);

  const handleScrollToTop = () => {
    const scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
    scrollToTop();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-full px-4 py-4 items-center fixed z-[9999] bg-slate-100 shadow-xl">
      {scrollToTop && (
        <div
          className="fixed bottom-4 right-4 text-5xl z-10 bg-red-500 rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-80"
          onClick={handleScrollToTop}
        >
          <RiArrowUpLine className="p-2 text-white" />
        </div>
      )}
      <nav className="flex items-center justify-between">
        <Link href={"/"} className="flex-1">
          <div className="flex gap-1 items-center">
            <h1 className="font-bold text-red-400 lg:text-2xl text-lg">
              Dīəgnōsəs
            </h1>
            <Image src={Logo} width={30} height={30} />
          </div>
        </Link>

        <div className="flex gap-8  max-lg:gap-5 items-center max-md:hidden text-slate-100 font-bold justify-center">
          {Links.map((link, index) => {
            const isActive = useMenuActive(link.route);
            return (
              <Link
                href={link.route}
                key={index}
                className="bg-red-500 rounded-2xl p-1 hover:scale-90 transition-all ease-in duration-200"
              >
                <p className="px-2">{link.label}</p>
              </Link>
            );
          })}
        </div>
          <Mobilemenu />
      </nav>
    </header>
  );
};

export default Navbar;
