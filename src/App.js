import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar";
import HomePage from "./component/Pages/HomePage";
import { GlobalStyles } from "./GlobalStyles";

const theme = {
  color: {
    orange: "#ffc75f",
    orange1: "#ff9f5f",
    orange2: "#feb72b",
    green3: "#2F7A85",
    aquamarine: "#86f3df",
    black: "#000",
    black1: "#070b0d",
    blackOpacity: "rgb(0, 0, 0, 0.8)",
    blackOpacity1: "rgb(0, 0, 0, 0.95)",
    black2: "#151a1e",
    gray: "#2e2d2c",
    darkgray: "#b3afac",
    white: "#fff",
    white1: "#e8ebed",
    whitesmoke: "  #f8f8f6",
    gainsboro: "#e1e4e6",
    midnightblue: "#18043c",
    midnightblue1: "#071733",
    transparent: "transparent",
  },

  screens: {
    xsm: "414px",
    sm: "600px",
    md: "768px",
    mid: "820px",
    lg: "960px",
    xl: "1280px",
  },
};

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <HomePage />
        <Footer />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
