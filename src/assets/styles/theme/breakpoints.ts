// ========================================================================
// THEME/BREAKPOINTS
// ========================================================================

const generateMediaQuery = (width: number): string => {
  return `(min-width: ${width}px)`;
};

export const breakpoints = {
  10: generateMediaQuery(600),
  20: generateMediaQuery(1000),
};
