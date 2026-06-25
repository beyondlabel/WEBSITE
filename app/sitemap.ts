import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://beyondlabelgifts.com"

  return [
    "",
    "/shop",
    "/articles",
    "/articles/meaningful-gifts-for-adopted-sons",
    "/articles/how-to-thank-a-special-education-teacher",
    "/articles/why-keepsake-jewelry-works-for-big-emotions",
    "/about",
    "/privacy",
    "/terms"
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }))
}
