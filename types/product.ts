import { SanitySlug, Farm, Category } from "./sanity";
export interface ProductCard {
  _id: string;
  name: string;
  slug: string;
  breed?: string;
  price?: number;
  weight?: number;
  age?: number;
  available?: boolean;
  category?: string;
  imageUrl?: string;
}

export interface ProductFilters {
  keyword: string;
  category: string;
  maxPrice: number;
  fullyVaccinated: boolean;
  quarantinePassed: boolean;
  pedigreeRegistered: boolean;
}

export const DEFAULT_PRODUCT_FILTERS: ProductFilters = {
  keyword: "",
  category: "",
  maxPrice: 5000,
  fullyVaccinated: false,
  quarantinePassed: false,
  pedigreeRegistered: false,
};

 

export interface FilterableProduct {
  _id: string;
  _type: "product";
  name: string;
  slug: SanitySlug;
  farm?: Farm;
  age?: number;
  location?: string;
  image: string;
  gender?: string;
  available: boolean;
  breed?: string;
  description?: string;
  price: number;
  category?: Category;
  fullyVaccinated?: boolean;
  quarantinePassed?: boolean;
  pedigreeRegistered?: boolean;
}
