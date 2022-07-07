import styled from "styled-components";


const Div = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (min-width: 650px) {
        display: none;
    }
`;

const DivMenu = styled.div`
    width: 80%;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    position: relative;

    .closed{
        position: absolute;
        top:5px;
        right: 5px;
    }
`;

const LinkMenu = styled.a`
    padding: 5px 10px;
    margin: 10px;
    font-weight: bolder;
    font-size: 20px;
    cursor: pointer;
    color: rgb(255, 255, 255);

    @media (min-width: 650px) {
        font-size: 18px;
    }
`;


export {
    Div,
    DivMenu,
    LinkMenu,
};
