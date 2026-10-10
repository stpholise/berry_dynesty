import { defineQuery } from "next-sanity";

export const POST_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)][0...12]{
    _id, title, slug
  }`,
);

export const PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product" &&
    defined(slug.current)
  ]{
    _id,
    name,
    slug,
    breed,
    description,
    price,
    weight,
    age,
    location,
    available,
    "category": category->{
      _id,
      name,
      slug
    },
    "image":image.asset->url,
    gallery
  }
`);

export const PRODUCT_QUERY = defineQuery(`
  *[
    _type == "product" &&
    slug.current == $slug
  ][0]{
    _id,
    name,
    slug,
    breed,
    description,
    price,
    weight,
    age,
    location,
    available,
    "category": category->{
      _id,
      name,
      slug
    },
    "image": image.asset->url,
    gallery
  }
`);

export const FEATURED_PRODUCTS_QUERY = defineQuery(`
  *[
    _type == "product" &&
   featured == true
  ][0...4]{
    _id,
    name,
    slug,
    breed,
    description,
    price,
    weight,
    age,
    location,
    available,
    "category": category->{
      _id,
      name,
      slug
    },
    "image":image.asset->url,
    gallery
  }
`);

export const CATEGORIES_QUERY = defineQuery(`
  *[
    _type == "category"
  ]{
    _id,
    name,
    title,
    slug,
    description,
    "image": image.asset->url,
  }
`);

export const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
  *[
    _type == "product" &&
    category->slug.current == $category
  ]{
    _id,
    name,
    slug,
    breed,
    price,
    weight,
    age,
    location,
    available,
     "image": image.asset->url,
    "category": category->{
      name,
      slug
    }
  }
`);
