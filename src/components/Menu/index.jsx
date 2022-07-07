import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImMenu } from "react-icons/im";

import ModalMenu from "../ModalMenu";
import { Header, DivIcons, DivMenu, LinkIcon, LinkMenu } from "./style";


const Menu = () => {
    const [ menu, setMenu ] = useState(false);

    return (
        <Header>
            <ImMenu className="buttonmenu" onClick={ () => setMenu(true) } />
            <DivIcons>
                <LinkIcon>
                    <AiFillGithub />
                </LinkIcon>
                <LinkIcon>
                    <AiFillLinkedin />
                </LinkIcon>
            </DivIcons>
            <DivMenu>
                <LinkMenu href="#banner">{ "< Dev / Paulo >" }</LinkMenu>
                <LinkMenu href="#description">Sobre</LinkMenu>
                <LinkMenu href="#technology">Tecnologias</LinkMenu>
                <LinkMenu>Qualificações</LinkMenu>
                <LinkMenu href="#projects">Projetos</LinkMenu>
            </DivMenu>
            { menu ? <ModalMenu setMenu={ setMenu } />: <></> }
        </Header>
    );
};


export default Menu;
