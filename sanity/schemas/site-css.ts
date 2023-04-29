import { Rule } from "sanity";

const siteCss = {
  name: "siteCss",
  title: "SiteCss",
  type: "document",
  fields: [
    {
      name: "backgroundGradient",
      title: "Background Gradient",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule: Rule) => Rule.optional().min(2).max(2),
    },
  ],
};
export default siteCss;
