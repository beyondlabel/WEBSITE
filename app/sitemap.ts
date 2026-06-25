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
    "/articles/importance-of-gifts-that-carry-meaning",
    "/articles/best-necklace-gift-for-moms-and-caregivers",
    "/articles/what-makes-a-jewelry-gift-high-converting-online",
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
