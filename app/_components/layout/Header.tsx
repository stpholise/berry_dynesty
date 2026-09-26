"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, Menu, UserCircle, Heart } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { HeartIcon, ShoppingCart } from "@animateicons/react/lucide";

const Header = () => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl px-8 py-2 text-black flex justify-between items-center  gap-12  xl:gap-24  bg-white ">
        <Link href={"home"} className="">
          <Image
            src={"/logo_flex.png"}
            width={220}
            height={100}
            alt="logo"
            className=" lg:h-16 xl:h-20 xl:w-44  lg:min-w-30"
          />
        </Link>
        <div className={"lg:flex hidden items-center justify-between gap-24 "}>
          <div className={"lg:flex   items-center justify-between gap-8 "}>
            {pages.map((page, i) => (
              <Link
                key={i}
                href={page.url}
                className={clsx(
                  "cursor-pointer font-semibold capitalize whitespace-nowrap hover:text-bright-green ",
                  pathname === page.url ||
                    (page.url !== "/" && pathname.startsWith(page.url))
                    ? "text-dark-green border-b-2 border-b-dark-green "
                    : " text-gray-600",
                )}
              >
                {page.title}
              </Link>
            ))}
          </div>

          <div className=" w-full flex items-center justify-end gap-8 ">
            <Link
              href={"/login"}
              className="text-bright-green flex items-center text-lg cursor-pointer"
            >
              < HeartIcon   />
            </Link>
            <Link
              href={"/login"}
              className="text-bright-green flex items-center text-lg cursor-pointer"
            >
              <ShoppingCart   />
            </Link>

            <Link
              href={"/register"}
              className="bg-bright-green rounded-md font-medium text-base text-white py-3 px-4 cursor-pointer whitespace-nowrap flex gap-1 items-center"
            >
              <UserCircle className="size-4" />
              Login/Account
            </Link>
          </div>
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
              <div className="flex flex-col justify-start items-start mt-10 gap-3 pt-4">
                <Link href={"/login"} className="text-lg">
                  Login
                </Link>

                <Link
                  href={"/register"}
                  className="bg-primary-light text-primary rounded-md font-medium  py-3 px-4"
                >
                  Sign up
                </Link>
              </div>
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
    title: "Shop Livestock",
    url: "/shop",
  },

  {
    title: "About Us",
    url: "/about",
  },
  {
    title: " contact",
    url: "/contact",
  },
];

export default Header;
