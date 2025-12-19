import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },

      colors: {
        background: "#FFFFFF",
        surface: "#FAFAFA",
        primary: "#1C1C1C",
        secondary: "#555555",
        accent: "#E6DED5", // warm beige
      },

      fontSize: {
        h1: ["3.5rem", { lineHeight: "1.15" }],
        h2: ["2.25rem", { lineHeight: "1.25" }],
        h3: ["1.5rem", { lineHeight: "1.35" }],
        body: ["1rem", { lineHeight: "1.7" }],
        small: ["0.875rem", { lineHeight: "1.6" }],
      },

      spacing: {
        sectionDesktop: "6rem", // 96px
        sectionMobile: "3rem",  // 48px
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}

export default config
