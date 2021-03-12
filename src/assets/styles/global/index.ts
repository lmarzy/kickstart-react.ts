import { createGlobalStyle } from 'styled-components';

import { colors } from '../settings';
import { boxSizing, normalise, reset } from './base';
import { images, links, page, tables } from './elements';

export default createGlobalStyle`
  ${colors}
  ${boxSizing}
  ${reset}
  ${normalise}
  ${page}
  ${links}
  ${images}
  ${tables}
`;
