import { Rule } from "sanity";

const navbar = {
  name: "navbar",
  title: "Navbar",
  type: "document",
  fields: [
    {
      name: "icon",
      title: "Icon",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "menuList",
      title: "Menu List",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: Rule) => Rule.optional().min(1).max(4),
    },
    {
      name: "menuButtonsList",
      title: "Menu Button List",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: Rule) => Rule.optional().max(2),
    },
  ],
};
export default navbar;
