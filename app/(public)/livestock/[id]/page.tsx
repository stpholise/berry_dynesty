"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, Heart, MapPin, ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleWishlist } from "@/store/slices/wishlistSlice";
import { addToCart } from "@/store/slices/cartSlice";
import clsx from "clsx";

import { products } from "@/data/product";

const Page = () => {
  const dispatch = useDispatch();
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  const animal = products.find((i) => i._id === slug);

  const favorites = useSelector((state: RootState) => state.wishlist.items);

  const checkFavorites = favorites.some((i) => i._id === slug);

  const toggleFavorite = () => {
    if (!animal) return;

    dispatch(toggleWishlist(animal));
  };
  const addItemToCart = () => {
    if (!animal) return;

    dispatch(addToCart({ product: animal, quantity: 1 }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="w-full  py-16 flex flex-col gap-10  max-w-7xl mx-auto ">
        <Link
          href={"/livestock"}
          className="text-bright-green flex items-center "
        >
          <ChevronLeft />
          <span className="">Back to livestocks</span>
        </Link>

        {animal ? (
          <div className="rounded-3xl bg-white text-gray-500 max-w-7xl mx-auto min-h-[calc(100vh-80px)] grid grid-cols-2 gap-6 border-2 border-gray-200 shadow-sm">
            <div className="w-full h-full rounded-l-3xl overflow-hidden ">
              <Image
                src={animal.image}
                width={800}
                height={700}
                alt={animal.breed}
                className="w-full h-full cover"
              />
            </div>
            <div className="p-5 flex  flex-col gap-6 justify-center">
              <div className=" flex flex-col gap-2">
                <h4 className="text-sm font-semibold text-bright-green uppercase">
                  {animal.breed}
                </h4>
                <h3 className="text-3xl font-semibold text-dark-green capitalize">
                  {animal.name}
                </h3>
                <p className="text-xs text-gray-600 flex  gap-1.5">
                  <MapPin className="size-4 text-bright-green" /> Sourced from{" "}
                  {animal.location}
                </p>
              </div>

              <h3 className="text-3xl text-black py-1 font-semibold">
                $ {animal.price}
              </h3>

              <p className="text-sm text-gray-600">{animal.description}</p>
              <div className="rounded-2xl text-sm grid-cols-2 grid gap-4 border border-gray-200 bg-gray-100 p-6 capitalize">
                <p className=" font-semibold text-gray-500">
                  {" "}
                  Breed: <span className="text-black f">{animal.breed}</span>
                </p>
                <p className=" font-semibold text-gray-500">
                  {" "}
                  Weight: <span className="text-black">{animal.weight}</span>
                </p>
                <p className=" font-semibold text-gray-500">
                  {" "}
                  Age: <span className="text-black">{animal.age}</span>
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <button
                  onClick={addItemToCart}
                  type="button"
                  className="bg-bright-green w-10/12 flex items-center justify-center gap-2 p-2 rounded-md text-white font-semibold"
                >
                  <ShoppingCart className="size-5" /> Add to cart
                </button>
                <button
                  onClick={toggleFavorite}
                  type="button"
                  className={clsx(
                    "border-2 flex-1 flex items-center justify-center p-2 border-gray-200 bg-white rounded-2xl",
                    checkFavorites ? "text-red-500 " : "text-gray-400",
                  )}
                >
                  <Heart />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default Page;
