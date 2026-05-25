import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/companies",
    "/global",
    "/technology",
    "/logistics",
    "/insights",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/insights" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1 : route === "/technology" || route === "/logistics" || route === "/companies" ? 0.9 : 0.7,
  }));
}

