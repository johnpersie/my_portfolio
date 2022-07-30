import { Fragment } from "react";
import { ThemeProvider } from "styled-components";
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
    black2: "#151a1e",
    blackOpacity: "rgb(0, 0, 0, 0.8)",
    white: "#fff",
    lavender: "#e8ebed",
    whitesmoke: "  #f8f8f6",
    gainsboro: "#e1e4e6",
    // gainsboro: "#1e9bff",
    darkgray: "#b3afac",
    midnightblue: "#18043c",
    midnightblue1: "#071733",
    transparent: "transparent",
  },

  screens: {
    xsm: "414px",
    sm: "600px",
    md: "768px",
    lg: "960px",
    xl: "1280px",
  },
};

function App() {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <HomePage />
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
