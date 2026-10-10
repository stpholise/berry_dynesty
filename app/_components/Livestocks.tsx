"use server";
// import { ListFilter } from "lucide-react";
import LivestockCard from "@/app/_components/LivestockCard";
// import { livestockProducts } from "@/app/(public)/home/page";

import { client } from "@/sanity/lib/client";
import { PRODUCTS_QUERY } from "@/sanity/lib/queries";
import { Product } from "@/types/sanity";

const Livestocks = async () => {
  const products = await client.fetch(PRODUCTS_QUERY);

  return (
    <>
      {/*  <div className="flex max-w-7xl px-4 sm:px-8 gap-8 ">*/}

      {/* <div className=" w-full flex flex-col gap-10">
          <div className=" header border-gray-200 border-2 w-full flex items-center justify-between bg-white text-gray-600 rounded-2xl py-4 px-4 ">
            <h5 className="text-sm sm:block hidden font-semibold">
              Showing ... animals available
            </h5>

            <div className="sort flex gap-3 items-center">
              <p className="font-bold text-sm">SORT BY :</p>
              <select className="text-xs font-semibold  py-1.5 px-2 bg-gray-100  rounded-xl outline-none ">
                <option>name</option>
                <option>texting </option>
                <option>name</option>
              </select>
            </div>
            <button className="sm:hidden block">
              <ListFilter />
            </button>
          </div> */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product: Product, i: number) => (
          <LivestockCard product={product} key={i} />
        ))}
      </div>
      {/* </div> 
      </div> */}
    </>
  );
};

export default Livestocks;
