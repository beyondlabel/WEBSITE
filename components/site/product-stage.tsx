"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Gift, ShieldCheck, Sparkles } from "lucide-react"
import { productImages } from "@/data/site"
import { cn } from "@/lib/utils"

const finishes = {
  gold: {
    label: "18K Yellow Gold finish",
    note: "Warm, radiant, and made for the person whose love deserves a brighter spotlight.",
    summary: "Warm, radiant, celebratory",
    image: productImages.gold[0],
    alt: "18K yellow gold Eternal Hope Necklace displayed over a heartfelt message card in a premium gift box",
    thumb: productImages.gold[5]
  },
  silver: {
    label: "14K White Gold finish",
    note: "Clean, brilliant, and perfect for a message meant to stay close every day.",
    summary: "Clean, bright, silver-toned elegance",
    image: productImages.silver[0],
    alt: "14K white gold Eternal Hope Necklace displayed over a heartfelt message card in a premium gift box",
    thumb: productImages.silver[5]
  }
} as const

type FinishKey = keyof typeof finishes

interface ProductStageProps {
  className?: string
  compact?: boolean
}

export function ProductStage({ className, compact = false }: ProductStageProps) {
  const [finish, setFinish] = useState<FinishKey>("gold")
  const activeFinish = finishes[finish]

  return (
    <div className={cn("relative", className)}>
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-gold/10 blur-3xl" />
      <div
        className={cn(
          "relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#130f1d]/88 p-4 shadow-velvet backdrop-blur-sm sm:p-6 lg:p-7",
          compact && "rounded-[1.75rem]"
        )}
        style={{
          backgroundImage:
            "radial-gradient(circle at 16% 12%, rgba(236, 212, 153, 0.16), transparent 22%), radial-gradient(circle at 86% 16%, rgba(168, 101, 255, 0.12), transparent 24%), linear-gradient(180deg, rgba(19, 15, 29, 0.97), rgba(12, 10, 18, 0.94))"
        }}
      >
        <div className="grid gap-8 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
          <div className="relative order-2 z-10 space-y-5 lg:order-1">
            <div className="inline-flex items-center gap-4 rounded-[1.2rem] border border-white/10 bg-black/28 px-5 py-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-[1rem] border border-white/10 bg-white/5">
                <Image
                  src={activeFinish.thumb}
                  alt={`${activeFinish.label} necklace detail`}
                  fill
                  className="object-cover object-center"
                  sizes="64px"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold/80">
                  Eternal Hope Necklace
                </p>
                <p className="mt-1 text-sm text-foreground/72">
                  A keepsake that turns gratitude into something wearable.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-[0.24em] text-lavender/74">
                  Choose your finish
                </p>
                <p className="font-display text-4xl leading-tight text-white">
                  {activeFinish.label}
                </p>
              </div>
              <p className="max-w-lg text-sm leading-7 text-foreground/72">{activeFinish.note}</p>
            </div>

            <div className="grid gap-3">
              {(Object.keys(finishes) as FinishKey[]).map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFinish(item)}
                  className={cn(
                    "block w-full rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#130f1d]",
                    finish === item
                      ? "border-gold/45 bg-gold/10 text-white"
                      : "border-white/10 bg-white/5 text-foreground/72 hover:border-lavender/45 hover:bg-lavender/5"
                  )}
                  aria-pressed={finish === item}
                >
                  <div className="grid items-center gap-4 sm:grid-cols-[5.25rem_1fr]">
                    <div className="relative h-20 w-20 overflow-hidden rounded-[1rem] border border-white/10 bg-white/5">
                      <Image
                        src={finishes[item].thumb}
                        alt={`${finishes[item].label} necklace finish preview`}
                        fill
                        className="object-cover object-center"
                        sizes="80px"
                      />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-xl font-semibold text-white">
                        {finishes[item].label}
                      </span>
                      <span className="mt-2 block text-sm leading-6 text-foreground/72">
                        {finishes[item].summary}
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="grid gap-2 text-sm text-foreground/74">
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
                Yellow gold and white gold finishes
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

          <div className="relative order-1 xl:order-2">
            <div className="absolute inset-x-10 top-10 h-24 rounded-full bg-gold/12 blur-3xl" />
            <div className="absolute inset-x-16 bottom-10 h-28 rounded-full bg-lavender/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 sm:p-5">
              <div className="grid gap-4">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0d0914] p-4 sm:p-5">
                  <div className="absolute inset-x-12 top-5 h-20 rounded-full bg-gold/10 blur-3xl" />
                  <div className="relative aspect-[4/4.3] overflow-hidden rounded-[1.15rem]">
                    <Image
                      src={activeFinish.image}
                      alt={activeFinish.alt}
                      fill
                      priority
                      className="object-contain object-center"
                      sizes="(min-width: 1024px) 40vw, 88vw"
                    />
                  </div>
                </div>

                <div className="grid gap-2 min-[460px]:grid-cols-3">
                  <div className="rounded-[1.15rem] border border-white/10 bg-black/22 px-3 py-4 text-sm text-white/84">
                    <span className="flex items-center justify-center gap-2 text-center font-medium leading-tight">
                      <Gift className="h-4 w-4 text-gold" />
                      Gift-ready
                    </span>
                  </div>
                  <div className="rounded-[1.15rem] border border-white/10 bg-black/22 px-3 py-4 text-sm text-white/84">
                    <span className="flex items-center justify-center gap-2 text-center font-medium leading-tight">
                      <Sparkles className="h-4 w-4 text-lavender" />
                      2 finishes
                    </span>
                  </div>
                  <div className="rounded-[1.15rem] border border-white/10 bg-black/22 px-3 py-4 text-sm text-white/84">
                    <span className="flex items-center justify-center gap-2 text-center font-medium leading-tight">
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                      Card included
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
