import scrollViewAnimationsPlugin from "@jeegscreator/scroll-view-animation";
import miduAnimationPlugin from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./tests/browser/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [scrollViewAnimationsPlugin, miduAnimationPlugin],
};
