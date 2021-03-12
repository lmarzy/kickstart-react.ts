// ========================================================================
// THEME/SPACINGS
// ========================================================================

import { lineHeightPx } from '../settings';
import { pxToRem } from '../utils';

const spacer = lineHeightPx / 4;

export const spacing = (multiplier = 1): string => {
  return pxToRem(spacer * multiplier);
};
