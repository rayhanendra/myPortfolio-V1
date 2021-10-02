import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "containers/styles/theme";
import Home from "containers/Home/Home";
import About from "containers/About/About";
import Project from "containers/Project/Project";
import Navbar from "components/Navbar";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container
          maxWidth="xl"
          sx={{
            paddingLeft: { lg: 12 },
          }}
        >
          <Home />
          <About />
          <Project />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
