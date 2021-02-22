import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: {
      fontSize: string;
      fontFamily: string;
      lineHeight: number;
    };
    colors: {
      main: {
        text: string;
        bg: string;
      };
      brand: {
        primary: string;
        secondary: string;
      };
    };
    fontSizes: { [key: number]: string };
    maxWidth: string;
    spacers: { [key: number]: string };
    breakpoints: { [key: string]: string };
  }
}
