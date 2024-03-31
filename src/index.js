import createPlugin from "tailwindcss/plugin.js";
import theme from "./theme.js";
import { matchRangeUtilities } from "./utilities/range.js";
import { matchScrollerUtilities } from "./utilities/scroller.js";

/** @type {import('tailwindcss/types/config').PluginCreator} */
const pluginCreator = ({ theme, matchUtilities, addUtilities }) => {
  matchRangeUtilities(matchUtilities, theme("animationRange"));
  matchScrollerUtilities(matchUtilities, theme("animationScroller"));

  addUtilities({
    ".animation-timeline-scroll": {
      "--animation-scroller": "root",
      "--animation-axis": "block",
      "--animation-range-start": "0",
      "--animation-range-end": "100%",
      "animation-range":
        "var(--animation-range-start) var(--animation-range-end)",
      "animation-timeline":
        "scroll(var(--animation-scroller) var(--animation-axis))",
      "animation-fill-mode": "both !important",
      "animation-iteration-count": "unset !important",
      "animation-duration": "auto !important",
    },
    ".animation-timeline-view": {
      "--animation-axis": "block",
      "--animation-range-start": "0",
      "--animation-range-end": "100%",
      "animation-range":
        "entry var(--animation-range-start) cover var(--animation-range-end)",
      "animation-timeline": "view(var(--animation-axis))",
      "animation-fill-mode": "both !important",
      "animation-iteration-count": "unset !important",
      "animation-duration": "auto !important",
    },
    ".animation-axis-x": {
      "--animation-axis": "inline !important",
    },
    ".animation-axis-y": {
      "--animation-axis": "block !important",
    },
  });
};

/** @type {import('tailwindcss/types/config').Config} */
const pluginsConfig = {
  theme,
};

export default createPlugin(pluginCreator, pluginsConfig);
