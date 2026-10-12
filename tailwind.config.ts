import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "gold-light": "#F5E6A3",
        "gold-glow": "rgba(212,175,55,0.25)",
        maroon: "#8B1A1A",
        crimson: "#C41E3A",
        "deep-bg": "#0D0506",
        "mid-bg": "#180A0F",
        cream: "#FFF8F0",
        "cream-dark": "#F0E6D0",
        petal: "#FFB6C1",
        "rose-gold": "#B76E79",
        sage: "#355E3B",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        cormorant: ["var(--font-cormorant)", "serif"],
        raleway: ["var(--font-raleway)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
