"use client";

import { useMemo, useState } from "react";

import LivestockCard from "@/app/_components/LivestockCard";
import ProductFilter from "./ProductFilter";
import { filterProducts } from "./filterProducts";

import { DEFAULT_PRODUCT_FILTERS, type ProductFilters } from "@/types/product";
import { type Category } from "@/types/sanity";

import type { Product } from "@/types/sanity";

interface LivestockListingProps {
  products: Product[];
  categories: Category[];
  initialCategory: string;
}

export default function LivestockListing({
  products,
  categories,
  initialCategory,
}: LivestockListingProps) {
  const [filters, setFilters] = useState<ProductFilters>({
    ...DEFAULT_PRODUCT_FILTERS,
    category: initialCategory,
  });

  const filteredProducts = useMemo(
    () => filterProducts(products, filters),
    [products, filters],
  );

  console.log({ filteredProducts });

  return (
    <div className="flex max-w-7xl items-start gap-8 px-4 sm:px-8">
      <ProductFilter
        categories={categories}
        filters={filters}
        onFiltersChange={setFilters}
      />

      <section className="min-w-0 flex-1">
        <div className="mb-6 rounded-2xl border-2 border-gray-200 bg-white px-4 py-4 text-gray-600">
          <h5 className="text-sm font-semibold">
            Showing {products.length} animals available
          </h5>
        </div>

        {products.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <LivestockCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-10 text-center text-gray-500">
            No animals match your filters.
          </div>
        )}
      </section>
    </div>
  );
}
