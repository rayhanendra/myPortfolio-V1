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
      main: "#020179",
    },
    tertiary: {
      main: "#03019F",
    },
    success: {
      main: "#005108",
    },
    merah: {
      main: "#AC0000",
    },
    black: {
      primary: "#3D434A",
      secondary: "#515B69",
      tertiary: "#E4E4E4",
    },
    optional: {
      main: "#1E1E1E",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#FFFFFF",
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
