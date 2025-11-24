import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      headerBg: string;
      footerBg: string;
      background: string;
      textPrimary: string;
      textSecondary: string;
      textMuted: string;
      border: string;
      divider: string;
      hover: string;
    };
    fonts: {
      roboto: string;
      lexend: string;
      montserrat: string;
      alumni: string;
      signika: string;
    };
    breakpoints: {
      sm: int;
      md: int;
      lg: int;
      xl: int;
      xxl: int;
    };
  }
}
