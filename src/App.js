import React from "react";
import "./App.css";
// import Navbar from "components/Navbar";
import { Box, CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "containers/styles/theme";
import Home from "containers/Home/Home";
import About from "containers/About/About";
import Project from "containers/Project/Project";
import Navbar from "components/Navbar";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Box
          maxWidth="xl"
          style={{
            // paddingLeft: theme.spacing(22),
            backgroundColor: "#1C1F33",
          }}
        >
          <Home />
          <About />
          <Project />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
