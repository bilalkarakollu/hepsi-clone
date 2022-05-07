import React from "react";
import { Global } from "./styled/Global";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import ProductDetay from "./pages/ProductDetay";
import Sepet from "./pages/Sepet";
import Favoriler from "./pages/Favoriler";
import { Provider } from "react-redux";
import { store } from "./store";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./styled/theme";

const App = () => {
  
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Global />
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            limit={1}
          />
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<Home />} />
              <Route path="/sepet" element={<Sepet />} />
              <Route path="/favoriler" element={<Favoriler />} />
              <Route path="/:id" element={<ProductDetay />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
