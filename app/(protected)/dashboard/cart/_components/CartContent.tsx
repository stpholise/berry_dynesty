import Link from "next/link";
import { client } from "@/sanity/lib/client";
import CartItem from "./CartItem";
import { getCartItems } from "@/lib/serverActon";
import { PRODUCT_BY_ID_QUERY } from "@/sanity/lib/queries";
import { ShoppingCart } from "@animateicons/react/lucide";

import type { Product } from "@/types/sanity";

const CartContent = async () => {
  const cartItemsId = await getCartItems();
 

  if (!cartItemsId || cartItemsId.length === 0) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center py-12">
        <ShoppingCart size={40} />
        <p>Your purchase order cart is currently empty.</p>
        <Link
          href={"/livestock"}
          className="bg-bright-green text-white rounded-lg py-2 px-8"
        >
          Browse livestocks
        </Link>
      </div>
    );
  }

  const productIds = cartItemsId.map((item) => item.product_id);
  console.log("product ids sent to Sanity:", productIds);

  const products: Product[] = await client.fetch(PRODUCT_BY_ID_QUERY, {
    ids: productIds,
  });
  console.log("products from Sanity:", products);
  const findQuantityById = new Map(
    cartItemsId.map((item) => [item.product_id, item.quantity]),
  );
 
if (!Array.isArray(products) || products.length === 0) {
    return (
      <div className="flex flex-col gap-3 items-center justify-center py-12">
        <ShoppingCart size={40} />
        <p>Your purchase order cart is currently empty.</p>
        <Link
          href={"/livestock"}
          className="bg-bright-green text-white rounded-lg py-2 px-8"
        >
          Browse livestocks
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl flex flex-col gap-4 p-3 sm:p-6 border-2 border-gray-200 bg-white h-fit">
      {products.map((item) => (
        <CartItem
          key={item._id}
          product={item}
          quantity={findQuantityById.get(item._id) ?? 1}
        />
      ))}
    </div>
  );
};

export default CartContent;
