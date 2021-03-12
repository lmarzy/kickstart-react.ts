// ========================================================================
// THEME/BREAKPOINTS
// ========================================================================

import { pxToEm } from '../utils';

const generateMediaQuery = (width: number): string => {
  return `(min-width: ${pxToEm(width)})`;
};

export const breakpoints = {
  10: generateMediaQuery(600),
  20: generateMediaQuery(1000),
};
