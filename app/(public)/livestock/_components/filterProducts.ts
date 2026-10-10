import type { FilterableProduct, ProductFilters } from "@/types/product";
import type { Product } from "@/types/sanity";

export function filterProducts(
  products: Product[],
  filters: ProductFilters,
): FilterableProduct[] {
  const keyword = filters.keyword.trim().toLowerCase();

  return products.filter((product) => {
    const matchesKeyword =
      keyword === "" ||
      [product.name, product.breed ?? "", product.description ?? ""].some(
        (value) => value.toLowerCase().includes(keyword),
      );

    const matchesCategory =
      filters.category === "" || product.category?._id == filters.category;

    const matchesPrice = product.price <= filters.maxPrice;

    const matchesVaccination = !filters.fullyVaccinated || product.fullyVaccinated === true;

   return(
     matchesKeyword &&
      matchesCategory &&
      matchesPrice &&
      matchesVaccination 
   );

  });
}
