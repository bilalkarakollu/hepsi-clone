import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { store } from '../../../store'
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../styled/theme';
import ProductView from "../ProductView";

const fakeProductData = {
    id: "1",
    title: "Macbook Pro",
    price: "500",
    description: "selamlar2",
    category: "selamlar3"
}

describe("Product View",() => {

    beforeEach(() => {
        render(<Provider store={store}><BrowserRouter><ThemeProvider theme={theme}><ProductView product={fakeProductData} isLoading={false} error={''} /></ThemeProvider></BrowserRouter></Provider>);
    })

    test("Sepete ekle buttonu var mı?", () => {
        expect(screen.getByRole("button", { name: 'Sepete Ekle' }));
    })

    test("Beğen buton var mı?", ()=>{
        expect(screen.getByRole("button", { name: 'Beğen'}));
    })

    test("Price var mı?", () => {
        expect(screen.getByText("500"))
    })

    test("Title var mı?", () => {
        expect(screen.getAllByText("Macbook Pro"));
    })

    test("Product Sepet Buton Artır", () => {
        userEvent.click(screen.getByRole("button", {name: '+'}));
        expect(screen.getByTestId("product-adet-input")).toHaveValue("2");
    })
    
    test("Product Sepet Buton Azalt", () => {
        userEvent.click(screen.getByRole("button", {name: '-'}));
        expect(screen.getByTestId("product-adet-input")).toHaveValue("0");
    })
    
})