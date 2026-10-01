"use client";
import { UseDispatch, useSelector } from "react-redux";
import Image from "next/image";
import type { RootState } from "@/store";
import { ShoppingCart } from "lucide-react";

const Page = () => {
  const favoriteItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-500 py-8">
      <div className="max-w-5xl mx-auto flex flex-col bg-white">
        <h4 className="text-2xl font-semibold p-4">
          Wishlist {favoriteItems.length}
        </h4>
        <div className="p-4">
          {favoriteItems.length >= 1 ? (
            <div className="flex flex-col gap-4">
              {favoriteItems.map((favorite, i) => (
                <div
                  className="rounded-md border-gray-200 p-4 flex gap-6  w-full border"
                  key={i}
                >
                  <Image
                    src={favorite.image}
                    width={200}
                    height={200}
                    className="size-25 rounded-lg object-cover"
                    alt={favorite.name}
                  />
                  <div className="flex flex-col gap-4 w-full">
                    <p className="text-lg font-medium text-gray-500">
                      {favorite.name}
                    </p>
                    <div className="flex justify-between w-full items-center mt-auto">
                      <div className="">
                        <p className=""> ${favorite.price}</p>
                      </div>
                      <div className=" flex items-center gap-4">
                        <button type="button" className="text-red-400">
                          Remove
                        </button>
                        <button
                          type="button"
                          className="text-white bg-bright-green rounded-sm py-2 px-8"
                        >
                          <ShoppingCart />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
