import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};

    body {
        font-family: "Jua" , sans-serif;
    }


    a {
        color : inherit;
        text-decoration : none;
    }

    


`;

export default GlobalStyle;
