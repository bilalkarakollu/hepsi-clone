import React from "react";
import { Global } from "./styled/Global";
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";
import Home from "./pages/Home";

const App = () => {
  const theme: Theme = {
    media: {
      xs: "only screen and (max-width: 576px)",
      sm: "only screen and (min-width: 576px)",
      md: "only screen and (min-width: 768px)",
      lg: "only screen and (min-width: 992px)",
      xl: "only screen and (min-width: 1200px)",
    },
    colors: {
      theme: "#FF6000",
      text: "#484848",
      text_hover: "white",
      background: "#FFFFFF",
      hover: "#e8e8e8",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Home/>
    </ThemeProvider>
  );
};

export default App;
