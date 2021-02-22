// ========================================================================
// THEME/FONT-SIZES
// ========================================================================

import { lineHeightPx } from '../settings';
import { pxToRem } from '../utils';

const multiplier = lineHeightPx / 4;
const range = 8;

export const fontSizes = {} as { [key: number]: string };

for (let i = 1; i <= range; i++) {
  fontSizes[i] = pxToRem(multiplier * i);
}
