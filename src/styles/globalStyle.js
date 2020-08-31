import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing:  border-box;
        list-style: none;
    }
    body {
        font-family: 'Montserrat', sans-serif;
    }
    p { 
        max-width: 600px;
        padding: 8px 0;
        line-height: 150%;
    }
    button {
        border: none;
        box-shadow: none;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        cursor: pointer;

        &:hover {
            opacity: 0.6;
        }
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    img {
        width: 100%;
    }
    h1, h2 {
        margin: 16px 0;
    }
`