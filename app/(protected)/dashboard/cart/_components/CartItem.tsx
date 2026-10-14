"use client";
import Image from "next/image";
import { Minus, Trash, Plus } from "lucide-react";
import type { Product } from "@/types/sanity";
import { urlFor } from "@/sanity/lib/image";

interface CartItemProp {
  product: Product;
  quantity: number;
}

const CartItem = ({ product, quantity }: CartItemProp) => {
  return (
    <div className="flex flex-col 2xs:flex-row justify-between items-center gap-4 md:gap-12 border border-gray-300 rounded-md p-2 w-full 2xs:h-38 sm:h-fit">
      <div className="flex items-center  xs:gap-3 md:w-42">
        <Image
          src={urlFor(product.image).width(300).height(300).url()}
          width={280}
          height={220}
          className=" w-full 2xs:size-30 sm:size-38 min-w-20 rounded-lg object-cover"
          alt={product.name}
        />
      </div>
      <div className="w-full flex flex-col  gap-4  2xs:gap-2 md:gap-5 md:pr-8">
        <div className="  flex-col justify-center flex  w-full ">
          <h5 className="text-xs text-bright-green font-bold">
            {product.category?.slug?.current}
          </h5>
          <h4 className=" text-base sm:text-2xl font-semibold text-dark-green">
            {product.name}
          </h4>
          <p className="text-black text-sm font-medium">
            ₦{product.price} each
          </p>
        </div>
        <div className="flex flex-row  gap-12 items-center w-full justify-between mt-auto h-fit ">
          <div className=" border-gray-200 bg-gray-100 flex rounded-lg p-1 pr-2 sm:p-2 gap-4">
            <button type="button" className="cursor-pointer w-4 sm:w-8">
              <Minus />
            </button>
            <span className=" text-sm sm:text-sm">{quantity}</span>
            <button type="button" className="cursor-pointer w-4 sm:w-8">
              <Plus />
            </button>
          </div>

          <p className="text-xl hidden md:flex font-semibold text-black">
            ₦{product.price * quantity}
          </p>
          <button type="button" className="">
            <Trash className="size-5 md:size-6 text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
