import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  kicker?: string
  title: string
  body?: string
  align?: "left" | "center"
}

export function SectionHeading({
  kicker,
  title,
  body,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", align === "center" && "mx-auto max-w-3xl text-center")}>
      {kicker ? (
        <p className="text-sm uppercase tracking-[0.28em] text-lavender/80">{kicker}</p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl">{title}</h2>
      {body ? <p className="max-w-2xl text-base leading-8 text-foreground/76">{body}</p> : null}
    </div>
  )
}
