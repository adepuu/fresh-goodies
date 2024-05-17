import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "sf-pro-display": ["SF Pro Display"]
      },
      colors: {
        "weathered-stone": "#C4C4C4",
        "whitest-white": "#F9F8F6",
      }
    },
  },
  plugins: [],
};
export default config;
