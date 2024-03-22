import scrollAnimationPlugin from "../src/index.js";
import miduAnimationPlugins from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(78,77,138,0.2)",
        secondary: "#0d0d0d",
      },
      animation: {
        alert: "alert 3s ease-in-out both",
      },
      keyframes: {
        alert: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "15%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "85%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [scrollAnimationPlugin, miduAnimationPlugins],
};
