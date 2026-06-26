import type { Metadata } from "next"
import { ShopExperience } from "@/components/site/shop-experience"
import { productImages, shopFaqs, signatureProduct } from "@/data/site"

export const metadata: Metadata = {
  title: "Eternal Hope Necklace Gift | Beyond Labels Gifts",
  description:
    "Buy the Eternal Hope Necklace in yellow gold or white gold. Gift-ready message card, premium box, secure checkout.",
  keywords: [
    "Eternal Hope Necklace",
    "meaningful necklace gift",
    "gift ready necklace",
    "gold necklace gift",
    "silver necklace gift",
    "keepsake jewelry gift",
    "teacher appreciation necklace",
    "caregiver thank you necklace"
  ],
  alternates: {
    canonical: "/shop"
  },
  openGraph: {
    title: "Eternal Hope Necklace Gift | Beyond Labels Gifts",
    description:
      "Buy the Eternal Hope Necklace in yellow gold or white gold with a gift-ready message card, premium box, and secure checkout.",
    url: "/shop",
    type: "website",
    images: [
      {
        url: productImages.gold[0],
        width: 1000,
        height: 1000,
        alt: "Gold Eternal Hope Necklace displayed over a heartfelt message card in a premium gift box"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Eternal Hope Necklace Gift | Beyond Labels Gifts",
    description:
      "Buy the Eternal Hope Necklace in yellow gold or white gold with a gift-ready message card, premium box, and secure checkout.",
    images: [productImages.gold[0]]
  }
}

export default function ShopPage() {
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: signatureProduct.name,
    image: [...productImages.gold, ...productImages.silver].map(
      (image) => `https://beyondlabelgifts.com${image}`
    ),
    description:
      "The Eternal Hope Necklace is a meaningful keepsake jewelry gift available in 18K yellow gold and 14K white gold finishes, presented with a heartfelt message card and premium gift box.",
    brand: {
      "@type": "Brand",
      name: "Beyond Labels Gifts"
    },
    sku: "eternal-hope-necklace",
    material: "18K yellow gold or 14K white gold finish with cubic zirconia center stone",
    offers: {
      "@type": "AggregateOffer",
      url: "https://beyondlabelgifts.com/shop",
      priceCurrency: "USD",
      lowPrice: "59.99",
      highPrice: "59.99",
      offerCount: "2",
      availability: "https://schema.org/InStock"
    }
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: shopFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ShopExperience />
    </>
  )
}
