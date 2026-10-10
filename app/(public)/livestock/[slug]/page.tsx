"use server";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Product } from "@/types/sanity";
import { notFound } from "next/navigation"; 
import ProductDetails from "../_components/ProductDetails";
import { client } from "@/sanity/lib/client";
import { PRODUCT_QUERY } from "@/sanity/lib/queries";

 

const Page = async ({ params }: {params: Promise<{slug: string}>}) => {
 
  const { slug } = await params;
  
  const animal: Product = await client.fetch(PRODUCT_QUERY, { slug });

  if (!animal) {
    notFound();
  }

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

        {animal ? <ProductDetails animal={animal} /> : <div className=""></div>}
      </div>
    </div>
  );
};

export default Page;
