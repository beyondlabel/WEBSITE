import type { Metadata } from "next"
import { ShopExperience } from "@/components/site/shop-experience"

export const metadata: Metadata = {
  title: "Shop Eternal Hope Necklace | Gold and Silver Keepsake Gift",
  description:
    "Shop the Eternal Hope Necklace in silver for $29.99 or gold for $39.99. A meaningful keepsake necklace designed to represent bond, love, gratitude, and appreciation.",
  openGraph: {
    title: "Shop Eternal Hope Necklace | Gold and Silver Keepsake Gift",
    description:
      "Shop the Eternal Hope Necklace in silver for $29.99 or gold for $39.99. A meaningful keepsake necklace designed to represent bond, love, gratitude, and appreciation.",
    images: [
      {
        url: "/brand/og-logo.png",
        width: 1536,
        height: 1024,
        alt: "Beyond Label Gifts logo"
      }
    ]
  }
}

export default function ShopPage() {
  return <ShopExperience />
}
