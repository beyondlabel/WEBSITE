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
        url: "/products/silver/1.jpg",
        width: 1000,
        height: 1000,
        alt: "Silver Eternal Hope Necklace beside a luxury wood gift box"
      }
    ]
  }
}

export default function ShopPage() {
  return <ShopExperience />
}
