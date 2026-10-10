"use client";
import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";

import { MapPin, ShoppingCart, Heart } from "lucide-react";
import { toggleWishlist } from "@/store/slices/wishlistSlice";
import { addToCart } from "@/store/slices/cartSlice";
import { RootState } from "@/store";
import clsx from "clsx";
import { Product } from "@/types/sanity";

interface ProductDetailsProp {
  animal: Product;
}

const ProductDetails = ({ animal }: ProductDetailsProp) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.wishlist.items);

  const checkFavorites = favorites.some((i) => i._id === animal._id);

  const toggleFavorite = () => {
    if (!animal) return;

    dispatch(toggleWishlist(animal));
  };
  const addItemToCart = () => {
    if (!animal) return;

    dispatch(addToCart({ product: animal, quantity: 1 }));
  };
  return (
    <div className="rounded-3xl bg-white text-gray-500 max-w-7xl mx-auto min-h-[calc(100vh-80px)] grid grid-cols-2 gap-6 border-2 border-gray-200 shadow-sm">
      <div className="w-full h-full rounded-l-3xl overflow-hidden flex items-center ">
        <Image
          src={animal.image}
          width={800}
          height={700}
          alt={animal?.breed || "animal breed "}
          className="w-full h-full max-h-140 cover"
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
            {animal.location || "Berry Dynasty farm"}
          </p>
        </div>

        <h3 className="text-3xl text-black py-1 font-semibold">
          {animal.price.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })}
        </h3>

        <p className="text-sm text-gray-600">{animal.description}</p>
        <div className="rounded-2xl text-sm grid-cols-2 grid gap-4 border border-gray-200 bg-gray-100 p-6 capitalize">
          <p className=" font-semibold text-gray-500">
            {" "}
            Breed: <span className="text-black f">{animal.breed}</span>
          </p>
          <p className=" font-semibold text-gray-500">
            {" "}
            Weight:{" "}
            <span className="text-black">
              {animal.weight?.toLocaleString("en-US", {
                style: "unit",
                unit: "kilogram",
                unitDisplay: "short",
              })}
            </span>
          </p>
          <p className=" font-semibold text-gray-500">
            {" "}
            Age:{" "}
            <span className="text-black">
              {animal.age?.toLocaleString("en-US", {
                style: "unit",
                unit: "month",
                unitDisplay: "short",
              })}
            </span>
          </p>
          {animal.gender &&
          <p className=" font-semibold text-gray-500">
            {" "}
            sex:{" "}
            <span className="text-black">
              {animal.gender}
            </span>
          </p>}
        </div>
        <div className="flex gap-4 mt-4">
          <button
            onClick={addItemToCart}
            type="button"
            className="bg-bright-green cursor-pointer w-10/12 flex items-center justify-center gap-2 p-2 rounded-md text-white font-semibold transition-transform duration-100 active:scale-95"
          >
            <ShoppingCart className="size-5" /> Add to cart
          </button>
          <button
            onClick={toggleFavorite}
            type="button"
            className={clsx(
              "border-2 cursor-pointer flex-1 flex items-center justify-center p-2 border-gray-200 bg-white rounded-2xl transition-transform duration-100 active:scale-95",
              checkFavorites ? "text-red-500 " : "text-gray-400",
            )}
          >
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
