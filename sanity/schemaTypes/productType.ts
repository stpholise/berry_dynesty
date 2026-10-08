import { FolderOpen } from "lucide-react";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Livestock",
  type: "document",
  icon: FolderOpen,
  fields: [
    defineField({
      name: "name",
      title: "Animal Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "breed",
      title: "Breed",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
    }),
    defineField({
      name: "weight",
      title: "Weight",
      type: "number",
    }),
    defineField({
      name: "age",
      title: "Age",
      type: "number",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: "available",
      title: "Available",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "farm",
      title: "Farm",
      type: "reference",
      to: [{ type: "farm" }],
    }),
  ],
});
