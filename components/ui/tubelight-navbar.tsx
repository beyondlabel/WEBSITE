"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon | string
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const activeTab = items.find((item) => (
    item.url === "/"
      ? pathname === item.url
      : pathname === item.url || pathname.startsWith(`${item.url}/`)
  ))?.name ?? items[0].name

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 sm:top-0 sm:mb-0 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 rounded-full border border-border bg-background/5 px-1 py-1 shadow-lg backdrop-blur-lg">
        {items.map((item) => {
          const isActive = activeTab === item.name
          const icon = typeof item.icon === "string"
            ? item.icon
            : React.createElement(item.icon, { size: 18, strokeWidth: 2.5 })

          return (
            <Link
              key={item.name}
              href={item.url}
              aria-label={item.name}
              title={item.name}
              className={cn(
                "relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-6",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="flex min-w-[1.3rem] items-center justify-center text-[1.05rem] leading-none md:hidden">
                {icon}
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-primary/5"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                >
                  <div className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary sm:-top-2">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-primary/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-primary/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
