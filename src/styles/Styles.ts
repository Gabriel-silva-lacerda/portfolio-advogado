import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Noto Serif JP', serif;

    }

    html {
        scroll-behavior: smooth;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }
    
    a {
        text-decoration: none;
    }


`;
