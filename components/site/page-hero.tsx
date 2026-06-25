import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface PageHeroProps {
  eyebrow: string
  title: string
  body: string
  cta?: {
    href: string
    label: string
  }
  secondaryCta?: {
    href: string
    label: string
  }
  className?: string
}

export function PageHero({
  eyebrow,
  title,
  body,
  cta,
  secondaryCta,
  className
}: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden px-6 pb-8 pt-28 sm:pt-36", className)}>
      <div className="mx-auto max-w-5xl space-y-6 text-center">
        <p className="text-sm uppercase tracking-[0.34em] text-lavender/80">{eyebrow}</p>
        <h1 className="mx-auto max-w-4xl font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mx-auto max-w-3xl text-base leading-8 text-foreground/74 sm:text-lg">
          {body}
        </p>
        {cta || secondaryCta ? (
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {cta ? (
              <Link
                href={cta.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                {cta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : null}
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-gold/45 hover:text-gold"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
