import { DefaultTheme } from 'styled-components';

import { breakpoints } from './breakpoints';
import { fontSizes } from './font-sizes';
import { layout } from './layout';
import { spacing } from './spacing';
import { typography } from './typography';

export const theme: DefaultTheme = {
  typography,
  fontSizes,
  layout,
  spacing,
  breakpoints,
};
