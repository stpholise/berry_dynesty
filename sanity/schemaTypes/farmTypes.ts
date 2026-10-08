import { Tractor } from "lucide-react";

import { defineField, defineType } from "sanity";

export const farmType = defineType({
  name: "farm",
  title: "Farm",
  type: "document",
  icon: Tractor,
  fields: [
    {
      name: "farm",
      title: "Farms",
      type: "document",
      fields: [
        defineField({
          name: "name",
          title: "Farm Name",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "location",
          title: "Location",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "description",
          title: "Description",
          type: "text",
        }),
        defineField({
          name: "image",
          title: "Image",
          type: "image",
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: "contact",
          title: "Contact",
          type: "string",
        }),
      ],
    },
  ],
});
