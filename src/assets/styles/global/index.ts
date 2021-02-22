import { createGlobalStyle } from 'styled-components';

import { boxSizing, normalise, reset } from './base';
import { images, links, page, tables } from './elements';

export const GlobalStyles = createGlobalStyle`
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;
