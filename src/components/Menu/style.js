import styled from "styled-components";


const Header = styled.header`
    width: 100%;
    padding: 5px;
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-around;
    color: rgb(255, 255, 255);
    font-size: 45px;
    background-color: rgb(0, 0, 0);

    .buttonmenu{
        position: fixed;
        top: 10px;
        right: 10px;
    }

    @media (min-width: 650px) {
        align-items: center;

        .buttonmenu {
            display: none;
        }
    }

    @media (min-width: 900px) {
        flex-direction: row;
    }
`;

const DivIcons = styled.div`
    display: flex;
    margin: 10px;
`;

const DivMenu = styled.div`
    display: none;
    padding: 15px;
    align-items: center;
    flex-direction: column;

    @media (min-width: 650px) {
        display: flex;
        flex-direction: row;
    }
`;

const LinkIcon = styled.a`
    font-size: 45px;
    display: flex;
    cursor: pointer;
`;

const LinkMenu = styled.a`
    padding: 5px 10px;
    font-weight: 900;
    font-size: 20px;
    cursor: pointer;

    @media (min-width: 650px) {
        font-size: 18px;
    }
`;


export {
    Header,
    DivIcons,
    DivMenu,
    LinkIcon,
    LinkMenu
};
