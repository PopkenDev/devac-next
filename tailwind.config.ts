import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "50": "#f7f7f7",
          "100": "#ededed",
          "200": "#dfdfdf",
          "300": "#c8c8c8",
          "400": "#adadad",
          "500": "#a0a0a0",
          "600": "#888888",
          "700": "#7b7b7b",
          "800": "#676767",
          "900": "#545454",
          "950": "#363636",
        },
        orange: {
          50: "#fef3f2",
          100: "#fee5e2",
          200: "#fed0ca",
          300: "#fbb1a6",
          400: "#f78272",
          500: "#ee5a45",
          600: "#db3f29",
          700: "#b8301d",
          800: "#982b1c",
          900: "#7e2a1e",
          950: "#45110a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
