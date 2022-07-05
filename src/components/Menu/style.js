import styled from "styled-components";


const Header = styled.header`
    width: 100%;
    padding: 15px;
    display: flex;
`;

const DivIcons = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
    padding: 5px 0;
`;

const DivMenu = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LinkIcon = styled.a`
    margin: 10px;
    font-size: 30px;
`;

const LinkMenu = styled.a`
    padding: 5px 10px;
    margin: 5px;
    font-weight: bolder;
    color: rgb(255, 255, 255);
`;


export {
    Header,
    DivIcons,
    DivMenu,
    LinkIcon,
    LinkMenu
};
