import React, { FunctionComponent, ReactElement } from 'react';
import { ThemeProvider as Theme } from 'styled-components';

import { theme } from '../assets/styles/theme';

export const ThemeProvider: FunctionComponent = ({ children }): ReactElement => (
  <Theme theme={theme}>{children}</Theme>
);
