import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import { GlobalStyles } from "./GlobalStyle";
import Home from "./components/Pages/Home/Home";
import Offers from "./components/Pages/Offers/Offers";

function App() {
  return (
      <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <h1> Olá, seja bem-vindo!</h1>
      <Home />
      <Offers />
      <Footer />
      </ThemeProvider>
  );
}

export default App;
