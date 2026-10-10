// src/types/sanity.ts

export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  crop?: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
}

export interface SanitySlug {
  _type: "slug";
  current: string;
}

// --------------------------------------------------
// Category
// --------------------------------------------------

export interface Category {
  _id: string;
  _type: "category";
  name: string;
  slug: SanitySlug;
  description?: string;
  image?: SanityImage;
  title:string
}

// --------------------------------------------------
// Farm
// --------------------------------------------------

export interface Farm {
  _id: string;
  _type: "farm";
  name: string;
  location: string;
  description?: string;
  image?: SanityImage;
  contact?: string;
}

// --------------------------------------------------
// Product
// --------------------------------------------------

export interface Product {
  _id: string;
  _type: "product";
  name: string;
  slug: SanitySlug;
  category?: Category;
  farm?: Farm;
  breed?: string;
  description?: string;
  price: number;
  weight?: number;
  age?: number;
  location?: string;
  image: string;
  gallery?: SanityImage[];
  available: boolean;
  gender?: string;
  fullyVaccinated?: boolean;
  quarantinePassed?: boolean;
  pedigreeRegistered?: boolean;
}

// --------------------------------------------------
// Process
// --------------------------------------------------

export interface Process {
  _id: string;
  _type: "process";
  title: string;
  description: string;
  image?: SanityImage;
  order?: number;
}

// --------------------------------------------------
// Testimonial
// --------------------------------------------------

export interface Testimonial {
  _id: string;
  _type: "testimonial";
  customerName: string;
  message: string;
  rating: number;
  image?: SanityImage;
}

// --------------------------------------------------
// FAQ
// --------------------------------------------------

export interface FAQ {
  _id: string;
  _type: "faq";
  question: string;
  answer: string;
  order?: number;
}

// --------------------------------------------------
// Site Settings
// --------------------------------------------------

export interface SiteSettings {
  _id: string;
  _type: "siteSettings";
  siteName: string;
  logo?: SanityImage;
  description?: string;
  phone?: string;
  email?: string;
  address?: string;
  facebook?: string;
  instagram?: string;
  whatsapp?: string;
}
