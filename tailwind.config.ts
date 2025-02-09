
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
          DEFAULT: "#6C8EAD", // Muted blue (main)
          soft: "#8BA3BC",    // Softer blue
          muted: "#A9B8CB",   // Very soft blue
          dark: "#4A6F8C",    // Darker blue variant
        },
        accent: {
          DEFAULT: "#1E3A8A", // Deep navy
          soft: "#2B4A9F",    // Softer navy
          muted: "#385AB4",   // Brighter navy
        },
        cream: {
          DEFAULT: "#F5F5DC", // Classic beige
          soft: "#FEF7CD",    // Soft yellow tint
          warm: "#FDE1D3",    // Soft peach
        },
        neutral: {
          DEFAULT: "#8E9196", // Neutral gray
          dark: "#333333",    // Dark gray for text
          light: "#F4F4F6",   // Light gray for backgrounds
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
