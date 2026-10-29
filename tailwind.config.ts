import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom SAS Color Palette
        sas: {
          black: "#0a0a0a",      // Deepest background
          dark: "#121212",       // Card background
          burgundy: "#631227",   // Primary Action / Brand Color
          burgundyHover: "#801a34",
          gold: "#c5a059",       // Headings and accents
          goldMuted: "#a8894a",
          cream: "#f5f5f5",      // Body text
        },
      },
      fontFamily: {
        // High-end serif for headings, clean sans for body
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        // Custom gradient for that stage-light feel
        "stage-gradient": "radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%)",
        "gold-text-gradient": "linear-gradient(to right, #c5a059, #f5e6c8, #c5a059)",
      },
      animation: {
        // For custom UI details like the glow or subtle floating
        "glow-pulse": "glow 3s infinite ease-in-out",
      },
      keyframes: {
        glow: {
          "0%, 100%": { boxShadow: "0 0 10px rgba(99, 18, 39, 0.2)" },
          "50%": { boxShadow: "0 0 25px rgba(99, 18, 39, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;