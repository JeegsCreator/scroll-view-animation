import scrollViewAnimationsPlugin from "./src/index.js";
import miduAnimationPlugin from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./tests/browser/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [scrollViewAnimationsPlugin, miduAnimationPlugin],
};
