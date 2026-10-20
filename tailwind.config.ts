import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0F17",
          900: "#111827",
          850: "#151C28",
          800: "#1F2937",
          700: "#374151",
        },
        mist: {
          50: "#F9FAFB",
          400: "#9CA3AF",
        },
        signal: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          green: "#22C55E",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 18px 40px -24px rgba(0, 0, 0, 0.65)",
        lift: "0 22px 44px -20px rgba(6, 182, 212, 0.18)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(55,65,81,0.18) 1px, transparent 1px), linear-gradient(to bottom, rgba(55,65,81,0.18) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
