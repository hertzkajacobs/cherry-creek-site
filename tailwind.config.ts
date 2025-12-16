import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1E2557",
        lavender: "#B9B2D6",
        sage: "#A7C7B7",
        mist: "#F6F7FB",
      },
    },
  },
  plugins: [],
};
export default config;
