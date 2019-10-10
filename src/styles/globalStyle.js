  
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0; 
        box-sizing: inherit
    }

    html {
        /* 1rem = 10px, 10/16 = 62,5% */
        font-size: 62,5%;
    }
    
    body {
        margin: 0;
        font-family: "Optima", sans-serif;
        background-color: #C38D9E

`

export default GlobalStyles;