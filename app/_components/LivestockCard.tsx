import Image from "next/image";
import Link from "next/link";

import type { LivestockProduct } from "../(public)/home/page";
import { MapPin } from "@animateicons/react/lucide";
import { ShoppingBag } from "lucide-react";

interface LivestockCardProps {
  product: LivestockProduct;
}

const LivestockCard = ({ product }: LivestockCardProps) => {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-sm p-2">
      <div className="relative h-40 w-full rounded-2xl ">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover h-40 rounded-t-xl"
        />
      </div>

      <div className="p-4">
        <div className="mt-2 text-xs text-bright-green flex items-center gap-1 font-medium">
          <MapPin size={10} className="" /> Sourced from {product.location}
        </div>
        <h3 className="mt-1 text-2xl font-semibold text-dark-green">
          {product.name}
        </h3>

        <div className="  grid grid-cols-2 gap-4   pt-2">
          <div>
            <p className="font-semibold text-sm text-gray-500">
              Waight : {product.weight}
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm text-gray-500">
              Age : {product.age}
            </p>
          </div>
        </div>

        <div className="mt-5 flex items-end justify-between gap-4">
          <div className="flex gap-8">
            <p className="text-xl font-bold text-dark-green">
              {product.currency} {product.price.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <button className=" size-5 text-dark-green">
              {" "}
              <ShoppingBag />{" "}
            </button>
            <Link
              href={`/livestock/${product.id}`}
              className="rounded-lg bg-dark-green px-3 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default LivestockCard;
