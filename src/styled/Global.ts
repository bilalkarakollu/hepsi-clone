import styled, { createGlobalStyle } from "styled-components";
import { RowProps } from "../types/global.styled";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body {
        font-family: 'Roboto', sans-serif; 
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export const Container = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 20px;
`;

export const Row = styled.div<RowProps>`
    display: grid;
    grid-template-columns: ${({templateColumns}) => templateColumns};
    gap: ${({gap}) => gap}rem;
`;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;