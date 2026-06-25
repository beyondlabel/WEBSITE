"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, BookOpenText, HeartHandshake, Home } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Shop", url: "/shop", icon: "🛒" },
  { name: "Articles", url: "/articles", icon: BookOpenText },
  { name: "About", url: "/about", icon: HeartHandshake }
]

export function SiteNavbar() {
  const pathname = usePathname()
  const mobileNavItems = navItems.filter((item) => item.name !== "Shop")
  const showMobileShopCta = !pathname.startsWith("/shop")

  return (
    <>
      <div className="sm:hidden">
        <NavBar items={mobileNavItems} className="w-full max-w-max" />
      </div>
      <div className="hidden sm:block">
        <NavBar items={navItems} className="w-full max-w-max" />
      </div>

      {showMobileShopCta ? (
        <div className="pointer-events-none fixed bottom-0 right-0 z-40 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] sm:hidden">
          <Link
            href="/shop"
            className="pointer-events-auto inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_20px_40px_rgba(223,187,121,0.24)] transition-transform duration-300 active:scale-[0.98]"
          >
            Shop now
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      ) : null}
    </>
  )
}
