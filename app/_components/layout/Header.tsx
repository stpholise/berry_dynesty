"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu } from "lucide-react";
import clsx from "clsx";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl px-8 py-4 text-black flex justify-between items-center gap-12 lg:gap-24  bg-white ">
        <button className="">
          <Image
            src={"/logo_flex.png"}
            width={120}
            height={50}
            alt="logo"
            className=" h-10 w-20"
          />
        </button>
        <div className={"lg:flex hidden justify-between gap-14 "}>
          {pages.map((page, i) => (
            <Link key={i} href={page.url} className="cursor-pointer capitalize">
              {page.title}
            </Link>
          ))}
        </div>
        <button
          className="lg:hidden md:pr-4 "
          onClick={() => setOpenMenu((open) => !open)}
        >
          {openMenu ? <X size={32} /> : <Menu className="size-8" />}
        </button>
        <div
          className={clsx(
            "fixed inset-0 z-50 lg:hidden",
            openMenu ? "visible" : "invisible pointer-events-none",
          )}
        >
          <div
            onClick={() => setOpenMenu(false)}
            className={clsx(
              "fixed inset-y-0 transition-all duration-300 left-0 z-40 w-full bg-black/60 lg:hidden",
              openMenu ? "animate-show-menu" : "animate-remove-menu",
            )}
          >
            <div
              className={clsx(
                "lg:hidden z-50 overflow-hidden transition-all duration-300 fixed top-0 bg-dark-green text-white flex flex-col gap-6 h-screen w-11/12 px-8 py-20",
                openMenu ? "animate-show-menu" : "animate-remove-menu",
              )}
            >
              <button
                className="lg:hidden pr-8 absolute top-5 right-4 "
                onClick={() => setOpenMenu(false)}
              >
                {<X size={40} />}
              </button>
              {pages.map((page, i) => (
                <Link
                  key={i}
                  href={page.url}
                  className="cursor-pointer capitalize"
                >
                  {page.title}
                </Link>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

const pages = [
  {
    title: "home",
    url: "/",
  },
  {
    title: "about",
    url: "/about",
  },
  {
    title: " contact",
    url: "/contact",
  },
];

export default Header;
