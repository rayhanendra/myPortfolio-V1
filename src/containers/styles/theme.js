/**
 * theme for MUI
 * TODO: create a theme object as per designs
 */
import { createMuiTheme } from "@material-ui/core";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#F4E04D",
    },
    text: {
      primary: "#FFFFFF",
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
});

export default theme;
