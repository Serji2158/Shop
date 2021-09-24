import React from "react";
import { GlobalStyle } from "../styles/globalstyles";
import Header from "./header/Header";
import Main from "./main/Main";
import { ThemeProvider } from "styled-components";
import themes from "../themes";

const App = () => {
  return (
    <>
      <ThemeProvider theme={themes.dark}>
        <GlobalStyle />

        <Header />
        <Main />
      </ThemeProvider>
    </>
  );
};

export default App;
