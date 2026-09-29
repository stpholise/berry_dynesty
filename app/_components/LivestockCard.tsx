"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin } from "@animateicons/react/lucide";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";

interface LivestockCardProps {
  product: Product;
}

const LivestockCard = ({ product }: LivestockCardProps) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-sm duration-300 transition-shadow hover:shadow-2xl">
      <Link href={`/livestock/${product.id}`} className="block group">
        <div className="relative h-40 w-full overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="p-4 pb-2">
          <div className="flex items-center gap-1 text-[10px] font-medium text-bright-green lg:text-xs">
            <MapPin size={12} /> Sourced from {product.location}
          </div>
          <h3 className="mt-1 text-lg font-semibold text-dark-green   lg:text-2xl">
            {product.name}
          </h3>

          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-xs font-semibold text-gray-500 lg:text-sm">
                Weight : {product.weight}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500 lg:text-sm">
                Age : {product.age}
              </p>
            </div>
          </div>
        </div>
      </Link>

      {/* Card Action Footer (Kept outside <Link> to fix hydration errors) */}
      <div className="flex items-end justify-between gap-4 p-4 pt-0">
        <p className="text-lg font-bold text-dark-green">
          {product.currency} {product.price.toLocaleString()}
        </p>

        <button
          onClick={handleAddToCart}
          className="flex cursor-pointer items-center gap-2 rounded-md bg-gray-200 p-2 text-sm font-semibold text-dark-green transition hover:bg-gray-300"
        >
          <ShoppingBag className="size-4" /> Add
        </button>
      </div>
    </div>
  );
};

export default LivestockCard;
