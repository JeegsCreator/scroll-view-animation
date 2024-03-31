export function matchRangeUtilities(matchUtilities, values) {
  matchUtilities(
    {
      "animation-range-s": (value) => {
        console.log("value", value);
        return {
          "--animation-range-start": `${value} !important`,
        };
      },
      "animation-range-e": (value) => ({
        "--animation-range-end": `${value} !important`,
      }),
    },
    {
      values,
    },
  );
}
