"use client"

import { motion } from "framer-motion"

export function BondAnimation() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <motion.svg
        viewBox="0 0 560 560"
        className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 opacity-80"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <defs>
          <linearGradient id="bond-gold" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(244,214,152,0.7)" />
            <stop offset="100%" stopColor="rgba(158,103,255,0.25)" />
          </linearGradient>
          <linearGradient id="bond-violet" x1="100%" x2="0%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(176,121,255,0.65)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.18)" />
          </linearGradient>
        </defs>
        <path
          d="M166 280c0-63 51-114 114-114 44 0 82 24 101 60 19-36 57-60 101-60 63 0 114 51 114 114S545 394 482 394c-44 0-82-24-101-60-19 36-57 60-101 60-63 0-114-51-114-114Z"
          fill="none"
          stroke="url(#bond-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="14 12"
        />
        <path
          d="M78 280c0-111 91-202 202-202 76 0 142 42 176 104 34-62 100-104 176-104 111 0 202 91 202 202S743 482 632 482c-76 0-142-42-176-104-34 62-100 104-176 104C169 482 78 391 78 280Z"
          transform="translate(-176 0)"
          fill="none"
          stroke="url(#bond-violet)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
      </motion.svg>

      <motion.div
        className="absolute left-[16%] top-[22%] h-3 w-3 rounded-full bg-gold/70 blur-[1px]"
        animate={{ y: [0, -14, 0], opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-[28%] h-2.5 w-2.5 rounded-full bg-lavender/70 blur-[1px]"
        animate={{ y: [0, 12, 0], opacity: [0.2, 0.72, 0.2] }}
        transition={{ duration: 3.6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[22%] left-[24%] h-2 w-2 rounded-full bg-white/70 blur-[1px]"
        animate={{ x: [0, 10, 0], opacity: [0.2, 0.65, 0.2] }}
        transition={{ duration: 5.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}
