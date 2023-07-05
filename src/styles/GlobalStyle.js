import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --primary-color: #1abc9c;
        --primary-color-hover: #16a085;
    }
    * {
        font-family: Helvetica;
        button { border: 0; }
    }
`;

export default GlobalStyle;
