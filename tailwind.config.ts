import type { Config } from 'tailwindcss'

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blush: "#F5E6E8",
        coral: "#FF6F61",
        ink: "#0F172A",
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        softxl: "0 20px 60px rgba(0,0,0,.08)"
      },
      borderRadius: {
        "2xlp": "28px"
      }
    },
  },
  plugins: [],
} satisfies Config
