import React from "react";
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitFor, render } from "@testing-library/react";
import '@testing-library/jest-dom';
import ProductDetay from "../../../pages/ProductDetay";
import { Provider } from 'react-redux';
import { store } from '../../../store'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '../../../styled/theme';

const fakeProductData = {
    title: "Licensed Wooden Pants",
    price: "686.00",
    description: "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    category: "Grocery",
    id: "1"
}

const server = setupServer(
    rest.get('https://computer-app-server.herokuapp.com/products/:id', (req, res, ctx) => {
        return res(ctx.json(fakeProductData))
    }),
)

beforeAll(() => {
    server.listen()
})
afterAll(() => {
    server.close()
})

test('allows user to log in', async () => {
    const { getAllByText } = render(<Provider store={store}><BrowserRouter><ThemeProvider theme={theme}><ProductDetay /></ThemeProvider></BrowserRouter></Provider>)

    await waitFor(() => getAllByText('Licensed Wooden Pants'));
})

