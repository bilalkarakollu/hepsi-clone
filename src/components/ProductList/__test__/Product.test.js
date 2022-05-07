import React from 'react';
import { screen, render } from '@testing-library/react';
import Product from '../Product';
import { Provider } from 'react-redux';
import { store } from '../../../store'
import '@testing-library/jest-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../styled/theme';

const productData = {
    id: "1",
    title: "Macbook Pro",
    price: "500",
    description: "selamlar2",
    category: "selamlar3"
}

describe("Product Test", () => {
    beforeEach(() => {
        render(<Provider store={store}><BrowserRouter><ThemeProvider theme={theme}><Product product={productData} /></ThemeProvider></BrowserRouter></Provider>);
    })

    test("Sepete ekle buttonu var mı?", () => {
        expect(screen.getByRole("button", { name: 'Sepete Ekle' }));
    })

    test("Favori ekle butonu var mı?", () => {
        expect(screen.getByTestId('prdouct-fav-btn')).toBeInTheDocument();
    })

    test("Img var mı?", () => {
        expect(screen.getByRole("img"));
    })

    test("Title var mı?", () => {
        expect(screen.getByText("Macbook Pro"));
    })

    test("Price var mı?", () => {
        expect(screen.getByText("500 TL"));
    })
})

