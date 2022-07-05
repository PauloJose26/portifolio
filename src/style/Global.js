import styled from "styled-components";
import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    body, main, div, header, a{
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
        font-size: 100%;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: normal;
        text-decoration: none;
        outline: none;
        color: black;
    }
`;

const Main = styled.main`
    width: 100%;
    height: 100vh;
    background-color: rgb(0, 0, 128);
`;


export {
    GlobalStyle,
    Main,
};
