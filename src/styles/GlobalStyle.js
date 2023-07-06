import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        font-family: Helvetica;
        button { border: 0; }
    }
`;

export default GlobalStyle;
