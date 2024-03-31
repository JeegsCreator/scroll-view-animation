export function matchScrollerUtilities(matchUtilities, values) {
  matchUtilities(
    {
      "animation-scroller": (value) => ({
        "--animation-scroller": `${value} !important`,
      }),
    },
    {
      values,
    },
  );
}
