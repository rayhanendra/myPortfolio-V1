/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      //Yellow
      main: "#F4E04D",
      accent: "#00C49A",
    },
    text: {
      primary: "#FFFFFF",
      //Blue
      secondary: "#1C1F33",
    },
    background: {
      paper: "#1C1F33",
      default: "#1C1F33",
    },
  },

  typography: {
    fontFamily: ['"Poppins"', "sans-serif"].join(","),
    h1: {
      fontSize: "38px",
      fontWeight: 600,
    },
    h2: {
      fontSize: "24px",
      fontWeight: 200,
    },
    h3: {
      fontSize: "20px",
      fontWeight: 600,
    },
    h4: {
      fontSize: "16px",
      fontWeight: 200,
    },
    h5: {
      fontSize: "14px",
      fontWeight: 400,
    },
    body1: {
      fontSize: "20px",
      fontWeight: 200,
    },
    body2: {
      fontSize: "14px",
      fontWeight: 600,
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
