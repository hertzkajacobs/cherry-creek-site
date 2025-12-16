import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.cherrycreektreatmentcenter.com";
  const routes = [
    "",
    "/programs/adults",
    "/programs/adolescents",
    "/services/residential",
    "/services/detox",
    "/services/php-iop",
    "/insurance",
    "/admissions",
    "/about",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
