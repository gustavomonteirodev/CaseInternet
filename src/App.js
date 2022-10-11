import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home/Home";
import GlobalState from "./Global/GlobalState";
import "./App.css"

function App() {

  return (
    <GlobalState >
      <ThemeProvider theme={theme}>
      <Header />
      <Home  />
      <Footer />
      </ThemeProvider>
      </GlobalState>
  );
}

export default App;
