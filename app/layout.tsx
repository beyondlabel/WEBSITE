import type { ReactNode } from "react"
import type { Metadata } from "next"
import "./globals.css"
import { SiteNavbar } from "@/components/site/site-navbar"
import { SiteFooter } from "@/components/site/footer"

const title = "Beyond Label Gifts | Every Story. Beyond Label."
const description =
  "Shop the Eternal Hope Necklace in silver or gold. A meaningful keepsake necklace designed to represent love, gratitude, bond, and lasting appreciation."

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondlabelgifts.com"),
  title,
  description,
  applicationName: "Beyond Label Gifts",
  keywords: [
    "meaningful gift necklace",
    "eternal hope necklace",
    "gold necklace gift",
    "silver necklace gift",
    "adopted son gift",
    "teacher appreciation jewelry",
    "caregiver thank you gift",
    "keepsake necklace"
  ],
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Beyond Label Gifts",
    images: [
      {
        url: "/brand/og-logo.png",
        width: 1536,
        height: 1024,
        alt: "Beyond Label Gifts logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/og-logo.png"]
  },
  icons: {
    icon: [{ url: "/brand/logo.png", type: "image/png" }],
    apple: [{ url: "/brand/logo.png", type: "image/png" }]
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Beyond Label Gifts",
              url: "https://beyondlabelgifts.com",
              description,
              slogan: "Every Story. Beyond Label.",
              sameAs: ["https://instagram.com/beyondlabelgifts"]
            })
          }}
        />
        <div className="site-noise" aria-hidden="true" />
        <div className="site-frame">
          <SiteNavbar />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
