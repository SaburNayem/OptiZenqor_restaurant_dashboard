import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./services/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#182026",
        sand: "#f6f1e8",
        stone: "#efe8dc",
        ember: "#b24a2f",
        olive: "#5e6b49",
        gold: "#c89b3c",
        mint: "#d8ebe2"
      },
      boxShadow: {
        panel: "0 20px 45px rgba(24, 32, 38, 0.08)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"]
      }
    }
  },
  plugins: []
};

export default config;
