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
  ))?.name

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-[calc(env(safe-area-inset-top)+0.75rem)] sm:px-6 sm:pt-6"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-2 rounded-full border border-white/10 bg-[#0c0913]/82 px-1.5 py-1.5 shadow-[0_18px_40px_rgba(4,2,8,0.38)] backdrop-blur-xl",
          className
        )}
      >
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
                "relative flex min-h-11 items-center justify-center rounded-full px-3 py-2.5 text-sm font-semibold transition-colors min-[430px]:gap-2 sm:px-5",
                "text-foreground/80 hover:text-primary",
                isActive && "bg-muted text-primary"
              )}
            >
              <span className="flex min-w-[1.3rem] items-center justify-center text-[1.05rem] leading-none min-[430px]:hidden">
                {icon}
              </span>
              <span className="hidden min-[430px]:inline">{item.name}</span>
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
                  <div className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 rounded-t-full bg-primary sm:-top-1">
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
