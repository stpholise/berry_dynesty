import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "goat-001",
    name: "Fullblood Boer Goat Buck",
    category: "Goat",
    breed: "Fullblood Boer",
    description:
      "A healthy, well-structured Boer goat suitable for breeding and meat production.",
    price: 680,
    image: "/animals/boer-goat.jpg",
    location: "Red River Valley, OK",
    age: "14 months",
    weight: "185 lbs",
    gender: "Male",
    inStock: true,
    featured: true,
  },

  {
    id: "cow-001",
    name: "Black Angus Cow",
    category: "Cattle",
    breed: "Black Angus",
    description:
      "Healthy Black Angus cattle raised under careful farm management.",
    price: 2450,
    image: "/animals/angus-cow.jpg",
    location: "Berry Dynasty Farm",
    age: "2 years",
    weight: "980 lbs",
    gender: "Female",
    inStock: true,
    featured: true,
  },
];