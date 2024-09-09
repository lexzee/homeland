import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-image": "url('../Assets/timur-garifov-sisZWCDkmwA-unsplash.jpg')",
        "intro-bg": "url('../Assets/hot-air-balloon-5987843_1280.jpg')",
      },
      colors: {
        brand: "#CD7F32",
      },
    },
  },
  plugins: [],
};
export default config;
