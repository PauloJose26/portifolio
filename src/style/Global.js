import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body, main, div, header, a, button, section, article, figure, img, h1, h2, p {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: normal;
        text-decoration: none;
        outline: none;
    }
`;

const Main = styled.main`
    width: 100%;
    height: 100vh;
`;


export {
    GlobalStyle,
    Main,
};
