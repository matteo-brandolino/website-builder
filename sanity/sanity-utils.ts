import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import config from "./config/client-config";
import { SiteConfig } from "@/types/SiteConfig";
import { Navbar } from "@/types/Navbar";
import { Main } from "@/types/Main";
import { SiteCss } from "@/types/SiteCss";

export async function getSiteConfig(): Promise<SiteConfig> {
  return createClient(config).fetch(
    groq`*[_type == "siteConfig"][0]{
        title,
        description,
        "favicon": favicon.asset->url,
    }`
  );
}

export async function getSiteCss(): Promise<SiteCss> {
  return createClient(config).fetch(
    groq`*[_type == "siteCss"][0]{
        "backgroundGradient": backgroundGradient[],
    }`
  );
}

export async function getNavbar(): Promise<Navbar> {
  return createClient(config).fetch(
    groq`*[_type == "navbar"][0]{
      "icon": icon.asset->url,
      "menuList": menuList[],
      "menuButtonsList": menuButtonsList[],
    }`
  );
}

export async function getMain(): Promise<Main> {
  return createClient(config).fetch(
    groq`*[_type == "main"][0]{
      title,
      subtitle,
      "mainImage": mainImage.asset->url,
    }`
  );
}

export async function getProjects(): Promise<Project[]> {
  return createClient(config).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug" : slug.current,
        "image": image.asset->url,
        url,
        content,
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(config).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
          _id,
          _createdAt,
          name,
          "slug" : slug.current,
          "image": image.asset->url,
          url,
          content,
      }`,
    { slug }
  );
}
