import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        lavender: "hsl(var(--lavender))",
        gold: "hsl(var(--gold))",
        plum: "hsl(var(--plum))",
        midnight: "hsl(var(--midnight))"
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"]
      },
      boxShadow: {
        halo: "0 0 120px rgba(196, 151, 88, 0.28)",
        velvet: "0 22px 65px rgba(0, 0, 0, 0.55)"
      },
      backgroundImage: {
        glow:
          "radial-gradient(circle at top, rgba(226, 189, 124, 0.16), transparent 32%), radial-gradient(circle at bottom right, rgba(186, 107, 255, 0.18), transparent 35%)"
      }
    }
  },
  plugins: []
}

export default config
