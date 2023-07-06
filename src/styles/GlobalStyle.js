import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        --primary-color: #1abc9c;
        --primary-color-hover: #16a085;
        --danger-color : #e74c3c;
        --danger-color-hover : #c0392b;
    }
    * {
        font-family: Helvetica;
        button { border: 0; }
    }
`;

export default GlobalStyle;
