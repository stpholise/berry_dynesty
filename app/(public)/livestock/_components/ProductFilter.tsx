"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, Filter } from "lucide-react";
import {useState } from 'react'

import type { ProductFilters } from "@/types/product";
import type { Category } from "@/types/sanity";
import PriceSlider from "./PriceSlider";

interface ProductFilterProps {
  categories: Category[];
  filters: ProductFilters;
  onFiltersChange: (filters: ProductFilters) => void;
}

const ProductFilter = ({
  categories,
  filters,
  onFiltersChange,
}: ProductFilterProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateFilter = <K extends keyof ProductFilters>(
    key: K,
    value: ProductFilters[K],
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

     const [maxPrice, setMaxPrice] = useState(500000);

  const handleCategoryChange = (slug: string) => {
    updateFilter("category", slug);

    const params = new URLSearchParams(searchParams.toString());

    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }

    const query = params.toString();

    router.push(query ? `${pathname}?${query}` : pathname);
  };

  const resetFilters = () => {
    onFiltersChange({
      keyword: "",
      category: "",
      maxPrice: 5000,
      fullyVaccinated: false,
      quarantinePassed: false,
      pedigreeRegistered: false,
    });

    router.push(pathname);
  };

  

  return (
    <aside className="hidden h-fit w-70 shrink-0 flex-col gap-5 rounded-2xl border-2 border-gray-200 bg-white p-4 text-gray-600 sm:flex md:sticky md:top-12">
      <div className="flex justify-between gap-8 border-b py-4">
        <h5 className="flex items-center gap-2 text-xl font-semibold text-black">
          <Filter className="size-4 text-bright-green" />
          Filters
        </h5>

        <button
          type="button"
          onClick={resetFilters}
          className="text-sm font-medium text-bright-green"
        >
          Reset All
        </button>
      </div>

      {/* Keep your existing keyword, price and checkbox controls here. */}

      <div>
        <label htmlFor="category" className="text-sm font-semibold uppercase">
          Species category
        </label>

        <select
          id="category"
          value={filters.category || ""}
          onChange={(event) => handleCategoryChange(event.target.value)}
          className="mt-3 h-10 w-full  rounded-md bg-gray-100 p-1.5 outline-none"
        >
          <option value="">All Categories</option>

          {categories.map((category) => (
            <option
              key={category._id}
              value={category.slug?.current}
              className=""
            >
              {category.title}
            </option>
          ))}
        </select>
      </div>
     


<PriceSlider value={maxPrice} onChange={setMaxPrice} />

      <div className=" flex flex-col gap-3.5">
        <h6 className="text-sm font-semibold uppercase flex justify-between ">
          Health/certiificaion
        </h6>

        <div className="flex flex-col gap-2 text-xs">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              // checked={isAccepted}
              // onChange={(e) => setIsAccepted(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="terms" className="text-xs font-medium">
              Fully Vaccinated
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              // checked={isAccepted}
              // onChange={(e) => setIsAccepted(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="terms" className="text-xs font-medium">
              Passed 14-Day Quarantine
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              // checked={isAccepted}
              // onChange={(e) => setIsAccepted(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300"
            />
            <label htmlFor="terms" className="text-xs font-medium">
              Pedigree/Registered
            </label>
          </div>
        </div>
      </div>
      <div className="bg-amber-100/60 border-gray-100 border shadow-sm rounded-md p-5 flex flex-col gap-2">
        <p className="text-xs font-semibold text-black ">
          Special Order Sourcing
        </p>
        <p className="text-amber-700 text-xs">
          {" "}
          Need 20+ head of cattle or specialized breeding lines?
        </p>
        <button className="text-dark-green  text-xs font-bold pt-2 flex items-center gap-2">
          Request Direct Sourcing <ArrowRight className="size-4" />{" "}
        </button>
      </div>
      {/* Keep your existing price, certification and sourcing UI here. */}
    </aside>
  );
};

export default ProductFilter;
