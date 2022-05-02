import { createGlobalStyle } from "styled-components";

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
`;
