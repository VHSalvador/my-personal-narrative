
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#5B8FB9",    // Steel Blue (main)
          hover: "#4A7DA7",      // Darker Steel Blue for hover
          light: "#7CAAD4",      // Lighter Steel Blue
          dark: "#1E3A8A",       // Deep Navy Blue
        },
        beige: {
          DEFAULT: "#F5F5DC",    // Soft Beige (main)
          light: "#FAFAF2",      // Lighter Beige
          hover: "#EFEFE0",      // Hover Beige
          dark: "#E5E5CC",       // Darker Beige
        },
        neutral: {
          DEFAULT: "#333333",    // Dark Gray (text)
          light: "#666666",      // Light Gray (secondary text)
          lighter: "#999999",    // Lighter Gray (disabled text)
          white: "#FFFFFF",      // Pure White
        }
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
