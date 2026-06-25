"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowRight, CheckCircle2, Gift, ShieldCheck, Sparkles } from "lucide-react"
import { productImages } from "@/data/site"
import { cn } from "@/lib/utils"

const finishes = {
  gold: {
    label: "Gold finish",
    note: "Warm, radiant, and made for the person whose love deserves a brighter spotlight.",
    image: productImages.gold[0],
    alt: "Gold Eternal Hope Necklace beside a luxury wood gift box",
    thumb: productImages.gold[5]
  },
  silver: {
    label: "Silver finish",
    note: "Clean, brilliant, and perfect for a message meant to stay close every day.",
    image: productImages.silver[0],
    alt: "Silver Eternal Hope Necklace beside a luxury wood gift box",
    thumb: productImages.silver[4]
  }
} as const

type FinishKey = keyof typeof finishes

interface ProductStageProps {
  className?: string
  compact?: boolean
}

export function ProductStage({ className, compact = false }: ProductStageProps) {
  const [finish, setFinish] = useState<FinishKey>("gold")

  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-glow blur-2xl" />
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#130f1d]/85 p-4 shadow-velvet backdrop-blur-sm sm:p-6",
          compact && "rounded-[1.75rem]"
        )}
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 18%, rgba(236, 212, 153, 0.18), transparent 22%), radial-gradient(circle at 82% 22%, rgba(168, 101, 255, 0.12), transparent 24%), linear-gradient(180deg, rgba(19, 15, 29, 0.96), rgba(12, 10, 18, 0.92))"
        }}
      >
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="relative z-10 space-y-5">
            <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/10 bg-black/28 p-3">
              <div className="relative h-14 w-14 overflow-hidden rounded-[1rem] border border-white/10 bg-white/5">
                <Image
                  src={finishes[finish].image}
                  alt={finishes[finish].alt}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold/80">Eternal Hope Necklace</p>
                <p className="mt-1 text-sm text-foreground/72">A keepsake that turns gratitude into something wearable.</p>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-display text-3xl text-white">{finishes[finish].label}</p>
              <p className="text-sm leading-7 text-foreground/70">{finishes[finish].note}</p>
            </div>

            <div className="grid gap-3">
              {(Object.keys(finishes) as FinishKey[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFinish(item)}
                  className={cn(
                    "rounded-2xl border p-3 text-left transition-all duration-300",
                    finish === item
                      ? "border-gold/45 bg-gold/10 text-white"
                      : "border-white/10 bg-white/5 text-foreground/72 hover:border-lavender/45 hover:bg-lavender/5"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className="relative h-14 w-14 overflow-hidden rounded-[0.9rem] border border-white/10 bg-white/5">
                      <Image
                        src={finishes[item].thumb}
                        alt={`${finishes[item].label} necklace finish preview`}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{finishes[item].label}</span>
                      <span className="mt-1 block text-xs text-foreground/64">{finishes[item].note}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid gap-2 text-sm text-foreground/70">
              <span className="inline-flex items-center gap-2">
                <Gift className="h-4 w-4 text-gold" />
                Premium message-card presentation
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-lavender" />
                Crafted for a meaningful gifting moment
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-gold" />
                Gold and silver finishes ready to shop
              </span>
            </div>

            {!compact ? (
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Shop now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="mailto:hello@beyondlabelgifts.com"
                  className="inline-flex items-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-gold/45 hover:text-gold"
                >
                  Contact us
                </Link>
              </div>
            ) : null}
          </div>

          <div className="relative flex min-h-[420px] items-center justify-center px-2 py-8 sm:min-h-[520px]">
            <div className="absolute inset-x-6 top-8 h-24 rounded-full bg-gold/12 blur-3xl" />
            <div className="absolute inset-x-10 bottom-6 h-28 rounded-full bg-lavender/10 blur-3xl" />

            <div className="relative z-10 w-full max-w-[430px] space-y-4">
              <NecklaceShowcase finish={finish} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={finish}
                  initial={{ opacity: 0, y: 18, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pt-24"
                >
                  <div className="absolute inset-x-6 bottom-4 top-24 rounded-[2rem] bg-black/48 blur-3xl" />
                  <Link
                    href="/shop"
                    className="group relative block overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-3 shadow-halo"
                    aria-label={`Open ${finishes[finish].label} details`}
                  >
                    <div className="pointer-events-none absolute inset-x-8 top-0 h-20 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_68%)] opacity-60" />
                    <Image
                      src={finishes[finish].image}
                      alt={finishes[finish].alt}
                      width={1000}
                      height={1000}
                      className="h-auto w-full rounded-[1.5rem] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      priority
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>

              <div className="grid gap-2 rounded-[1.6rem] border border-white/10 bg-black/24 p-3 text-sm text-white/84 sm:grid-cols-3">
                <div className="rounded-[1.1rem] bg-white/5 px-3 py-3">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Gift className="h-4 w-4 text-gold" />
                    Ready to gift
                  </span>
                </div>
                <div className="rounded-[1.1rem] bg-white/5 px-3 py-3">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <Sparkles className="h-4 w-4 text-lavender" />
                    2 polished finishes
                  </span>
                </div>
                <div className="rounded-[1.1rem] bg-white/5 px-3 py-3">
                  <span className="inline-flex items-center gap-2 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                    Message card included
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function NecklaceShowcase({ finish }: { finish: FinishKey }) {
  const pendantStroke = finish === "gold" ? "rgba(244, 214, 152, 0.92)" : "rgba(220, 229, 255, 0.92)"
  const pendantGlow = finish === "gold" ? "rgba(244, 214, 152, 0.28)" : "rgba(191, 204, 255, 0.24)"

  return (
    <motion.div
      className="pointer-events-none absolute inset-x-8 top-0 z-0"
      animate={{ y: [0, -4, 0], rotate: [0, 0.7, 0, -0.7, 0] }}
      transition={{ duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 420 220" className="h-auto w-full overflow-visible">
        <defs>
          <filter id="pendant-blur">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <linearGradient id="chain-stroke" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.26)" />
            <stop offset="45%" stopColor="rgba(244,214,152,0.66)" />
            <stop offset="100%" stopColor="rgba(178,122,255,0.36)" />
          </linearGradient>
        </defs>
        <path
          d="M78 34C116 24 165 38 192 92"
          fill="none"
          stroke="url(#chain-stroke)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M342 34C304 24 255 38 228 92"
          fill="none"
          stroke="url(#chain-stroke)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d="M192 92C198 111 202 130 205 150"
          fill="none"
          stroke="url(#chain-stroke)"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <path
          d="M228 92C222 111 218 130 215 150"
          fill="none"
          stroke="url(#chain-stroke)"
          strokeLinecap="round"
          strokeWidth="1.8"
        />
        <ellipse cx="210" cy="162" rx="44" ry="17" fill={pendantGlow} filter="url(#pendant-blur)" />
        <path
          d="M210 124C226 124 239 136 239 151C239 170 223 183 210 194C197 183 181 170 181 151C181 136 194 124 210 124Z"
          fill="rgba(18,13,29,0.78)"
          stroke={pendantStroke}
          strokeWidth="2.4"
        />
        <path
          d="M210 135C220 135 228 143 228 153C228 166 217 175 210 182C203 175 192 166 192 153C192 143 200 135 210 135Z"
          fill="none"
          stroke="rgba(255,255,255,0.28)"
          strokeWidth="1.4"
        />
        <circle cx="210" cy="120" r="4.5" fill={pendantStroke} />
      </svg>
    </motion.div>
  )
}
