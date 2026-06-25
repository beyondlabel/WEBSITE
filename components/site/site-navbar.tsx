"use client"

import { BookOpenText, HeartHandshake, Home } from "lucide-react"
import { NavBar } from "@/components/ui/tubelight-navbar"

const navItems = [
  { name: "Home", url: "/", icon: Home },
  { name: "Shop", url: "/shop", icon: "🛒" },
  { name: "Articles", url: "/articles", icon: BookOpenText },
  { name: "About", url: "/about", icon: HeartHandshake }
]

export function SiteNavbar() {
  return <NavBar items={navItems} className="w-[calc(100%-1.5rem)] max-w-max" />
}
