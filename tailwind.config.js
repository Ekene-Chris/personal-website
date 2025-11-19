/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Afro-Futurism color palette
        "deep-charcoal": "#0a0a0a",
        "dark-bg": "#0f0f0f",
        "card-dark": "#1a1a1a",
        linen: "#FFF4E9",
        black: "#111111",
        "caput-mortuum": "#592429",
        "kombu-green": "#2B3B2E",
        gold: "#FFD700",
        "gold-dim": "#B8860B",
        "accent-glow": "#FF6B35",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        mono: ["'JetBrains Mono'", "'Geist Mono'", "monospace"],
        script: ["Cormorant Garamond", "serif"],
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
        fadeInLeft: "fadeInLeft 0.5s ease-out forwards",
        fadeInRight: "fadeInRight 0.5s ease-out forwards",
        bounce: "bounce 1s infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        cardHover: "cardHover 0.3s ease-out forwards",
        "spin-slow": "spin 20s linear infinite",
        "spin-slow-reverse": "spin 30s linear infinite reverse",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        cardHover: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.5)" },
          "50%": { boxShadow: "0 0 40px rgba(255, 215, 0, 0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(255, 215, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.05) 1px, transparent 1px)",
        "dot-pattern":
          "radial-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px)",
        "noise":
          "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')",
      },
      backgroundSize: {
        "grid-size": "50px 50px",
        "dot-size": "20px 20px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
