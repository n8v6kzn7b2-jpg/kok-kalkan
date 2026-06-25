import type { MetadataRoute } from "next";
import { locales, siteUrl } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${siteUrl}/en`,
        tr: `${siteUrl}/tr`,
      },
    },
  }));
}
