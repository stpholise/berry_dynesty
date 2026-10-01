export type ProductCategory =
  | "Cattle"
  | "Goat"
  | "Sheep"
  | "Pig"
  | "Poultry"
  | "Turkey"
  | "Duck"
  | "Snail";

export type ProductGender = "Male" | "Female";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  breed: string;
  description: string;
  price: number;
  image: string;
  location: string;
  age: string;
  weight: string;
  gender: ProductGender;
  inStock: boolean;
  featured: boolean;
}
