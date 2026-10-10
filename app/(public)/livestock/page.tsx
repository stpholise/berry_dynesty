"use server";
import {
  PRODUCTS_BY_CATEGORY_QUERY,
  PRODUCTS_QUERY,
  CATEGORIES_QUERY,
} from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client";
import { Product, Category } from "@/types/sanity";

import { Suspense } from "react";

import LivestocListing from "@/app/(public)/livestock/_components/LivestockListing";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

const page = async ({ searchParams }: { searchParams: SearchParams }) => {
  const params = await searchParams;

  const { category } = params;
  const initialCategory = typeof category === "string" ? category : "";
  const categories: Category[] = await client.fetch(CATEGORIES_QUERY);

  const products: Product[] = initialCategory
    ? await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, {
        category,
      })
    : await client.fetch(PRODUCTS_QUERY);

  return (
    <div className="flex flex-col gap-14 bg-gray-100 py-20">
      <div className="max-w-7xl w-full mx-auto px-4 text-center sm:text-left">
        <h3 className="text-dark-green text-3xl mb-2 sm:text-4xl font-semibold">
          Sourced Farm Animals For Sale
        </h3>
        <p className="text-lg text-gray-600 ">
          All animals are sourced, quarantined, and vet-certified prior to
          dispatch.
        </p>
      </div>

      <Suspense>
        <LivestocListing
          products={products}
          categories={categories}
          initialCategory={initialCategory}
        />
      </Suspense>
    </div>
  );
};

export default page;
