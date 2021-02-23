import { DefaultTheme } from 'styled-components';

import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { fontSizes } from './font-sizes';
import { layout } from './layout';
import { spacers } from './spacing';
import { typography } from './typography';

export const theme: DefaultTheme = {
  typography,
  colors,
  fontSizes,
  layout,
  spacers,
  breakpoints,
};
