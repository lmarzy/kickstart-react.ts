import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      fontSize: string;
      fontFamily: string;
      lineHeight: number;
    };
    fontSizes: { [key: number]: string };
    layout: {
      maxWidth: string;
    };
    spacing: (multiplier: number) => string;
    breakpoints: { [key: string]: string };
  }
}
