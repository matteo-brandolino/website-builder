import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "3wz899pl",
  dataset: "production",
  title: "Online Shop",
  apiVersion: "2023-08-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});
export default config;
