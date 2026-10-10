"use server";
// import { ListFilter } from "lucide-react";
import LivestockCard from "@/app/_components/LivestockCard";
// import { livestockProducts } from "@/app/(public)/home/page";
import LivestockListing from "../(public)/livestock/_components/LivestockListing";
import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { Product } from "@/types/sanity";
import ProductFilter from "../(public)/livestock/_components/ProductFilter";

import { PRODUCTS_BY_CATEGORY_QUERY } from "@/sanity/lib/queries";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const Livestocks = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams;

  const categoryParam = params;
  const category = typeof categoryParam === "string" ? categoryParam : "";


  const products: Product[] = category
    ? await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, { category })
    : await client.fetch(PRODUCTS_QUERY);


 
  return (
    <>
      <div className="flex max-w-7xl px-4 sm:px-8 gap-8 ">
        {/* <LivestockListing /> */}
        <div className=" w-full flex flex-col gap-10">
          <div className=" header border-gray-200 border-2 w-full flex items-center justify-between bg-white text-gray-600 rounded-2xl py-4 px-4 ">
            <h5 className="text-sm sm:block hidden font-semibold">
              Showing {products.length} animals available
            </h5>

            {/* <div className="sort flex gap-3 items-center">
              <p className="font-bold text-sm">SORT BY :</p>
              <select className="text-xs font-semibold  py-1.5 px-2 bg-gray-100  rounded-xl outline-none ">
                <option>name</option>
                <option>texting </option>
                <option>name</option>
              </select>
            </div>
            <button className="sm:hidden block">
               <ListFilter />
            </button> */}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product: Product, i: number) => (
              <LivestockCard product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Livestocks;
