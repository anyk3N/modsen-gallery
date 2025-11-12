import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ul, 
    ol {
        padding: 0;
        list-style: none;

    }

    body, h1, h2, h3, h4, p, ul, ol, li {
        margin: 0;
    }
    
    img {
        max-width: 100%;
        display: block;
    }
    
    input,
    button,
    textarea,
    select {
        font: inherit;
    }
    
`;
