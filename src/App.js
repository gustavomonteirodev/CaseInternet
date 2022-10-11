import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import theme from "./constants/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./Pages/Home/Home";
import Offers from "./Pages/Offers/Offers";
import "./App.css"

function App() {
  return (
      <ThemeProvider theme={theme}>
      <Header />
      <Home />
      <Offers />
      <Footer />
      </ThemeProvider>
  );
}

export default App;
