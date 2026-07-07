import type { ReactNode } from "react"
import type { Metadata } from "next"
import Script from "next/script"
import "./globals.css"
import { SiteNavbar } from "@/components/site/site-navbar"
import { SiteFooter } from "@/components/site/footer"

const title = "Beyond Labels Gifts | Meaningful Jewelry Gifts"
const description =
  "Beyond Labels Gifts creates meaningful keepsake necklaces in yellow gold or white gold that represent love, gratitude, bond, and lasting appreciation."

export const metadata: Metadata = {
  metadataBase: new URL("https://beyondlabelgifts.com"),
  title,
  description,
  applicationName: "Beyond Labels Gifts",
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
    siteName: "Beyond Labels Gifts",
    images: [
      {
        url: "/brand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Beyond Labels Gifts logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/brand/og-image.png"]
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }]
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1681765013039977');
            fbq('track', 'PageView');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Beyond Labels Gifts",
              url: "https://beyondlabelgifts.com",
              description,
              slogan: "Every Story. Beyond Labels.",
              sameAs: ["https://instagram.com/beyondlabelgifts"]
            })
          }}
        />
        <div className="site-noise" aria-hidden="true" />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1681765013039977&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <div className="site-frame">
          <SiteNavbar />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  )
}
