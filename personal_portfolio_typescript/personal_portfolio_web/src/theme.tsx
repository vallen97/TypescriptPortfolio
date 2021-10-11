import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  xs: "20em", // 320px
  sm: "36em", // 576px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "75em", // 1200px
  "2xl": "87.5em", // 1400px
});

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const colors = {
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      900: "#171923",
    },
  },
};

const fontSize = {
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
};

const styles = {
  global: {
    Button: {
      colorScheme: "teal",
      variant: "solid",
    },
  },
};

const components = {
  Button: {
    defaultProps: {
      colorScheme: "teal",
      variant: "solid",
      fontWeight: "bold",
    },
  },
};

const theme = extendTheme({
  breakpoints,
  colors,
  fontSize,
  styles,
  components,
});

export default theme;
