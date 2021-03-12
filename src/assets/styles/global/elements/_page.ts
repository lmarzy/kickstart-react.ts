// ========================================================================
// GLOBAL/ELEMENTS/PAGE
// ========================================================================

// min-height - Ensures the page fills at least the entire height of the viewport
// font-size - Set to 100%, this allows the site to adapt to the font size being used by the browser instead of forcing this value on the user
// font-family -  Set to allow the font to cascade to all elements
// line-height -  For overall site line height and vertical rhytym, should be a unitless value
// color - Set for all text elements
// background-color - Set for page background colour
// -ms* - Prevent adjustments of font size after orientation changes in IE on Windows Phone and in iOS.

import { css } from 'styled-components';

export const page = css`
  html {
    min-height: 100%;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-size: ${({ theme }) => theme.typography.fontSize};
    line-height: ${({ theme }) => theme.typography.lineHeight};
    color: var(--text-color);
    background-color: var(--bg-color);
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }
`;
