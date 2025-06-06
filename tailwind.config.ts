
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
        // Primary (60%) - Beige family
        primary: {
          DEFAULT: "#F5F5DC", // Main beige
          light: "#FFFFF0",   // Lighter beige
          dark: "#E8E8D0",    // Darker beige
          muted: "#F0F0E0",   // Muted beige
        },
        // Secondary (30%) - Blue family
        secondary: {
          DEFAULT: "#6C8EAD", // Main blue
          light: "#8BA3BC",   // Lighter blue
          dark: "#4A6F8C",    // Darker blue
          muted: "#A9B8CB",   // Muted blue
        },
        // Accent (10%) - Deep navy & highlights
        accent: {
          DEFAULT: "#1E3A8A", // Deep navy
          light: "#2B4A9F",   // Lighter navy
          dark: "#152C6B",    // Darker navy
          contrast: "#FF8A50", // Improved orange accent for better contrast
        },
        // Improved neutral colors for better contrast
        neutral: {
          DEFAULT: "#8E9196",
          dark: "#2D3748",    // Darker for better readability
          light: "#F4F4F6",
        }
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
        'hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
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
        "scale-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "slide-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "fade-in": "fade-in 0.3s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
