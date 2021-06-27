import React from "react";
import "./App.css";
import Navbar from "components/Navbar";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "containers/styles/theme";
import Home from "containers/Home/Home";
import About from "containers/About/About";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container
          style={{
            paddingLeft: theme.spacing(22),
            color: theme.palette.text.primary,
          }}
        >
          <Home id="home-section" />
          <About id="about-section" />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
