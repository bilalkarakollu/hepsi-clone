import React from "react";
import { Global } from "./styled/Global";
import { ThemeProvider } from "styled-components";
import { Theme } from "./types/theme";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ProductDetay from "./pages/ProductDetay";
import Sepet from "./pages/Sepet";
import Favoriler from "./pages/Favoriler";

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
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index  element={<Home />} />
          <Route path="/sepet"  element={<Sepet />} />
          <Route path="/favoriler"  element={<Favoriler />} />
          <Route path="/:id"  element={<ProductDetay />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
